import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    padding: 25,
    height: 135,
    flexDirection: 'row'    
  },
  title: {
    margin: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 120
  }
});

const handlePress = () => {
  console.log('YOU CLICKED!')
}

//MITEN SAAN onPressistä sivun siirtymään SignInniin?
const AppBar = () => {
  return (
    <>
    <View style={styles.container}>
        <ScrollView horizontal>
          <Pressable onPress={handlePress}>
            <Text style={styles.title}>Repositories</Text>
          </Pressable>
          <Pressable onPress={() => <SignIn/>}> 
            <Text style={styles.title}>Sign In</Text>
          </Pressable>
        </ScrollView>
    </View>
    </>
  )
};

export default AppBar;