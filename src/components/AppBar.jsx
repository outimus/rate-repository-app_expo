import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native'
import { AUTHENTICATED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useAuthStorage from'../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useState } from 'react';

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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 120
  }
});

const AppBar = () => {
  const [ signed, setSigned ] = useState(false)
  const { data } = useQuery(AUTHENTICATED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  if (data && !signed) {
    if (data.me) {
    setSigned(true)
    }
  }

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    setSigned(false);
  };
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Link to="/">
            <Text style={styles.title}>Repositories</Text>
          </Link>
          { signed && <Link to="/createReview">
            <Text style={styles.title} >Create a review </Text>
          </Link> }
          <Link to="/signIn">
            { signed ? <Text style={styles.title} onPress={handleSignOut}>SignOut </Text>
            : <Text style={styles.title}>SignIn </Text> }
          </Link>
          
        </ScrollView>
      </View>
    )
}
;

export default AppBar;