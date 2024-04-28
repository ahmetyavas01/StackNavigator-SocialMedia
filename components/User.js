import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function User({ avatar, name, online, email, id }) {
    const navigation = useNavigation();
    return (
        <View style={{ width: '90%', height: 70, flexDirection: 'row', margin: 2, padding: 2, alignSelf: 'center' }}>
            <View style={{ flex: 2 }}>
                <Image style={styles.userImage} source={{ uri: avatar }} />
                {online && (
                    <View style={styles.active}></View>
                )}
            </View>
            <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.userEmail}>{email}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', { UserId: id })}>
                    <AntDesign name="right" size={27} color="black" style={styles.online} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 60, height: 60,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'purple'
    },
    username: {
        fontWeight: 'bold',
    },
    userEmail: {
        color: 'gray',
        fontSize: 12
    },
    online: {
        marginLeft: 10
    },
    active:{
        width:13,
        height:13,
        borderRadius:8,
        position:'absolute',
        bottom:8,
        right:27,
        backgroundColor:'green'
    }
})