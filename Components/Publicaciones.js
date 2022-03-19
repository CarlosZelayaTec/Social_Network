import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const Publicaciones = ({ post, user, image }) => {

    /**
     * * Esta es el componente de cada una de las publicaciones que haga un usuario
     * TODO Lo que nos faltaría hacer es que el botón de mostrar más texto funcione
     * ? Buscar que parte del código podemos refactorizar para mejorar el rendimiento
     */


  return (
    <View style={styles.container} >
        <View style={styles.containerPublish} >
            <View style={styles.header} >
                <Image style={styles.perfilPhoto} source={{uri: 'https://images.ecestaticos.com/XBt9G5umGpid8S2dgQk2G5jGUow=/119x0:2001x1412/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F848%2Ff70%2F0d5%2F848f700d5a15920f020496a616af873a.jpg'}} />
                    <Text style={styles.userName} >Carlos Zelaya</Text>
                    <TouchableOpacity onPress={() => alert('Falta hacer el menú')}>
                        <Ionicons name='menu' size={32} />
                    </TouchableOpacity>
            </View>

                <Text style={styles.title}>Today is a great day</Text>
                    <View style={styles.containerBody} >
                        <Text style={styles.body} numberOfLines={6} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <TouchableOpacity onPress={() => changeText} >
                            <Text style={{color: 'grey'}} >Ver más</Text>
                        </TouchableOpacity>        
                    </View>

                    <View style={styles.containerImages} >
                        <Image style={styles.imagePublish} source={{uri: 'https://media.traveler.es/photos/61376371d4923f67e298e32a/master/w_1600%2Cc_limit/190171.jpg'}} />
                    </View>
        </View>
    </View>
  )
}

export default Publicaciones

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginHorizontal: 10,
        marginTop: 10,
        maxHeight: '45%'
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
        height: '100%'
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
        // backgroundColor: 'blue'
    }
})