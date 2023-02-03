import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  Modal,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGC, BGR, BGRDRK, Gry, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { InfoModal, Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';

export default function Requests({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalReject, setModalReject] = useState(false);
  const [orderDetail, setOrderDetail] = useState("");
  const [AllReq, setAllReq] = useState([
    { id: 0, from: "Katani Dhaba", to: "HNo: 123, Sec 12, Chandigarh", totalkm: 4, type: "veg", details: "1 Bread, 1 Soya souce", orderNo: 35195 },
    { id: 1, from: "Amritsari Dhaba", to: "HNo: 31, Sec 52, Mohali", totalkm: 6.5, type: "veg", details: "1 Bread, 1 Soya souce", orderNo: 52684 },
    { id: 2, from: "Haweli", to: "HNo: 12, Phase 5, Mohali", totalkm: 10, type: "veg", details: "1 Bread, 1 Soya souce", orderNo: 35141 },
  ])

  const infoModalOpen = (dtl) => {
    setOrderDetail(dtl);
    setModalVisible(!modalVisible);
  }
  const rejectOrderBtn = () => {
    setModalReject(!modalReject);
  }
  const renderRequests = (item) => {
    return (
      <View style={Style.catFlatView}>
        <View style={Style.itemNameView}>
          <View style={Style.kmView}>
            <MaterialCommunityIcons size={18} color={Gry} name="map-marker-outline" />
            <Txt s={16}>{item.from}</Txt>
          </View>
          <TouchableOpacity style={Style.infoStyle} onPress={() => infoModalOpen(item)}>
            <CountDown
              until={180}
              // onFinish={() => alert('finished')}
              timeToShow={['M', 'S']}
              timeLabels={false}
              size={10}
              digitStyle={{backgroundColor: BGRDRK, padding:0}}
              digitTxtStyle={{color: "#fff"}}
              showSeparator
            />
            {/* <MaterialCommunityIcons size={20} color={BGRDRK} name="information-outline" /> */}
          </TouchableOpacity>
        </View>
        <MaterialCommunityIcons size={20} color={Gry} name="dots-vertical" />
        <View style={Style.kmView}>
          <MaterialCommunityIcons size={18} color={Gry} name="map-marker-outline" />
          <Txt s={16}>{item.to}</Txt>
        </View>

        <View style={Style.kmView}>
          <MaterialCommunityIcons size={14} color={BGRDRK} name="navigation-variant-outline" />
          <Txt ml={5} mb={3} c="bgrdrk">{item.totalkm} km away</Txt>
        </View>

        <View style={Style.reqTabs}>
          <TouchableOpacity style={Style.accTabStyle}>
            <Txt s={16} c="w" w="600" a="c">Accept</Txt>
          </TouchableOpacity>
          <TouchableOpacity style={Style.rejTabStyle} onPress={() => rejectOrderBtn()}>
            <Txt s={16} c="w" w="600" a="c">Reject</Txt>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={Style.background}>
      <View style={Style.titleViewStyle}>
        <Txt s={18} c="w" w="600" ml={5}>Delivery Requests</Txt>
      </View>
      <View style={Style.contentView}>
        <FlatList
          data={AllReq}
          renderItem={({ item }) => renderRequests(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <TouchableOpacity
              style={[Style.button, Style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <MaterialCommunityIcons size={20} color={BGRDRK} name="close" style={Style.textStyle} />
            </TouchableOpacity>
            <Txt s={18} w="600" c="bgr">{orderDetail.title}</Txt>
            <Text style={Style.modalText}>{orderDetail.details}</Text>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReject}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalReject);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <TouchableOpacity
              style={[Style.button, Style.buttonCloseReject]}
              onPress={() => setModalReject(!modalReject)}>
              <MaterialCommunityIcons size={20} color={BGRDRK} name="close" style={Style.textStyle} />
            </TouchableOpacity>
            <Txt s={18} w="600" c="rd">Reason of rejection</Txt>
            <TextInput
              multiline={true}
              style={Style.rejectionReasonStyle}
            />
            <TouchableOpacity style={Style.rejectSubmitStyle}>
              <Txt c="w" w="500" >Reject</Txt>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
