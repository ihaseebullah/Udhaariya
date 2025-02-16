import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '356773742763-m13demhj7brhar0cpbgstc55f3edqblj.apps.googleusercontent.com',
});

const GoogleLogin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '356773742763-m13demhj7brhar0cpbgstc55f3edqblj.apps.googleusercontent.com',
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
    } catch (error) {
      console.log('Error with Google Sign-In:', error);
    }
  };

  return (
    <View>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default GoogleLogin;
