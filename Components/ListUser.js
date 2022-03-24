import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'

const ListUser = ({ name, imagesEnd, navigation, id }) => {

    const next = () => {
        navigation.navigate('Profile')
    }

  return (
    <View style={styles.contain}>
        <TouchableOpacity style={styles.containerUser} onPress={next}>
            <Image source={require('../assets/default-user.png')} style={styles.profilePhoto} loadingIndicatorSource={{uri: 'https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-1.png'}}/>
            <Text>{name}</Text>
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