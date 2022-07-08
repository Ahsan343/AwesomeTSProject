import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';

import colors from '../../constants/color';

type CompoenentProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  color: string;
  loading?: boolean;
  width?: string | number;
  disabledValue?: boolean;
  buttonStyle?: any;
  space: number;
};

const AppButton: React.FC<CompoenentProps> = ({
  title,
  onPress,
  color = 'RootBackground',
  loading,
  width,
  disabledValue,
  buttonStyle,
  space,
}) => {
  return (
    <TouchableOpacity
      style={[
        buttonStyle ? buttonStyle : styles.button,
        {backgroundColor: color, width, marginRight: space ? space : 0},
      ]}
      onPress={onPress}
      disabled={loading || disabledValue}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.ThemeColor,
    borderRadius: 8,
    display: 'flex',
    elevation: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 15,
    shadowColor: colors.Darkgrey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AppButton;
