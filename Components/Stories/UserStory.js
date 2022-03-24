import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const UserStory = ({ userName, ok }) => {

  return (
    <View style={styles.container} >
                <TouchableOpacity style={styles.containerStory} onPress={ok} >
                    <View style={styles.circleBlack} >  
                        <Image style={styles.photosStory} source={require('../../assets/default-user.png')}  loadingIndicatorSource={{uri: 'https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-1.png'}} />
                    </View>
                        <Text style={styles.userNameStyle} >{userName.slice(0, 9)}</Text>
                </TouchableOpacity>
    </View>
  )
}

export default UserStory

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    photosStory: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    containerStory: {
        marginHorizontal: 5,
        alignItems: 'center',
        // backgroundColor: 'red',
        flex: 1,
        // borderRadius: 20,
        justifyContent: 'center',
        maxWidth: 60,
    },
    userNameStyle: {
        fontSize: 10,
        // marginTop: 5
    },
    circleBlack: {
        backgroundColor: '#000000',
        borderRadius: 33,
        width: 66,
        height: 66,
        alignItems: 'center',
        justifyContent: 'center'
    }
})