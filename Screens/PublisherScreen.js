import { StyleSheet, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Publicaciones from '../Components/Publicaciones';
import Stories from '../Components/Stories/Stories';

const PublisherScreen = ({ navigation }) => {

  const [ post, setPost ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ ready, setReady ] = useState(false);

  /**
   * TODO Necesitamos Refactorizar este código, con un Promise All
   * !Según estoy observando unos problemas con este código, vamos a tener que utilizar la sintaxis de promesas tradicional
   */
  
  async function fetchUser () {
    try{
      const userUrl = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(userUrl);

          if(response.status !== 200) throw "Error...";        

        const data = await response.json();
          setUser(data);
    }catch(error) {
      console.log(error);
    }
  }
  
  async function fetchPost () {
    try{
      const postUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';
        const response = await fetch(postUrl);

          if(response.status !== 200) throw "Error...";

        const data = await response.json();
          setPost(data);
          setReady(true)
    }catch(error) {
      console.log(error);
    }
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
      <FlatList 
          data={user}
          keyExtractor={x => x.id}
          ListHeaderComponent={()=> <Stories /> }
          renderItem={({item}) => <Publicaciones id={item.id} nameUser={item.username} post={post} navigation={navigation} />}
        />
      </>
    }
</>
    )
}

export default PublisherScreen

const styles = StyleSheet.create({

})