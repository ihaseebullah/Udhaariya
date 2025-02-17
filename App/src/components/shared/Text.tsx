import {Text as NativeText, TextStyle, TextProps} from 'react-native';
import React from 'react';
import {useTheme} from '../../Theme/Context/Theme';

interface CustomTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
}
const Text: React.FC<CustomTextProps> = ({children, style, ...props}) => {
  const {font} = useTheme();
  return (
    <NativeText style={[{fontFamily: font}, style]} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;
