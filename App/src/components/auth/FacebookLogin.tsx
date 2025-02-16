import {View, Button, Alert} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

const FacebookLogin = () => {
  async function onFacebookButtonPress() {
    try {
      // Request login
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        Alert.alert('Login Cancelled', 'User cancelled the login process.');
        return;
      }

      // Get the access token
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        Alert.alert('Login Failed', 'Something went wrong obtaining the access token.');
        return;
      }

      // Create a Facebook credential with the access token
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign-in the user with the credential
      await auth().signInWithCredential(facebookCredential);

      Alert.alert('Success', 'Logged in with Facebook!');
    } catch (error) {
      console.error('Facebook Login Error:', error);
      Alert.alert('Login Error', error.message || 'An unknown error occurred.');
    }
  }

  return (
    <View>
      <Button title="Login with Facebook" onPress={onFacebookButtonPress} />
    </View>
  );
};

export default FacebookLogin;
