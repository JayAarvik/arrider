import { StyleSheet, Platform } from "react-native"
import { BGC, BGR, BGRDRK, Redd, Ylw } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff"
   },
   bgImage:{
    height:"100%",
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:20,
    height:"100%"
   },
   firstView:{
      paddingTop : Platform.OS == "ios" ? 50 : null,
      padding:10,
      backgroundColor:BGR,
    //   paddingBottom:100,
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30
   },
   nameView:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:10
   },
   voucherView:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:10
   },
   voucherInside:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"#02424C",
      padding:10,
      borderRadius:10,
      marginHorizontal:2
   },
   secondView:{
      marginHorizontal:20,
      marginTop:20,
   },
   orViewStyle:{
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-evenly"
   },
   orderDelViewStyle:{
      padding:20,
      borderRadius:10,
      marginTop:10,
      width:"45%",
      height:100,
      backgroundColor:"#f5f5f4"
   },
   orderPenViewStyle:{
      padding:20,
      borderRadius:10,
      marginTop:10,
      width:"45%",
      height:100,
      backgroundColor:"#F4F0E0"
   },
   orderCanViewStyle:{
      padding:20,
      borderRadius:10,
      marginTop:10,
      width:"45%",
      height:100,
      backgroundColor:"#F6EEE3"
   },
   orderEarViewStyle:{
      padding:20,
      borderRadius:10,
      marginTop:10,  
      width:"45%",
      height:100,
      backgroundColor:"#F5F2D0"
   },
   addressStyle:{
      marginTop:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingHorizontal:15
   },
   addressHeading:{
      flexDirection:"row",
      alignItems:"center",
   },
   iconBox:{
      alignSelf:"center"
   },
   statusView:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginHorizontal:20,
      marginTop:20
   },
   switchViewStyle:{
      flexDirection:"row",
      alignItems:"center"
   },
   borderLine:{
      backgroundColor:"#DCDCDC",
      height:1,
      width:"80%",
      alignSelf:"center",
      marginTop:15
   },
   areaZoneView:{
      marginTop:15,
      height:150,
      backgroundColor:BGR
   },
   mapViewStyle:{
      height:150,
      width:"100%"
   }
})

export default Style;