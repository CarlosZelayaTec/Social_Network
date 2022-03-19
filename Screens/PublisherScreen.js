import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Publicaciones from '../Components/Publicaciones';

const PublisherScreen = () => {

  const [ post, setPost ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ image, setImage ] = useState([]);

  /**
   * TODO Necesitamos Refactorizar este código, con un Promise All
   */

  async function fetchPost () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json();
    setPost(data);
    return
  }

  async function fetchUser () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json();
    setUser(data);
    return
  }

  async function fetchImage () {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/1')
    const data = await response.json();
    setImage(data);
    return
  }

  useEffect(() => {
    fetchPost();
    fetchUser();
    fetchImage();
  }, [])

  return (
        <Publicaciones />
    )
}

export default PublisherScreen

const styles = StyleSheet.create({

})