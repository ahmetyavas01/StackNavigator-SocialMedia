import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DATA } from '../Data/data'
import User from './User'

export default function UserList() {
    return (

        <View style={{ width: '90%' }}>
            <FlatList data={DATA} keyExtractor={(e) => e.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <User
                    avatar={item.avatar}
                    name={item.name}
                    online={item.online}
                    email={item.email}
                    id={item.id}
                />} />
        </View>


    )
}

const styles = StyleSheet.create({})