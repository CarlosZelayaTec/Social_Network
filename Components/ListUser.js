import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'

const ListUser = ({ usersName, imagesEnd, navigation, id }) => {

    const next = () => {
        navigation.navigate('Profile');
    }

    console.log(id);

  return (
    <View style={styles.contain}>
        <TouchableOpacity style={styles.containerUser} onPress={next}>
            <Image source={{uri: imagesEnd[id - 1].url}} style={styles.profilePhoto} defaultSource={require('../assets/default.jpg')}/>
            <Text>{usersName}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ListUser

const styles = StyleSheet.create({
    contain: {
        // backgroundColor: 'red'
        // flex: 1
    },  
    containerUser: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 5,
        width: Dimensions.get('screen').width - 198,
        height: Dimensions.get('screen').height - 650
    },
    profilePhoto: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
})