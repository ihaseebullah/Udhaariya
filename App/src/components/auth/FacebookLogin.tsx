import {View, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const FacebookLogin = () => {
  async function onFacebookButtonPress() {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Get the user's AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      const userCredential = await auth().signInWithCredential(facebookCredential);
      console.log('Firebase User:', userCredential.user);

      // Fetch user details from Facebook Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${data.accessToken}`,
      );
      const userData = await response.json();
      console.log('Facebook User Data:', userData);
    } catch (error) {
      console.log('Facebook Login Error:', error);
    }
  }

  return (
    <View>
      <Button title="Sign in with Facebook" onPress={onFacebookButtonPress} />
    </View>
  );
};

export default FacebookLogin;
