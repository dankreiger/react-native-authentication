import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseApiData from '../firebaseApiData';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseApiData);
  }
  
  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
