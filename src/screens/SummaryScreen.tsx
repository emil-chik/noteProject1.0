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
import LinearGradient from 'react-native-linear-gradient';
import {getNotes} from '../services/NoteStorage';

const SummaryScreen = ({navigation}) => {
  const homeInactiveIcon = require('../assets/images/HomeInactive.png');
  const summaryActiveIcon = require('../assets/images/SummaryActive.png');
  const [categories, setCategories] = useState<
    {title: string; records: number}[]
  >([]);

  useEffect(() => {
    const processNotes = async () => {
      const allNotes = await getNotes();

      const categoryMap = allNotes.reduce((acc, note) => {
        const title = note.title;
        acc[title] = (acc[title] || 0) + 1;
        return acc;
      }, {});

      const categorized = Object.entries(categoryMap).map(([title, count]) => ({
        title,
        records: count,
      }));

      setCategories(categorized);
    };

    processNotes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
        locations={[0.1445, 0.4917, 0.7482, 1.0118]}
        style={styles.gradient}
        angle={155.28}>
        <View style={styles.header}>
          <Text style={styles.screenTitle}>Summary</Text>
          <View style={{width: 24}} />
        </View>

        <View style={styles.summaryHeader}>
          <View style={styles.robotPlaceholder}>
            <Text style={styles.robotText}>🤖</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          {categories.map(category => (
            <View key={category.title} style={styles.summaryItem}>
              <View style={styles.summaryItemLeft}>
                <View style={styles.circleIcon}>
                  <Text style={styles.circleIconText}>
                    {category.title.charAt(0)}
                  </Text>
                </View>
                <Text style={styles.summaryTitle}>{category.title}</Text>
              </View>
              <TouchableOpacity style={styles.detailButton}>
                <Text style={styles.detailButtonText}>Detail</Text>
              </TouchableOpacity>
              <Text style={styles.recordText}>
                This topic has a total of {category.records} records.
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Home')}>
            <Image source={homeInactiveIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('NewNote')}>
            <Text style={styles.iconText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigation.navigate('Summary')}>
            <Image source={summaryActiveIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SummaryScreen;
