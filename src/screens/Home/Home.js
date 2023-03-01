import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    ScrollView, StatusBar,
    TextInput,
    FlatList,
    Image, Switch
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGC, BGR, BGRDRK, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function Home({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [loc, setLoc] = useState('');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const OpenSingleItem = () => {
        navigation.navigate("SingleItem");
    }
   Geolocation.getCurrentPosition(info => setLoc(info));
    return (
        <ScrollView style={Style.background}>
            <StatusBar backgroundColor={BGR} />
            <View style={Style.firstView}>
                <View style={Style.nameView}>
                    <Avatar
                        rounded
                        source={User_Img}
                        containerStyle={{ borderWidth: 2, borderColor: "#fff" }}
                        size="small"
                    />
                    <Txt ml={10} s={20} w="600" c="w">Welcome Rider!</Txt>
                </View>
                <View style={Style.addressStyle}>
                    <View style={Style.addressHeading}>
                        <MaterialCommunityIcons size={20} color="#fff" name="map-marker-radius" />
                        <Txt c="w">Area zone</Txt>
                    </View>
                    <View style={Style.addressHeading}>
                        <Txt c="w" w="500">Chandigarh, India...</Txt>
                        <MaterialIcons size={25} color="#fff" name="keyboard-arrow-down" />
                    </View>
                </View>
            </View>

            <View style={Style.statusView}>
                <Txt s={18} c="bgrdrk" w="600">Status</Txt>
                <View style={Style.switchViewStyle}>
                    <Txt c={isEnabled ? "bgrdrk" : "rd"}>{isEnabled ? "Online " : "Offline "}</Txt>
                    <Switch
                        trackColor={{ false: '#767577', true: "#767577" }}
                        thumbColor={isEnabled ? BGRDRK : BGC}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => toggleSwitch()}
                        value={isEnabled}
                    />
                </View>
            </View>

            <View style={Style.borderLine}></View>

            <View style={Style.secondView}>
                <Txt c="bgrdrk" s={20} w="500">Orders</Txt>
                <View style={Style.orViewStyle}>
                    <View style={Style.orderDelViewStyle}>
                        <MaterialIcons size={30} color={BGR} name="delivery-dining" style={Style.iconBox} />
                        <Txt s={18} w="600" c="bgr" a="c">Delivered</Txt>
                        <Txt s={15} w="600" c="bgr" a="c">210</Txt>
                    </View>
                    <View style={Style.orderCanViewStyle}>
                        <MaterialCommunityIcons size={25} color={BGC} name="close-circle-outline" style={Style.iconBox} />
                        <Txt s={18} w="600" c="rd" a="c">Cancelled</Txt>
                        <Txt s={15} w="600" c="rd" a="c">12</Txt>
                    </View>
                    <View style={Style.orderPenViewStyle}>
                        <MaterialIcons size={25} color="#000" name="pending-actions" style={Style.iconBox} />
                        <Txt s={18} w="600" c="ttl" a="c">Pending</Txt>
                        <Txt s={15} w="600" c="ttl" a="c">3</Txt>
                    </View>
                    <View style={Style.orderEarViewStyle}>
                        <MaterialIcons size={25} color={BGRDRK} name="money" style={Style.iconBox} />
                        <Txt s={18} w="600" c="bgrdrk" a="c">Earning</Txt>
                        <Txt s={15} w="600" c="bgrdrk" a="c">200</Txt>
                    </View>
                </View>

                <View style={Style.borderLine}></View>

                <Txt c="bgrdrk" s={20} w="500" mt={20}>Your area zone</Txt>
                <View style={Style.areaZoneView}>
                   {
                    loc ? 
                    <MapView
                        style={Style.mapViewStyle}
                        initialRegion={{
                            latitude: loc.coords.latitude,
                            longitude: loc.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}
                    /> : 
                    <Txt>loading...</Txt>
                    }
                </View>

            </View>
        </ScrollView>
    )
}