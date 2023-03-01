import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Style from './Style';
import { BGC, BGI, BGR, BGRDRK, ggl_icon, login_rider, TXTC } from '../../Utils/Import';
import { InTextwithbtn, Tcho, Txt } from '../../Utils/general';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Login({ navigation }) {
    const [no, setNo] = useState("");
    const [e_no, setE_No] = useState("");

    const Login = () => {
        navigation.navigate("Tabs")
    }
    const SignUp = () => {
        navigation.navigate("Registration");
    }
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={Style.background}>
            <TouchableOpacity style={Style.backIcon} onPress={() => goBack()}>
                <MaterialIcons size={20} color={BGRDRK} name="arrow-back-ios" />
            </TouchableOpacity>
            <Image source={login_rider} style={Style.bgImage} />
            <View style={Style.contentView}>
                <Txt s={30} w="700" c="bgr" pt={10}>Login</Txt>
                {/* <Txt s={13} w="500" c="g" pt={1}>Login with phone number and password</Txt> */}
                
                    <Txt s={11} c="ttl" w="400" mt={15}>Login Id</Txt>
                <View style={Style.emailView}>  
                    <MaterialCommunityIcons size={20} color="gray" name="email-outline" />
                    <TextInput
                        placeholder=' Enter your login id'
                        style={Style.textInputStyle}
                    />
                </View>
                    <Txt s={11} c="ttl" w="400" mt={15}>Enter password</Txt>
                <View style={Style.emailView}>  
                    <MaterialCommunityIcons size={20} color="gray" name="key-outline" />
                    <TextInput
                        placeholder=' Enter password'
                        style={Style.textInputStyle}
                    />
                </View>

                <Tcho wd={"100%"} mt={30} bg={BGR} ht={50} br={10}
                    onPress={() => Login()}
                >
                    <Txt a="c" s={17} pt={2} c="w" w="500">Login</Txt>
                </Tcho>

                <Txt a="c" s={14} mt={20} c="bgr">
                    Store not registered yet?
                    <Txt s={15} c="bgr" w="700" pl={10} pr={10} onPress={() => SignUp()}> Register</Txt>
                </Txt>

                <View style={Style.submitBtnsStyle}>
                    <View style={Style.lineView}>
                        <View style={Style.lineStyle}></View>
                        <Txt c="ttl" s={14}>Or login with</Txt>
                        <View style={Style.lineStyle}></View>
                    </View>
                            <TouchableOpacity style={Style.submitBtnStyle} onPress={() => startBtn()}>
                                {/* <MaterialCommunityIcons size={20} color="#4285F4" name="google"/> */}
                                <Image source={ggl_icon} style={Style.gglStyle}/>
                                <View style={{width:"90%"}}>
                                <Txt a="c" s={17} w="600">Google</Txt>
                                </View>
                            </TouchableOpacity>         
                </View>

            </View>
        </View>
    )
}