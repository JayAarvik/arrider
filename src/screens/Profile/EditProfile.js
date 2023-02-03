import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    TextInput,
    FlatList,
    Image,
    ScrollView
  } from 'react-native'
  import React, { useState } from 'react'
  import Style from './Style'
  import { BGR, BGRDRK, BLUE, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
  import { Tcho, Txt } from '../../Utils/general'
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import { Avatar } from 'react-native-elements';

export default function EditProfile({navigation}) {
    const goBackNow = () => {
        navigation.goBack();
    }
  return (
    <View style={Style.backgroundEdit}>
        <TouchableOpacity style={Style.backIconStyle} onPress={() => goBackNow()}>
            <MaterialCommunityIcons size={35} color={BGR} name="chevron-left" />
        </TouchableOpacity>
    <ScrollView style={Style.contentViewEdit}>
        <TouchableOpacity>
            <ImageBackground 
                source={require("../../images/user.jpg")} 
                style={Style.userEditImageStyle}
                borderRadius={50}
                blurRadius={15}
            >
            <MaterialCommunityIcons size={35} color="#fff" name="plus" style={Style.plusStyle} />
            </ImageBackground>
        </TouchableOpacity>
        <View style={Style.textViewStyle}>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>Name</Txt>
                <TextInput  
                    placeholder='Name' 
                    style={Style.textInputStyle} />
            </View>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>Phone Number</Txt>
                <TextInput 
                    placeholder='Phone number' 
                    style={Style.textInputStyle} />
            </View>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>Email</Txt>
                <TextInput 
                    placeholder='Email' 
                    style={Style.textInputStyle} />
            </View>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>Age</Txt>
                <TextInput 
                    placeholder='Age' 
                    style={Style.textInputStyle} />
            </View>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>Address</Txt>
                <TextInput 
                    multiline={true}
                    placeholder='Address' 
                    style={Style.textInputStyle} />
            </View>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>Adhar card no.</Txt>
                <TextInput 
                    placeholder='Adhar card' 
                    style={Style.textInputStyle} />
            </View>
            <View style={Style.textInnerStyle}>
                <Txt c="ttl" w="400" s={16}>PAN card no.</Txt>
                <TextInput 
                    placeholder='PAN card no.' 
                    style={Style.textInputStyle} />
            </View>
        </View>
        <TouchableOpacity style={Style.updateButtonStyle}>  
            <MaterialCommunityIcons size={25} color="#fff" name="check" />
            <Txt c="w" w="500" s={18} ml={5}>Update Profile</Txt>
        </TouchableOpacity>
    </ScrollView>
</View>
  )
}