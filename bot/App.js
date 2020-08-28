import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';

const steps = [
  {
    id: '0',
    message: 'היי, מה שלומך?',
    trigger: '1',
  },
  {
    id: '1',
    message: 'להלן טופס 101, ואני יעזור לך למלא אותו בקלי קלות.',
    trigger: '2',
  },
  {
    id: '2',
    message: 'בוא נתחיל.',
    trigger: '3',
  },
  {
    id: '3',
    message: 'שמי רובו, ומה שם הפרטי שלך?',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: 'ומה שם משפחה?',
    trigger: '6',
  },
  {
    id: '6',
    user: true,
    trigger: '7',
  },
  {
    id: '7',
    message: 'נעים להכיר! בוא נמשיך...',
    trigger: '8',
  },
  {
    id: '8',
    message: 'מה מספר תעודת זהות שלך?',
    trigger: '9',
  },
  {
    id: '9',
    user: true,
    end: true,
  },
];


export default function App() {
  return (
    <View style={styles.container}>
   <ChatBot steps={steps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
