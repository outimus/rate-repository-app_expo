import  { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: 80,
        width: 55,
        backgroundColor: 'white',
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

export const Avatar = (item) => {
    console.log(item)
    return (
        <>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: item.item.ownerAvatarUrl}}>
            </Image>
        </View>
        </>
    )
};