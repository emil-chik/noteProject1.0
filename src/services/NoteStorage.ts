import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveNote = async note => {
  try {
    const existingNotes = await AsyncStorage.getItem('notes');
    const notes = existingNotes ? JSON.parse(existingNotes) : [];
    notes.push(note);
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving note:', error);
  }
};

export const getNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error retrieving notes:', error);
    return [];
  }
};

export const deleteAllNotes = async () => {
  try {
    await AsyncStorage.removeItem('notes');
  } catch (error) {
    console.error('Error deleting notes:', error);
  }
};
