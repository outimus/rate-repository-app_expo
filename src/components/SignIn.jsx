import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';

import { View, Pressable, StyleSheet } from 'react-native'

import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

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

export const SignInForm = ({ onSubmit }) => {
  return (
    <>
    <View style={styles.container}>
      <FormikTextInput style={styles.flexItems} name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry style={styles.flexItems} name="password" placeholder="Password" />
      <Pressable style={styles.button}>
        <Text color='highContrast' fontWeight='bold' onPress={onSubmit}>Sign In</Text>
      </Pressable>
    </View></>
  );
};

export const SignIn = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

