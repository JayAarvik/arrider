import { StyleSheet, Platform } from "react-native"
import { BGC, BGI, BGR, BGRDRK, Redd } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff",
    flex:1
   },
   bgImage:{
    height:"100%",
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:10,
    height:"100%"
   },
   titleViewStyle:{
    paddingTop : Platform.OS == "ios" ? 50 : null,
    backgroundColor:BGR,
    padding:10,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
   }, 
   catFlatView:{
      marginHorizontal:5,
      marginVertical:5,
      borderWidth:1,
      padding:10,
      borderColor:BGR,
      borderRadius:10
   },
   reqTabs:{
      flexDirection:"row",
      alignItems:"center",
      marginVertical:5
   },
   accTabStyle:{
      backgroundColor:BGR,
      padding:10,
      marginRight:10,
      borderRadius:5,
      width:"45%"
   },
   rejTabStyle:{
      backgroundColor:BGC,
      padding:10,
      marginLeft:5,
      borderRadius:5,
      width:"45%"
   },
   kmView:{
      flexDirection:"row",
      alignItems:"center"
   },
   itemNameView:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
   },
   infoStyle:{
      // padding:5
   },
   centeredView: {
      flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor:'rgba(0,0,0,0.7)'
    },
    modalView: {
      // margin: 20,
      backgroundColor: 'white',
      // borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      // borderRadius: 20,
      padding:5,
      elevation: 2,
      position:"absolute",
      right:0,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: BGR,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginVertical: 30,
      textAlign: 'center',
      fontWeight:"500"
    },
    rejectSubmitStyle:{
      backgroundColor:Redd,
      padding:10
    },
    buttonCloseReject: {
      backgroundColor: Redd,
    },
    rejectionReasonStyle:{
      width:"80%",
      height:100,
      borderWidth:1,
      marginVertical:10,
      borderColor:"#D3D3D3",
      borderRadius:10
    }
})

export default Style;