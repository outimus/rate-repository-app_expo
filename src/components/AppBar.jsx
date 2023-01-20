import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native'

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
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Link to="/">
          <Text  style={styles.title}>Repositories</Text>
        </Link>
        <Link to="/signIn">
          <Text  style={styles.title}>SignIn</Text>
        </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;