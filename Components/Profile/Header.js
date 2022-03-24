import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';

const Header = () => {
  return (
    <View style={styles.box} >
      <View style={styles.container} >
        <Image style={styles.photoPerfil} source={require('../../assets/default-user.png')} loadingIndicatorSource={true} />
        <Text style={styles.nameProfile}>Nombre del usuario</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  box:{
      height: 250,
      width: 230
    },
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red'
    },
    photoPerfil: {
      width: 150,
      height: 150,
      borderRadius: 75
    },
    nameProfile: {
      fontSize: 20,
      color: '#000'
    }
})