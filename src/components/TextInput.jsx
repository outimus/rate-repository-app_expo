import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorField: {
    fontSize: 17,
    padding:15,
    margin: 5,
    borderWidth: 1,
    borderColor: '#d73a4a',
    borderRadius: 5
  }
});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle = [style];
  if (error) {
    textInputStyle = styles.errorField
  }
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;