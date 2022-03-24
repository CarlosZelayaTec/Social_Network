import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Publicaciones from '../Components/Publicaciones';
import Stories from '../Components/Stories/Stories';

const PublisherScreen = () => {

  const [ post, setPost ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ ready, setReady ] = useState(false);
  // const [all, setAll] = useState([]);

  /**
   * TODO Necesitamos Refactorizar este código, con un Promise All
   * !Según estoy observando unos problemas con este código, vamos a tener que utilizar la sintaxis de promesas tradicional
   */
  
  async function fetchUser () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    setUser(data);
    // setAll(data);
  }
  
  async function fetchPost () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    const data = await response.json();
    setPost(data);
    // setAll([...all, data]);
    setReady(true)
  }


  useEffect(() => {
    fetchPost();
    fetchUser();
  }, [])

  return (
      <>
    { ready === false ? 
      <>
      <ActivityIndicator size={'large'} color={'violet'} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
      </>
      :
      <>
      <Stories />
      <FlatList 
          data={user}
          keyExtractor={x => x.id}
          renderItem={({item}) => <Publicaciones id={item.id} nameUser={item.username} post={post} />}
        />
      </>
    }
</>
    )
}

export default PublisherScreen

const styles = StyleSheet.create({

})