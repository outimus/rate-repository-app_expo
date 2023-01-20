import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import { SignIn } from './SignIn';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const onSubmit = (values) => {
  console.log('SUBMIT ', values)
}

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signIn" element={<SignIn onSubmit={onSubmit}/>} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;