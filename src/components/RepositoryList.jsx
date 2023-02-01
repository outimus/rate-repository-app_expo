import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { RepositoryItem } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

let singleRepo = false;
let repoId = "";

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
  
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  const handlePress = (item) => {
    repoId = item.id
    singleRepo = true
    navigate(`/${repoId}`)
  }
  return (
    <>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <Pressable onPress={() => handlePress(item)}>
          <RepositoryItem item={item} singleRepo={singleRepo} />
        </Pressable>
      )}
    /></>
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;