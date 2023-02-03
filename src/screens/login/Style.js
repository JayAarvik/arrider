import { StyleSheet } from "react-native"
import { BGR, LGR } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    flex:1,
    backgroundColor:"#fff"
   },
   bgImage:{
    height:200,
    width:300,
    resizeMode:"cover",
    marginTop:20,
    alignSelf:"center"
   },
   contentView:{
    padding:20,
    height:"100%"
   },
   textInputStyle:{
   //  borderBottomWidth:1,
   //  paddingBottom:1,
    borderColor:"gray",
   },
   backIcon:{
      padding:10,
      backgroundColor:"transparent"
     },
   emailView:{
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:LGR,
      paddingVertical:5,
      paddingHorizontal:10,
      marginVertical:3
   },
   submitBtnsStyle:{
      // flex:1,
     },
     submitBtnStyle:{
      backgroundColor:"#fff",
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:10,
      borderWidth:1,
      borderColor:"#D3D3D3",
      flexDirection:"row",
      alignItems:"center",
      marginTop:10
     },
     lineStyle:{
      backgroundColor:"#D3D3D3",
      height:2,
      width:"30%"
     },
     lineView:{
      marginTop:20,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"
     },
     gglStyle:{
      height:25,
      width:25
     }
})

export default Style;