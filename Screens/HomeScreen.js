import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import User from '../Components/Users';
// import dataUser from '../Api/Users';

const HomeScreen = () => {

  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);

    const fetchingImages = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      setImages(data)
    }
    const fetchingUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data)
    }

    useEffect(() => {
        fetchingImages();
        fetchingUsers();
    }, [])

  return (
    <User user={users} images={images}/>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center', 
         alignItems: 'center'
    },
    
})