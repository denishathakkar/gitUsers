import React ,{useState, useEffect} from 'react';
 import {View, Text, FlatList, Image} from 'react-native';
import {getUserDetailData} from '../../api/methods/UserData'
import DetailCell from './Components/DetailCell';
import GistCell from './Components/GistCell';
import RepoCell from './Components/RepoCell';
import styles from './styles';

const UserDetail = (props) => {

    const userUrl = props.route.params.userDataUrl
    const reposUrl = props.route.params.repos_url
    const gistUrl = props.route.params.gists_url

    const keys = ["Name", "Login", "Company", "Location", "Followers", "Following", "Bio"]

    const [userDetail, setUserDetail] = useState([])
    const [repoDetail, setRepoDetail] = useState([])
    const [gistDetail, setGistDetail] = useState([])

    const [allDetail, setAllDetail] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsersDetailData = async() =>{
         var allDetail = await getUserDetailData(userUrl,reposUrl,gistUrl)
         var userDetail = allDetail.usersJson
         
         setUserDetail([userDetail])
         setRepoDetail(allDetail.reposJson)
         setGistDetail(allDetail.gistsJson)

         setAllDetail([userDetail.name, userDetail.login, userDetail.company, userDetail.location, userDetail.followers, userDetail.following, userDetail.bio])
    }

    useEffect(() =>{
        if(0 in userDetail) {
            setLoading(false)
        }
    },[userDetail])

    useEffect(() => {
         fetchUsersDetailData()
    },[]);

    const renderHeader = (title) => {
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        )
    }

    const renderDetailView = (item, index) => {
        return (
        
          <View>
            <DetailCell keyVal={item} value={allDetail[index]} />
          </View>
        )
      }

    const renderRepoView = (item, index) => {
        return (
        
          <View>
            <RepoCell data={item} />
          </View>
        )
    }

    const renderGistsView = (item, index) => {
        return (
        
          <View>
            <GistCell data={item} />
          </View>
        )
    }

    return (
        <View
          style={{
            flex: 1,
            marginBottom: 18,
            backgroundColor: 'rgba(249,249,249,0.94)',
          }}>
        {!loading && 
        <View style={{alignItems :"center"}}>
            <Image
                style={{width: 150, height : 150 , marginTop :10}}
                source={{
                  uri: userDetail[0].avatar_url,
                }}
              />
            <View style={{width:"100%", justifyContent:"space-around"}}>
            
            {renderHeader("Info")}

            <FlatList
                style={{marginTop : 10, height : "30%"}}
                data={keys}
                renderItem={({ item, index }) => renderDetailView(item, index)}
                keyExtractor={(item, index) => index}
            />
            
            {renderHeader("Repositories")}
            
            <FlatList
                style={{marginTop : 10, height : 80}}
                data={repoDetail}
                renderItem={({ item, index }) => renderRepoView(item, index)}
               
                keyExtractor={(item, index) => index}
            />

            {renderHeader("Gists")}
            
            <FlatList
                style={{ marginTop : 10, height: 80 }}
                data={gistDetail}
                renderItem={({ item, index }) => renderGistsView(item, index)}
               
                keyExtractor={(item, index) => index}
            />
            </View>
        </View>
        }
        </View>
      );
}

export default UserDetail;