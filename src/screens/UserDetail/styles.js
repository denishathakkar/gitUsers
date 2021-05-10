/**
 * React Native App
 * Style sheet for Home Screen
 */
 import { StyleSheet } from 'react-native';
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   header: {
     height: 38,
     backgroundColor: "#F2F2F7",
     paddingLeft: 16,
     justifyContent: "center"
   },
   headerText: {
     fontSize: 13,
     color: "rgba(60,60,67,0.60)",
     letterSpacing: -0.08,
     lineHeight: 18,
 
   },
   headerSeparator: {
     marginTop: 0,
     borderColor: "grey",
     borderBottomWidth: 1,
   }
 });
 export default styles;
 