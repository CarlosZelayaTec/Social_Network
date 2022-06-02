import { StyleSheet, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ListUser from './ListUser'

const Users = ({ user, navigation }) => {

  return (
    <View style={styles.container}>
      <FlatList 
        data={user}
        keyExtractor={x => x.id}
        numColumns={2}
        renderItem={({item}) => <ListUser id={item.id} name={item.name} navigation={navigation} /> }
      />
    </View>
  )
}

export default Users

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})