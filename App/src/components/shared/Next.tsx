import {View} from 'react-native';
import React from 'react';
import NextIcon from '../../assets/icons/chevron-right.svg';
import {useTheme} from '../../Theme/Context/Theme';

const Next: React.FC = () => {
  const {Colors} = useTheme();
  return (
    <View
      style={{
        backgroundColor: Colors.CardBackground,
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.TextPrimary,
        borderWidth: 0.3,
      }}>
      <NextIcon width={50} height={50} />
    </View>
  );
};

export default Next;
