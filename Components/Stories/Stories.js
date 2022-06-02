import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import ImageView from "react-native-image-viewing";
import UserStory from './UserStory';

const Stories = () => {

  const [userName, setUserName] = useState([])
  const [imagesVisibility, setImagesVisibility] = useState(false)

  async function fetchUserName () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUserName(data);
  }

  function ok() { 
    setImagesVisibility(true);
  }

  const fotoStory = [
    {
      uri: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/03/frappe-de-magnum.jpg'
    }
  ]
  
  useEffect(() => {
    fetchUserName();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={userName}
        keyExtractor={x => x.id}
        horizontal={true}
        ListHeaderComponent={() => { //Esto solo lo renderiza una vez, este el header
          return(
              <TouchableHighlight style={styles.addButton} onPress={() => alert('Se vienen las historias')} >
                <FontAwesome5 name='plus' size={40} />
              </TouchableHighlight>
          );
        }}
        renderItem={({item}) => <UserStory id={item.id} userName={item.username} ok={ok} />}

      />

    <ImageView 
      images={fotoStory}
      imageIndex={0}
      visible={imagesVisibility}
      onRequestClose={() => setImagesVisibility(false)}
      animationType='slide'
    />

    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
        height: 90,
        // backgroundColor: '#eee',
    },
    addButton: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
})