import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <View style={{justifyContent:'center', alignItems:'center', marginVertical:15}}>
      <UserList/>
    </View>
  )
}

const styles = StyleSheet.create({})