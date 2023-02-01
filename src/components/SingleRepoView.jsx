import { View, StyleSheet, Pressable, Text } from "react-native";
import { Avatar } from "./Avatar";
import { NameDescriptionLanguage } from "./NameDescriptionLanguage";
import { StarsForksReviewsRating } from "./StarsForksReviewsRating";
import { useQuery } from "@apollo/client";
import { SINGLE_REPO_VIEW } from "../graphql/queries";
import { useParams } from "react-router-native";
import { Linking } from "react-native";

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
    },
    button: {
        backgroundColor: '#0366d6',
        color: 'white',
        fontStyle: 'bold',
        font: 'Arial',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 390,
        height: 40,
        margin: 2,
        borderRadius: 5
    }
  });



export const SingleRepoView = () => {
    const { id } = useParams();

    const { data } = useQuery(SINGLE_REPO_VIEW, {
        fetchPolicy: 'cache-and-network',
        variables: { id }
    });

    const handlePress = () => {
        Linking.openURL(data.repository.url)
    }

    if (data) {
        return (
            <View testID="repositoryItem" style={styles.container}>
                <Avatar style={styles.avatar} item={data.repository}/>
                <NameDescriptionLanguage style={styles.fullNameDescripLang} item={data.repository}/>
                <StarsForksReviewsRating style={styles.starsForksReviewsRating} item={data.repository} />
                <Pressable onPress={handlePress}>
                    <Text style={styles.button}>Open in Github</Text>
                </Pressable>
            </View>
        )
    } else {
        return
    }
    
}

/* <>
            <View testID="repositoryItem" style={styles}>
                <Avatar style={styles.avatar} item={data.repository}/>
                <NameDescriptionLanguage style={styles.fullNameDescripLang} item={data.repository}/>
                <StarsForksReviewsRating style={styles.starsForksReviewsRating} item={data.repository} />
            </View>
            </>*/