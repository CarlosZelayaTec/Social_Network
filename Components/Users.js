import { StyleSheet, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ListUser from './ListUser'

const Users = ({ user, navigation }) => {

  const [images, setImages] = useState([]);

  const fetchImagesProfiles = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const data = await response.json();
    setImages(data.splice(0, 10));
  }

  useEffect(() => {
    fetchImagesProfiles();
  }, [])


  return (
    <View style={styles.container}>
      <FlatList 
        data={user}
        keyExtractor={x => x.id}
        numColumns={2}
        renderItem={({item}) => <ListUser id={item.id} name={item.name} imagesEnd={images} navigation={navigation} /> }
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