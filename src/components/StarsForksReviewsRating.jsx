import  { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 0,
    },
    item1: {
        padding: 0,
        backgroundColor: 'white',
        width: 100,
        height: 30,
        textAlign: 'center',
    },
    item2: {
        padding: 0,
        color: 'grey',
        width: 100,
        height: 30,
        textAlign: 'center'
    }
})

const roundedNumber = (x) =>  {
    const divided = x / 1000
    const rounded = divided.toFixed(1)
    if (rounded - Math.round(rounded) === 0) {
        const int = Math.round(divided)
        return int
    }
    return rounded
}

export const StarsForksReviewsRating = (item) => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.item1}>{roundedNumber(item.item.stargazersCount)}k</Text>
            <Text style={styles.item1}>{roundedNumber(item.item.forksCount)}k</Text>
            <Text style={styles.item1}>{item.item.reviewCount}</Text>
            <Text style={styles.item1}>{item.item.ratingAverage}</Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.item2}>Stars</Text>
            <Text style={styles.item2}>Forks</Text>
            <Text style={styles.item2}>Reviews</Text>
            <Text style={styles.item2}>Rating</Text>
        </View>
        </>
    )
};