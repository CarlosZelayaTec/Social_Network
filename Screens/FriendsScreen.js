import React, {useState, useEffect} from 'react';
import User from '../Components/Users';

/**
 * 
 * * Para poder concatenar en un estado un elemento podemos utilizar la siguiente opción
 * ! let Arreglo = [ nuevoElemento, ...Arreglo ]
 * ! setArreglo([nuevoElemento, ...Arreglo])
 * 
 * ? Es importante tener en cuenta este tipo de ayuda, ya que el useState no nos agrega a un arreglo un nuevo elemento
 * ? solo lo actualiza, con este método podemos hacer que se vayan guardando los nuevos elementos que vayamos agregando  
 *  
 */

const FriendsScreen = ({ navigation }) => {

  const [users, setUsers] = useState([]);
  
    const fetchingUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data)
    }

    useEffect(() => {
        fetchingUsers();
    }, [])

  return (
    <User user={users}  navigation={navigation} />
  )
}

export default FriendsScreen;