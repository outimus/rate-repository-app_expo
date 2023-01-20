import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});
console.log(styles)

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  if (error) {
    console.log('error!')
  }
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;