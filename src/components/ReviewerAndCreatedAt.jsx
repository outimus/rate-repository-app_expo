import { View, StyleSheet } from "react-native"
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: 5
    },
    rewiewer: {
        fontWeight: 'bold',
        fontSize: 17
    },
    createdAt: {
        color: '#6e747d'
    }
})

const parseDate = (x) => {
    let date = x.substring(0,10)
    const day = date.substring(9,10)
    const month = date.substring(6,7)
    const year = date.substring(0,4)
    date = day + "." + month + "." + year
    return date
};

export const ReviewerAndCreatedAt = ({username, createdAt}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.rewiewer}>{username}</Text>
            <Text style={styles.createdAt}>{parseDate(createdAt)}</Text>
        </View>
    )
};