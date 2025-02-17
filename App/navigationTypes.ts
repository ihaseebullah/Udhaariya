import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;
