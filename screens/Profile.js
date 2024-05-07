import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DATA } from '../Data/data';

export default function Profile({ route }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    (async () => {
      const id = route.params.UserId;
      const user = DATA.filter((e) => e.id === id)[0];
      setUser(user);

    })();
  }, []);

  return (
    <View style={{ alignItems: 'center', flex: 1, marginVertical: 20 }}>
      <Image style={styles.userImage} source={{ uri: user.avatar }} />
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{user.name}</Text>
      <Text style={{ fontSize: 20 }}>{user.email}</Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, marginTop: 20, fontWeight: 'bold' }}>{user.follows}</Text>
          <Text style={{ fontSize: 20, marginTop: 5 }}>Follower</Text>
        </View>
        <View style={{ width: 1, height: 65, backgroundColor: '#C0C2C5', marginTop: 20 }}></View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, marginTop: 20, fontWeight: 'bold' }}>{user.followers}</Text>
          <Text style={{ fontSize: 20, marginTop: 5 }}>Follows</Text>
        </View>
      </View>
      <View style={{ height: 1, width: '90%', backgroundColor: '#C0C2C5', marginTop: 20 }}></View>
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>ABOUT</Text>
      <Text style={{ fontSize: 16, marginLeft: 30, marginRight: 30, marginTop: 5, color: 'gray' }}>{user.about}</Text>
      <View style={{ height: 1, width: '90%', backgroundColor: '#C0C2C5', marginTop: 20 }}></View>
      
      <FlatList
        data={user.post}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Image source={{ uri: item.image }} style={styles.postImage} />}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#B974F5'
  },
  postImage: {
    width: 170,
    height: 170,
    margin: 8,
    marginTop: 20,
    borderRadius: 8,
  }
})