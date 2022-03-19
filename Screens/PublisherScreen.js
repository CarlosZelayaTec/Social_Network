import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Publicaciones from '../Components/Publicaciones';

const PublisherScreen = () => {

  const [ post, setPost ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ image, setImage ] = useState([]);
  const [ ready, setReady ] = useState(false);

  /**
   * TODO Necesitamos Refactorizar este código, con un Promise All
   * !Según estoy observando unos problemas con este código, vamos a tener que utilizar la sintaxis de promesas tradicional
   */

  async function fetchImage () {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      const data = await response.json();
      setImage(data);
      setReady(true);
  }
  
  async function fetchPost () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    const data = await response.json();
    setPost(data);
  }

  async function fetchUser () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    fetchImage();
    fetchPost();
    fetchUser();
  }, [])

  // console.log(post);

  return (
      <>
    { ready === false ? 
      <>
      <ActivityIndicator size={'large'} color={'violet'} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
      </>
      :
      <>
      <FlatList 
          data={user}
          keyExtractor={x => x.id}
          renderItem={({item}) => <Publicaciones id={item.id} nameUser={item.username} post={post} photos={image} />}
        />
      </>
    }
</>
    )
}

export default PublisherScreen

const styles = StyleSheet.create({

})