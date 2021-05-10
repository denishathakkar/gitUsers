import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const DetailCell = props => {
  const key = props.keyVal;
  const value = props.value;
  if(value !== null) {
  return (
    <View>
      <View style={styles.mainView}>
        <View style={styles.leftTool}>
          <Text style={styles.cellText}>{key}</Text>
        </View>
        <View style={styles.rightTool}>
          <Text numberOfLines={0} style={styles.valueText}>{value}</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
  } else {
      return null
  } 


};
export default DetailCell;

const styles = StyleSheet.create({
  mainView: {
    height: 44,
    padding: 10,
    flexDirection: 'row',
  },
  cellText: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: '400',
  },
  valueText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'flex-end',
    color : "#007AFF"
  },
  leftTool: {
    flex: 1.1,
    alignItems: 'flex-start',
  },
  rightTool: {
    flex: 1.4,
    alignItems: 'flex-start',
  },
  separator: {
    height: 1,
    backgroundColor: "#D3D3D3",
  }
});
