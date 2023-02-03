import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import { SignIn } from './SignIn';
import { CreateReview } from './CreateReview';
import AppBar from './AppBar';
import SingleRepoView from './SingleRepoView';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
          <Route path="/" element={<RepositoryList />} exact />
          <Route path="/signIn" element={<SignIn />} exact />
          <Route path="/createReview" element={<CreateReview />} exact />
          <Route path="/:id" element={<SingleRepoView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;