import {View} from 'react-native';
import React, {useEffect} from 'react';
import Udhaariya from '../../assets/logo/udhaariya.svg';
import Text from '../../components/shared/Text';
import {useNavigation} from '@react-navigation/native';
import {SplashScreenNavigationProp} from '../../../navigationTypes';
const Splash: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnboardingOne');
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Udhaariya height={300} width={300} />
      <View>
        <Text style={{fontSize: 15, textAlign: 'left', marginBottom: -8}}>
          Bhai,
        </Text>
        <Text style={{fontSize: 30}}>Udhaariya</Text>
        <Text style={{fontSize: 15, textAlign: 'right', marginTop: -8}}>
          dekh lega!
        </Text>
      </View>
    </View>
  );
};

export default Splash;
