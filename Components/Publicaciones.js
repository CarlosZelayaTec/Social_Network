import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const Publicaciones = ({ post, nameUser, id, navigation }) => {

    /**
     * * Esta es el componente de cada una de las publicaciones que haga un usuario
     * TODO Lo que nos faltaría hacer es que el botón de mostrar más texto funcione
     * ? Buscar que parte del código podemos refactorizar para mejorar el rendimiento
     * 
     * *Ya hemos agregado los usuarios, los post y hemos arreglado el estilo
     * TODO Faltaría agregar las imagenes de cada uno de nuestros usuarios
     * TODO Faltaría desarrollar una función que permita que veamos los post de todos los usuarios, ya que un usuario tiene varios Post
     */

    const [ showText, setShowText ] = useState(2);
    

    return (
    <View style={styles.container} >
        <View style={styles.containerPublish} >
        {/**
            * *Aquí esta el Header, contiene: foto de perfil, nombre de usuario, boton de menú
         */}
            <View style={styles.header} >

                <TouchableOpacity onPress={() => navigation.navigate('profileStack') } >     
                    <Image style={styles.perfilPhoto} source={{uri: 'https://images.ecestaticos.com/XBt9G5umGpid8S2dgQk2G5jGUow=/119x0:2001x1412/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F848%2Ff70%2F0d5%2F848f700d5a15920f020496a616af873a.jpg'}} />
                </TouchableOpacity>    
                    <Text style={styles.userName} >{nameUser}</Text>

                        <TouchableOpacity onPress={() => alert('Falta hacer el menú')}>
                            <Ionicons name='menu' size={32} />
                        </TouchableOpacity>

            </View>

            {/**
                * *Aquí esta el titulo que no va encerrado en ningún View
             */}

                <Text style={styles.title}>{
                post[id - 1].title === undefined ? `Aqui va el título del Post` : post[id - 1].title 
                }</Text>

                {/* 
                    * *Aquí va el Body
                 */ }
                    <View style={styles.containerBody} >
                        <Text style={styles.body} numberOfLines={showText} >{
                             post[id - 1].body === undefined ? `Aqui va el cuerpo del Post` : post[id - 1].body
                        }</Text>
                        <TouchableOpacity onPress={() => setShowText(10)} >
                            <Text style={{color: 'grey'}} >Ver más</Text>
                        </TouchableOpacity>        
                    </View>

                    {/**
                        * * Aquí tenemos el contenedor de la imagen
                     */}
 
                    <View style={styles.containerImages} >
                        <Image style={styles.imagePublish} source={require('../assets/default.jpg')} loadingIndicatorSource={{uri: 'https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-1.png'}} />
                    </View>
        </View>
    </View>
  )
}

export default Publicaciones

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFF'
    },
    header:{
        // flex: 1,
        flexDirection: 'row',
        marginLeft: 2,
        marginTop: 2,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerPublish: {
        // flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
        // height: '80%',
        // backgroundColor: '#ccc'
    }, 
    perfilPhoto: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    containerBody: {
        marginVertical: 5,
        marginHorizontal: 5
    },
    imagePublish: {
        width: '100%',
        height: 300
    },
    userName: {
        fontSize: 22,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ccc222'
    },
    containerImages: {
        // backgroundColor: 'blue',
        // padding: 10
    },
    body: {
        // color: '#FFFFFF'
    }
})