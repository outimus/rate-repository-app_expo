import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    color: 'white',
    backgroundColor: '#24292e',
    padding: 25,
    height: 135,
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 120
  }
});

const onPressFunction = () => {
    //MAKE THE CLICK HANDLER
    console.log('You clicked this!')
}

const AppBar = () => {
  return (
    <>
    <View >
        <Pressable onPress={onPressFunction}>
            <Text style={styles.container}>Repositories</Text>
        </Pressable>
    </View>
    </>
  )
};

export default AppBar;