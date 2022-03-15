import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ListUser from './ListUser'

const Users = ({ user, image, navigation }) => {

  return (
    <View style={styles.container}>
      <FlatList 
        data={user}
        keyExtractor={x => x.id}
        numColumns={2}
        renderItem={({item}) => <ListUser usersName={item.username} imagesEnd={image} navigation={navigation} /> }
      />
    </View>
  )
}

export default Users

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'green'
    }
})