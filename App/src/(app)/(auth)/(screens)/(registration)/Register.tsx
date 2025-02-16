import {View, Text} from 'react-native';
import React from 'react';
import GoogleLogin from '../../../../components/auth/GoogleLogin';
import FacebookLogin from '../../../../components/auth/FacebookLogin';

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
      <GoogleLogin />
      <FacebookLogin />
    </View>
  );
};

export default Register;
