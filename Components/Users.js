import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import ListUser from './ListUser'

const Users = ({ user, images }) => {

    const [ imagesProfile, setImagesProfile ] = useState([]);


    useEffect(() => {
        images.map((item) => {
            if(item.albumId === 1 && item.id === 1){
                setImagesProfile(item.url);
            }

            if(item.albumId === 2 && item.id === 51){
                setImagesProfile(item.url)
            }
        })
    }, [])

    

    console.log(imagesProfile);

  return (
    <View style={styles.container}>
      <FlatList 
        data={user}
        keyExtractor={x => x.id}
        numColumns={2}
        renderItem={({item}) => <ListUser usersName={item.username} imagesEnd={imagesProfile} /> }
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