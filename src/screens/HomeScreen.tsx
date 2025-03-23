import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from '../styles/styles';
import SettingIcon from '../assets/icons/settings';
import LinearGradient from 'react-native-linear-gradient';
import RecentIcon from '../assets/icons/recentIcon';
import PenIcon from '../assets/icons/penIcon';
import BellIcon from '../assets/icons/bellIcon';
import ZenIcon from '../assets/icons/zenIcon';
import ArrowRight from '../assets/icons/arrowRight';
import {getNotes} from '../services/NoteStorage';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const homeActiveIcon = require('../assets/images/HomeActive.png');
  const summaryInactiveIcon = require('../assets/images/SummaryInactive.png');
  const categories = [
    {title: 'Work and study', icon: <PenIcon />},
    {title: 'Life', icon: <BellIcon />},
    {title: 'Health and wellness', icon: <ZenIcon />},
  ];
  const [notes, setNotes] = useState([
    {
      title: 'Work and study',
      description: 'Overview of basic computer networking knowledge',
      timestamp: new Date().getTime(),
    },
  ]);

  const refreshNotes = async () => {
    const newNotes = await getNotes();
    setNotes(newNotes);
  };

  useFocusEffect(
    React.useCallback(() => {
      refreshNotes();
      return () => {};
    }, []),
  );

  useEffect(() => {
    refreshNotes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
        locations={[0.1445, 0.4917, 0.7482, 1.0118]}
        style={styles.gradient}
        angle={155.28}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Home</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <SettingIcon />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.section}>
            <View style={styles.recentHeader}>
              <RecentIcon />
              <Text style={styles.recentTitle}>Recently created notes</Text>
            </View>

            {categories.map(category => (
              <View style={styles.subSection} key={category.title}>
                <View style={styles.subSectionHeader}>
                  {category.icon}
                  <Text style={styles.subSectionTitle}>{category.title}</Text>
                </View>
                {notes.map((categoryItem, index) => {
                  console.log(notes);
                  if (category.title == categoryItem.title) {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.categoryCard}
                        onPress={() => {}}>
                        <View style={styles.categoryInfo}>
                          <Text style={styles.categoryDesc}>
                            {categoryItem.description}
                          </Text>
                        </View>
                        <ArrowRight />
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Home')}>
            <Image source={homeActiveIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() =>
              navigation.navigate('NewNote', {OnRefresh: refreshNotes})
            }>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Summary')}>
            <Image source={summaryInactiveIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
