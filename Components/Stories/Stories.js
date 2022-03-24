import { StyleSheet, Text, View, FlatList, TouchableHighlight, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import ImageView from "react-native-image-viewing";
import UserStory from './UserStory';

const Stories = () => {

  const [userName, setUserName] = useState([])
  const [photoPerfil, setPhotoPerfil] = useState([])
  // const [images, setImages] = useState([])
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
      {/* <ScrollView horizontal> */}
          <View style={styles.centerButton} >
              <TouchableHighlight style={styles.addButton} onPress={() => alert('Se vienen las historias')} >
                <FontAwesome5 name='plus' size={50} />
              </TouchableHighlight>
           </View>
      <FlatList 
        data={userName}
        keyExtractor={x => x.id}
        horizontal={true}
        renderItem={({item}) => <UserStory id={item.id} userName={item.username} ok={ok} />}

      />
      {/* </ScrollView> */}

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
        backgroundColor: '#eee',
    },
    addButton: {
      flex: 1,
      marginTop: 15,
      marginLeft: 15,
      marginRight: 10,
      // backgroundColor: 'white',
      height: 70,
      width: 70,
      borderRadius: 35,
    },
    // centerButton: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }
})