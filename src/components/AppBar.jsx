import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

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

const AppBar = () => {
  return (
    <>
    <View style={styles.container}>
        <ScrollView horizontal>
          <Text style={styles.title}>Repositories</Text>
          <Text style={styles.title}>Sign In</Text>
        </ScrollView>
    </View>
    </>
  )
};

export default AppBar;