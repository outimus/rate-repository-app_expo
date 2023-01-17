import { View, StyleSheet } from "react-native"
import { Avatar } from "./Avatar";
import { NameDescriptionLanguage } from "./NameDescriptionLanguage";
import { StarsForksReviewsRating } from "./StarsForksReviewsRating";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 20,
        height: 120,
        width: 430,
        flexDirection: 'row',
        alignContent: 'flex-start',
        backgroundColor: 'white'
    },
    flexItem: {
        height: 'auto',
        width: 'auto'
    }
  });

export const RepositoryItem = (item) => {
    return (
        <>
        <View style={styles.container}>
            <Avatar item={item.item}/>
            <NameDescriptionLanguage item={item.item}/>
        </View>
        <View>
            <StarsForksReviewsRating item={item.item} />
        </View>
        </>
    )
    
}