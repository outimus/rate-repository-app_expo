import { Text} from "react-native"

export const RepositoryItem = (item) => {
    console.log('iten om', item)
    console.log('REPOSITORY ITEMISSA ON NYT')
    console.log(item.item)
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