import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK, BLUE } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff"
   },
   backgroundEdit:{
      backgroundColor:"#fff",
      flex:1
     },
   bgImage:{
    height:300,
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:20
   },
   contentViewEdit:{
    paddingHorizontal:20
   },
   borderLine:{
    height:1,
    backgroundColor:"#D3D3D3",
    marginVertical:5
   },
   userImageStyle:{
    height:100,
    width:100,
    borderRadius:50,
    alignSelf:"center",
    borderColor:BGRDRK,
    borderWidth:3
   },
   textViewStyle:{
    marginTop:10,
    backgroundColor:"#F3F8F3",
    padding:10
   },
   textInnerStyle:{
    marginVertical:10
   },
   checkCartStyle:{
    backgroundColor:BGR,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    padding:15,
    justifyContent:"center",
    marginTop:10
   },
   editProfileStyle:{
    backgroundColor:"#fff",
    // elevation:2,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    padding:15,
    justifyContent:"center",
    // borderColor:BGR,
    // borderWidth:1
   },
   userEditImageStyle:{
    height:100,
    width:100,
    borderRadius:50,
    alignSelf:"center",
    // borderColor:BGRDRK,
    // borderWidth:3
    flex:1,
    justifyContent:"center"
   },
   plusStyle:{
    alignSelf:"center",
    backgroundColor:BGR,
    borderRadius:50,
    opacity:0.7
   },
   textInputStyle:{
    borderBottomWidth:1,
    paddingBottom:1,
    paddingTop:2,
    borderBottomColor:"#DCDCDC"
   },
   backIconStyle:{
    padding:10
   },
   updateButtonStyle:{
      backgroundColor:BGR,
      borderRadius:10,
      flexDirection:"row",
      alignItems:"center",
      padding:15,
      justifyContent:"center",
      marginTop:10,
      marginBottom:20
   }
})

export default Style;