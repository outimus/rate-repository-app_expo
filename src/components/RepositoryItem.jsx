import { Text } from "react-native"

/*const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    image: {
      width: 50,
      height: 50,
    },
  });*/

export const RepositoryItem = (item) => {
    return (
        <>
            
            <Text>FullName: {item.item.fullName}</Text>
            <Text>Description: {item.item.description}</Text>
            <Text>Language: {item.item.language}</Text>
            <Text>Stars: {item.item.stargazersCount}</Text>
            <Text>Forks: {item.item.forksCount}</Text>
            <Text>Stars: {item.item.reviewCount}</Text>
            <Text>Rating: {item.item.ratingAverage}</Text>
        </>
    )
    
}