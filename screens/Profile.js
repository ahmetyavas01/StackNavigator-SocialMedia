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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, marginTop: 20, fontWeight: 'bold' }}>{user.followers}</Text>
          <Text style={{ fontSize: 20, marginTop: 5 }}>Follows</Text>
        </View>
      </View>

      <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>ABOUT</Text>
      <Text style={{ fontSize: 16, marginLeft: 30, marginRight: 30, marginTop: 5, color: 'gray' }}>{user.about}</Text>
      <FlatList
        data={user.post}
        numColumns={3}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Image source={{ uri: item.image }} style={styles.postImage} />}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 5,
    borderColor: 'purple'
  },
  postImage: {
    width: 120,
    height: 120,
    margin: 2,
    marginTop: 20
  }
})