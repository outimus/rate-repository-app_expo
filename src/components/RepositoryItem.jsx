import { View, StyleSheet } from "react-native"
import { Avatar } from "./Avatar";
import { NameDescriptionLanguage } from "./NameDescriptionLanguage";
import { StarsForksReviewsRating } from "./StarsForksReviewsRating";
import SingleRepoView from "./SingleRepoView";
import { useParams } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    avatar: {
        height: 60,
        width: 60,
    },
    fullNameDescripLang: {
        height: 60,
        width: 300,
    },
    starsForksReviewsRating: {
        height: 60,
        width: 400
    }

  });

export const RepositoryItem = ({ item }) => {
    const {id} = useParams()
    return (
        <>
        {id ? <SingleRepoView />
        : <View testID="repositoryItem" style={styles.container}>
            <Avatar style={styles.avatar} item={item}/>
            <NameDescriptionLanguage style={styles.fullNameDescripLang} item={item}/>
            <StarsForksReviewsRating style={styles.starsForksReviewsRating} item={item} />
        </View>}
        </>
    )   
}