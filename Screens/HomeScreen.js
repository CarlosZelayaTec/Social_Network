import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import User from '../Components/Users';

const HomeScreen = ({ navigation }) => {

  // console.log(navigation);

  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);
  
    const fetchingUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data)
    }

    const fetchImagesProfiles = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
      const data = await response.json();
      setImages(data);
    }

    useEffect(() => {
        fetchingUsers();
        fetchImagesProfiles();
    }, [])

  return (
    <User user={users} image={images} navigation={navigation} />
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