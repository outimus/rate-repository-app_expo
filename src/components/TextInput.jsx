import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});
console.log(styles)

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  console.log('error on ', error)
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;