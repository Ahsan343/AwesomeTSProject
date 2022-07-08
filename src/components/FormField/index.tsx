import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

type ComponentProps = {
  name: string;
  placeholder: string;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCorrect?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  textContentType?: any;
  secureTextEntry?: boolean;
  autoFocus?: boolean;
  onSubmitEditing?: any;
  refInner?: any;
  style?: any;
  showPhoneFormat?: boolean;
  handleChange: any;
  setFieldTouched: any;
};

const FormField = ({
  name,
  keyboardType,
  autoCapitalize = 'none',
  refInner,
  style,
  showPhoneFormat,
  placeholder,
  handleChange,
  setFieldTouched,
  ...otherProps
}: ComponentProps) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange}
          placeholderTextColor={'#b0b0b0'}
          style={[styles.text, style]}
          numberOfLines={1}
          value={name}
          keyboardType={keyboardType}
          placeholder={showPhoneFormat ? '' : placeholder}
          returnKeyType={keyboardType === 'numeric' ? 'done' : 'next'}
          ref={refInner}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          {...otherProps}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#d1d1d1',
    borderRadius: 8,
    borderWidth: 0.7,
    flexDirection: 'row',
    height: 55,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: '#212429',
    flex: 1,
    fontSize: 15,
    height: 55,
  },
  togglePassword: {
    padding: 5,
  },
});

export default FormField;
