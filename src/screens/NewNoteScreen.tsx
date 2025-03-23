import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles, {colors} from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import ArrowLeft from '../assets/icons/arrowLeft';
import ArrowDown from '../assets/icons/arrowDown';
import {saveNote} from '../services/NoteStorage';
import {useRoute} from '@react-navigation/native';

const NewNoteScreen = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const route = useRoute();
  const onRefresh = route.params?.onRefresh;

  const categories = [
    {title: 'Work and study'},
    {title: 'Life'},
    {title: 'Health and wellness'},
  ];

  const saveAndGoBack = async () => {
    if (!title) {
      alert('Please select a category');
      return;
    }
    await saveNote({description, title, timestamp: Date.now()});
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
        locations={[0.1445, 0.4917, 0.7482, 1.0118]}
        style={styles.gradient}
        angle={155.28}>
        <View style={styles.backHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>New note</Text>
        </View>

        <View style={styles.newNoteContent}>
          <TouchableOpacity
            style={styles.categorySelector}
            onPress={() => setIsOpen(prev => !prev)}>
            <Text style={styles.categorySelectorText}>
              {title || 'Choose a category'}
            </Text>
            <ArrowDown />
          </TouchableOpacity>

          {isOpen && (
            <View style={styles.dropdownOptions}>
              {categories.map(cat => (
                <TouchableOpacity
                  key={cat.title}
                  style={styles.dropdownOption}
                  onPress={() => {
                    setTitle(cat.title);
                    setIsOpen(false);
                  }}>
                  <Text style={styles.dropdownOptionText}>{cat.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TextInput
            style={styles.noteInput}
            placeholder="Please type note content"
            placeholderTextColor={colors.text}
            multiline
            textAlignVertical="top"
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.saveButton} onPress={saveAndGoBack}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default NewNoteScreen;
