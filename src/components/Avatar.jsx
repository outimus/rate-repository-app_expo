import  { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 10,
        borderRadius: 5
    },
    image: {
        width: 55,
        height: 55,
        margin: 'auto',
        borderRadius: 5
    }
})

export const Avatar = ({ item }) => {
    return (
        <>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: item.ownerAvatarUrl}}>
            </Image>
        </View>
        </>
    )
};