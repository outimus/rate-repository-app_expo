import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';

import { View, Pressable, StyleSheet } from 'react-native'

import theme from '../theme';
import useSignIn  from '../hooks/useSignIn'

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
    backgroundColor: 'white'
  },
  flexItems:{
    fontSize: 17,
    padding:15,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must have at least 3 digits.')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must have at least 5 digits.')
    .required('Password is required'),
});

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

export const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

