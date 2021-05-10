import React,{useEffect} from 'react';
import { useState } from 'react';
 import {View, Text, FlatList} from 'react-native';
import {getUserData, searchUserData} from '../api/methods/UserData';
import UserCell from './Components/UserCell';
import { Searchbar } from 'react-native-paper';

const Users = (props) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = React.useState('');
    
    const onChangeSearch = async(query) => {
        setSearchQuery(query);
        if(query) { 
            setLoading(true)
            var users = await searchUserData(query)
            if(users.message) {
                alert(users.message)
            }
            console.log("users search", users)
            setUsers(users)
        } else {
            var users = await getUserData()
            if(users.message) {
                alert(users.message)
            }
            setUsers(users)
        }
    }

    const fetchUsersData = async() =>{
         var users = await getUserData()
         console.log("users", users)
         if(users.message) {
             alert(users.message)
         }
         setUsers(users)
    }

    useEffect(() =>{
        
        if(0 in users) {
            setLoading(false)
        }
    },[users])

    useEffect(() => {
         fetchUsersData()
    },[]);

    const onCellPress = (data) =>{
        props.navigation.navigate("UserDetail",{
            userDataUrl : data.url,
            repos_url : data.repos_url,
            gists_url : data.gists_url 
        })
    }

    return (
        <View
          style={{
            flex: 1,
            marginBottom: 18,
            backgroundColor: 'rgba(249,249,249,0.94)',
          }}>
            <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
             {!loading &&
                <FlatList
                data={users}
                renderItem={({ item, index }) =>  <UserCell data={item} onCellPress={onCellPress}/>}
                
                keyExtractor={(item, index) => index}
             />
             }
        </View>
      );
}

export default Users;