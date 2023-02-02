import { View,
        StyleSheet,
        Pressable,
        FlatList
     } from "react-native";
import { Avatar } from "./Avatar";
import { NameDescriptionLanguage } from "./NameDescriptionLanguage";
import { StarsForksReviewsRating } from "./StarsForksReviewsRating";
import { useQuery } from "@apollo/client";
import { SINGLE_REPO_VIEW } from "../graphql/queries";
import { useParams } from "react-router-native";
import { Linking } from "react-native";
import Text from "./Text";
import { ReviewerAndCreatedAt } from "./ReviewerAndCreatedAt";

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

const separatorStyles = StyleSheet.create({
    separator: {
        height: 10
    }
});

const reviewStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    text: {
        font: 'Arial',
        fontSize: 17,
        padding: 10
    },
    rating: {
        height: 40,
        width: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: '#2f63b5', 
        fontSize: 17,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: '#2f63b5',
        margin: 5
    },
    reviewerAndCreatedAt: {
        height: 40,
        width: 150,
        margin: 10
    }
});

const ItemSeparator = () => <View style={separatorStyles.separator} />;

const RepositoryInfo = ({ repository }) => {
    const handlePress = () => {
    Linking.openURL(repository.url)
    };
    return (
        <View testID="repositoryItem" style={styles.container}>
            <Avatar style={styles.avatar} item={repository}/>
            <NameDescriptionLanguage style={styles.fullNameDescripLang} item={repository}/>
            <StarsForksReviewsRating style={styles.starsForksReviewsRating} item={repository} />
            <Pressable onPress={handlePress}>
                <Text style={styles.button}>Open in Github</Text>
            </Pressable>
        </View>
    )
};

const ReviewItem = ({ review }) => {
    return (
        <View style={reviewStyles.container}>
            <Text style={reviewStyles.rating}>{review.node.rating}</Text>
                <ReviewerAndCreatedAt
                    style={reviewStyles.reviewerAndCreatedAt}
                    username={review.node.user.username}
                    createdAt={review.node.createdAt}/>
            <Text style={reviewStyles.text}>{review.node.text}</Text>
        </View>
    )
};

const makeSomething = () => {
    Math.floor(Math.random() * 10000);
};

const SingleRepoView = () => {
const { id } = useParams();

const { data } = useQuery(SINGLE_REPO_VIEW, {
    fetchPolicy: 'cache-and-network',
    variables: { id }});

if (data) {
    return (
        <FlatList
            data={data.repository.reviews.edges}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) =>  <ReviewItem review={item} />}
            keyExtractor={makeSomething()} //How to use keyExtractor correctly?
            ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
            />
    )
} else {
    return
}
    
}

export default SingleRepoView;
