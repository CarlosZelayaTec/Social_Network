import { View, StyleSheet } from 'react-native'
import React from 'react'
import {
  Header
} from '../Components/Profile/index';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export default Profile