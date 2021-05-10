import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';


const UserCell = (props, navigation) => {
  const data = props.data
  const renderView = () => {
    return (
      <View>
        <View style={styles.mainView}>
          <View style={styles.leftTool}>
              <Image
                style={styles.userImage}
                source={{
                  uri: data.avatar_url,
                }}
              />
          </View>
          <View style={styles.rightTool}>
            <Text style={styles.name}>{data.login}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => {
         props.onCellPress(data)
      }}>
      {renderView()}
    </TouchableOpacity>
  );
};
export default UserCell;

const styles = StyleSheet.create({
  mainView: {
    height: 70,
    padding: 10,
    flexDirection: 'row',
    
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000'
  },
  other :{
    fontSize: 14,
    color: '#000000'
  },
  leftTool: {
    flex: 1,
    paddingLeft: 5,
  },
  userImage:{
    width: 50,
    height: 50,
    borderRadius : 5
  },
  rightTool: {
    flex: 4,
    justifyContent: 'center',
  },
  statusView: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#D3D3D3",
  }
});
