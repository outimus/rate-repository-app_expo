import Text from './Text';
import FormikTextInput from './FormikTextInput'

import { View, Pressable, StyleSheet } from 'react-native'

import theme from '../theme';

/*const initialValues = {
  username: '',
  password: '',
};*/

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'stretch',
    padding:5,
  },
  flexItems:{
    padding:15,
    margin: 5,
  },
  button:{
    backgroundColor: theme.colors.primary,
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:15,
    margin:5,
    borderRadius:5,
    color: theme.colors.highContrast
  },
})

export const SignIn = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.flexItems} name="username" placeholder="Username" />
      <FormikTextInput /*secureTextEntry*/ style={styles.flexItems} name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color='highContrast' fontWeight='bold'>Sign In</Text>
      </Pressable>
    </View>
  );
};

