import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/styles';
import {deleteAllNotes} from '../services/NoteStorage';

const SettingsScreen = ({navigation}) => {
  const settingsOptions = [
    {id: 1, title: 'Online Customer'},
    {id: 2, title: 'User Agreement'},
    {id: 3, title: 'Privacy Policy'},
    {id: 4, title: 'About Us'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Settings</Text>
        <View style={{width: 24}} />
      </View>

      <ScrollView style={styles.scrollView}>
        {settingsOptions.map(option => (
          <TouchableOpacity key={option.id} style={styles.settingItem}>
            <View style={styles.settingItemLeft}>
              <View style={styles.settingIcon}>
                <Text style={styles.settingIconText}>
                  {option.title.charAt(0)}
                </Text>
              </View>
              <Text style={styles.settingTitle}>{option.title}</Text>
            </View>
            <Text style={styles.iconText}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.deleteAccountContainer}>
        <TouchableOpacity
          style={styles.deleteAccountButton}
          onPress={() => deleteAllNotes()}>
          <Text style={styles.deleteAccountText}>Delete All Notes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
