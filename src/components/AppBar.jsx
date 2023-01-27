import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native'
import { AUTHENTICATED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useAuthStorage from'../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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
  const user = useQuery(AUTHENTICATED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };
  ////////////////////////??
  if (!user.data) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Link to="/">
            <Text style={styles.title}>Repositories</Text>
          </Link>
            <Pressable>
              <Text style={styles.title} onPress={handleSignOut}>SignOut</Text>
            </Pressable>
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Link to="/">
            <Text style={styles.title}>Repositories</Text>
          </Link>
          <Link to="/signIn">
            <Text style={styles.title}>SignIn</Text>
          </Link>
        </ScrollView>
      </View>
    )
  }
}
;

export default AppBar;