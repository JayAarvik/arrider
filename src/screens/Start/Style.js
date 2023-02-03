import { StyleSheet } from "react-native"
import { BGC } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    flex:1,
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
   riderImageStyle:{
    height:200,
    width:200,
    alignSelf:"center",
    marginTop:30
   },
   textInputStyle:{
      borderBottomWidth:1,
      borderColor:"#DCDCDC",
      paddingBottom:1,
      paddingTop:3
   },
   registerBtnStyle:{
      backgroundColor:BGC,
      padding:10,
      marginTop:25,
      alignItems:"center",
      borderRadius:5
   },
   languageStyle:{
    flexDirection:"row",
    alignItems:"center",
    width:"35%",
    justifyContent:"space-around",
    marginTop:20
   },
   firstHeading:{
    marginTop:50
   },
   submitBtnsStyle:{
    flex:1,
    justifyContent:"flex-end"
   },
   submitBtnStyle:{
    backgroundColor:"#fff",
    borderRadius:10,
    paddingVertical:15
   }
})

export default Style;