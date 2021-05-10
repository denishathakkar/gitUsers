import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';


const RepoCell = (props, navigation) => {
  const data = props.data
  const renderView = () => {
    return (
      <View>
        <View style={styles.mainView}>
          <View style={styles.leftTool}>
             <Text style={styles.name}>{data.full_name}</Text>
          </View>
        
        </View>
        <View style={styles.separator} />
      </View>
    );
  }
  return (
        renderView()
  );
};
export default RepoCell;

const styles = StyleSheet.create({
  mainView: {
    height: 44,
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
    flex: 2,
    paddingLeft: 5,
  },
  userImage:{
    width: 50,
    height: 50,
    borderRadius : 0.5
  },
  rightTool: {
    flex: 3,
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
