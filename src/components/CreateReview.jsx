import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";


import { View, Pressable, StyleSheet } from 'react-native'

import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text: ''
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
    ownerName: yup
        .string()
        .required('Repository owner name is required.'),
    repositoryName: yup
        .string()
        .required('Repository name is required.'),
    rating: yup
        .number()
        .min(0, "Minimum atleast 0")
        .max(100, "Allowed maximum is 100")
        .required('Rating is required.'),
    text: yup
        .string()
        .required('Review is required'),
});
//MITEN LISÄÄN FORMIIN FIELDIN (joka tallentaa numerot)
export const CreateReviewForm = ({ onSubmit }) => {
  return (
    <>
    <View style={styles.container}>
      <FormikTextInput style={styles.flexItems} name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput style={styles.flexItems} name="repositoryName" placeholder="Repository name" />
      <FormikTextInput style={styles.flexItems} name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput style={styles.flexItems} multiline={true} name="text" placeholder="Review" />
      <Pressable style={styles.button}>
        <Text color='highContrast' fontWeight='bold' onPress={onSubmit}>Create a review</Text>
      </Pressable>
    </View></>
  );
};

export const CreateReview = () => {
  const navigate = useNavigate();
  const [ createReview ] = useCreateReview();

  const onSubmit = async (values) => {
    console.log('values: ', values)////////////////////////////////////////////7
    const { ownerName, repositoryName, rating, text} = values;
    console.log(typeof rating)///////////////////////////////////7
    try {
      const data  = await createReview({ ownerName, repositoryName, rating, text});
      if(data){
        navigate('/createReview')
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

