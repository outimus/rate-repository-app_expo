import  { View, StyleSheet } from 'react-native'
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 280,
        margin: 5,
    },
    fullName: {
        fontSize: 20,
        fontStyle: 'bold'
    },
    description: {
        color: 'grey',
        backgroundColor: 'white',
        margin: 2
    },
    language: {
        backgroundColor: '#0366d6',
        flexGrow: 1,
        color: 'white',
        textAlign: 'center',
        width: 90,
        height: 20,
        margin: 2,
        borderRadius: 5
    }
})

export const NameDescriptionLanguage = (item) => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.fullName}>{item.item.fullName}</Text>
            <Text style={styles.description}>{item.item.description}</Text>
            <Text style={styles.language} >{item.item.language}</Text>
        </View>
        </>
    )
};