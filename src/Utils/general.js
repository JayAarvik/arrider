import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Linking,
  Dimensions,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  StatusBar,
  Modal,
  ActivityIndicator,
} from 'react-native';

import {Input} from 'react-native-elements';
import { BGC } from './Import';
// import Animated, {call, Easing} from 'react-native-reanimated';
// import Under_tick from './../../img/general/underveritick.svg';
// import Moment from 'moment';
// import store from '../../store';
// import {Grayscale} from 'react-native-color-matrix-image-filters';
// import {Crossmoney} from '../cmpimport';
// import Toast from 'react-native-simple-toast';
// import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
// import moment from 'moment';
// import FastImage from 'react-native-fast-image';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// const {
//   Value,
//   event,
//   block,
//   cond,
//   eq,
//   set,
//   Clock,
//   startClock,
//   stopClock,
//   debug,
//   timing,
//   clockRunning,
//   interpolate,
//   Extrapolate,
//   spring,
//   defined,
//   add,
//   lessThan,
//   greaterThan,
// } = Animated;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const STATUS_BAR_HIGHT =
  Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;
const screenHeight = Dimensions.get('screen').height;
export const BOTTOM_NAVIGATOR_BAR_HEIGHT =
  screenHeight - (windowHeight + StatusBar.currentHeight);

export const Tcho = p => {
  return (
    <TouchableOpacity
      disabled={p.press_dasabled ? p.press_dasabled : false}
      onLayout={p.onLayout}
      activeOpacity={p.aco ? p.aco : 0.6}
      style={[
        {
          width: p.wd ? p.wd : 24,
          height: p.ht ? p.ht : 24,
          backgroundColor: p.bg ? p.bg : null,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: p.cntr == "cntr" ? "center" : null,
          borderRadius: p.br ? p.br : 0,
          marginTop: p.mt ? p.mt : 0,
          marginLeft: p.ml ? p.ml : 0,
          marginBottom: p.mb ? p.mb : 0,
          marginRight: p.mr ? p.mr : 0,
        },
        p.style,
      ]}
      onPress={p.onPress}
    >
      {p.children}
    </TouchableOpacity>
  );
};

export const Icon_box = p => {
  return (
    <Tcho
      press_dasabled={p.press_active ? false : true}
      aco={p.press ? 0.6 : 1}
      onPress={p.onPress}
      style={[
        {
          width: p.size ? p.size : 24,
          height: p.size ? p.size : 24,
          backgroundColor: p.bg ? p.bg : null,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: p.br ? p.br : 0,
          marginTop: p.mt ? p.mt : 0,
          marginLeft: p.ml ? p.ml : 0,
          marginBottom: p.mb ? p.mb : 0,
          marginRight: p.mr ? p.mr : 0,
        },
        p.style,
      ]}
    >
      {p.children}
    </Tcho>
  );
};
export const get_font = weight => {
  if (weight === 200) {
    return 'Poppins-ExtraLight';
  } else if (weight === 300) {
    return 'Poppins-Light';
  } else if (weight === 400) {
    return 'Poppins-Regular';
  } else if (weight === 500) {
    return 'Poppins-Medium';
  } else if (weight === 600) {
    return 'Poppins-SemiBold';
  } else if (weight === 700) {
    return 'Poppins-Bold';
  }
};

//fonts
export const Txt = p => {
  return (
    <Text
      numberOfLines={p.lines ? p.lines : null}
      ellipsizeMode={p.ellipsizeMode ? p.ellipsizeMode : null}
      onPress={p.onPress}
      style={{
        fontFamily: p.w ? get_font(p.w) : 'Poppins-Regular',
        fontSize: p.s ? p.s : 14,
        fontWeight: p.w ? p.w : null,
        fontStyle: p.fs ? p.fs : null,
        color:
          p.c === 'g'
            ? '#818181'
            : p.c === 'gr'
            ? '#028A0F'
            : p.c === 'w'
            ? '#FFFFFF'
            : p.c === 'rd'
            ? "#ce171f"
            : p.c === 'ttl'
            ? '#111111'
            : p.c === 'bgr'
            ? '#7EDA85'
            : p.c === 'yl'
            ? '#FFFF00'
            : p.c === 'bgrdrk'
            ? '#0EB177'
            : p.c === 'blue'
            ? '#02424C'
            : p.c === 'or'
            ? '#FA5F1A'
            : '#7f7f7f',
        lineHeight: p.lh ? p.lh : 20,
        marginBottom: p.mb ? p.mb : 0,
        marginTop: p.mt ? p.mt : 0,
        marginRight: p.mr ? p.mr : 0,
        marginLeft: p.ml ? p.ml : 0,
        textAlign: p.a === 'c' ? 'center' : p.a === 'r' ? 'right' : 'auto',
        flex: p.fl ? 1 : null,
        ...p.style,
        position : p.pos == "ab" ? "absolute" : p.pos == "rl" ? "relative" : null,
        right: p.rt ? p.rt : null,
        bottom : p.bt ? p.bt : null,
        top : p.top ? p.top : null,
        left : p.lft ? p.lft : null,
        paddingBottom: p.pb ? p.pb : 0,
        paddingTop: p.pt ? p.pt : 0,
        paddingRight: p.pr ? p.pr : 0,
        paddingLeft: p.pl ? p.pl : 0,
        padding: p.pd ? p.pd : 0,
        backgroundColor: p.bg ? p.bg : "transparent",
        borderRadius: p.brd ? p.brd : 0,
        textDecorationLine: p.tdl ? 'line-through' : null,
      }}
    >
      {p.children}
    </Text>
  );
};
export const get_width = (count, space, padding) => {
  if (padding) {
    return (windowWidth - padding * 2 - space * (count - 1)) / count;
  } else {
    return (windowWidth - 32 - space * (count - 1)) / count;
  }
};


export const Bulletsqr = p => {
  return (
    <View
      style={{
        width: 11,
        height: 11,
        borderWidth: 1,
        borderColor: p.veg ? '#00E376' : '#FF7878',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: p.ml ? p.ml : 0,
        marginTop: p.mt ? p.mt : 0,
        marginBottom: p.mb ? p.mb : 0,
        marginRight: p.mr ? p.mr : 0,
      }}
    >
      <View
        style={{
          width: 6.6,
          height: 6.6,
          borderRadius: 100,
          backgroundColor: p.veg ? '#00E376' : '#FF7878',
        }}
      />
    </View>
  );
};

export const InTextwithbtn = p => {
  const r_otp = React.createRef();
  const t_focus = () => {
    r_otp.current.focus();
  };
  return (
    <View
      style={[
        {
          backgroundColor: p.bg === 'g' ? '#f7f7f7' : '#fff',
          height: 45,
          // paddingLeft: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 13,
          alignItems: 'center',
          width: p.wi ? p.wi : null,
          marginLeft: p.ml ? p.ml : 0,
          marginTop: p.mt ? p.mt : 0,
          marginBottom: p.mb ? p.mb : 0,
          marginRight: p.mr ? p.mr : 0,
          borderColor: p.err
            ? BGC
            : p.br
            ? BGC
            : p.bg === 'g'
            ? '#f7f7f7'
            : '#fff',
          borderWidth: 1,
        },
        p.style,
      ]}
    >
      {p.numberPhone && (
        <Txt mr={5}>
          +91
        </Txt>
      )}
      <Input
        value={p.value}
        focusable
        ref={r_otp}
        autoCapitalize={p.autoCapitalize ? p.autoCapitalize : null}
        inputContainerStyle={{
          borderBottomWidth: 1,
          margin: 0,
          padding: 0,
          height: 20,
          marginLeft: -10,
          lineHeight: 20,
        }}
        containerStyle={{flex: 1, margin: 0, padding: 0, height: 20}}
        inputStyle={[
          {
            fontSize: 14,
            padding: 0,
            margin: 0,
            fontFamily: 'Poppins-Regular',
            height: 20,
            paddingTop: 3,
          },
          p.input_style,
        ]}
        placeholder={p.placeholder}
        selectionColor={'#23A8E1'}
        maxLength={p.length ? p.length : null}
        placeholderTextColor="#B0B4BF"
        onChangeText={text => p.onChangeText(text)}
        autoFocus={p.autoFocus}
        blurOnSubmit={p.blurOnSubmit ? p.blurOnSubmit : null}
        disabled={p.disabled ? p.disabled : false}
        keyboardType={
          p.keyboard === 'phone'
            ? 'phone-pad'
            : p.keyboard === 'numeric'
            ? 'numeric'
            : 'default'
        }
        onSubmitEditing={p.onSubmitEditing ? p.onSubmitEditing : null}
        onBlur={p.onBlur ? p.onBlur : null}
      />

      {p.btn ? (
        <Tcho onPress={p.onSubmit} style={{padding: 12, paddingLeft: 0}}>
          {p.btn_text ? (
            <Txt {...p.btn_text_style} sty>
              {p.btn_text}
            </Txt>
          ) : null}
          {p.icon === 'lens' ? (
            <View style={{paddingHorizontal: 5}}>
              <Lensbsvg style={{color: '#B0B4BF'}} />
            </View>
          ) : null}
        </Tcho>
      ) : null}
    </View>
  );
};
export const Btn = p => {
  if (p.shadow) {
    return (
      <Shadow_box height={p.hi} mt={p.mt} ml={p.ml}>
        {p.loading ? (
          <ActivityIndicator />
        ) : (
          <Tcho
            press_dasabled={p.disabled}
            aco={0.8}
            onPress={p.onPress}
            style={{
              backgroundColor: p.bg ? p.bg : '#fff',
              borderRadius: 13,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              height: p.hi ? p.hi : 64,
              width: p.wi ? p.wi : null,
              marginBottom: p.mb ? p.mb : 0,
              marginRight: p.mr ? p.mr : 0,
            }}
          >
            {p.icon ? (
              <Icon_box
                style={{
                  marginRight: 3,
                  marginLeft: p.icon_left ? p.icon_left : 0,
                }}
              >
                {p.icon_color ? (
                  <p.icon style={{color: p.icon_color}} />
                ) : (
                  <p.icon />
                )}
              </Icon_box>
            ) : null}
            <Txt {...p.txt_style}>{p.title}</Txt>
          </Tcho>
        )}
      </Shadow_box>
    );
  } else {
    return (
      <Tcho
        press_dasabled={p.loading ? true : p.disabled}
        aco={0.8}
        onPress={p.onPress}
        style={[
          {
            backgroundColor: p.bg ? p.bg : '#fff',
            borderRadius: 13,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            height: p.hi ? p.hi : 64,
            width: p.wi ? p.wi : null,
            marginLeft: p.ml ? p.ml : 0,
            marginTop: p.mt ? p.mt : 0,
            marginBottom: p.mb ? p.mb : 0,
            marginRight: p.mr ? p.mr : 0,
          },
          p.style,
        ]}
      >
        {p.loading ? (
          <ActivityIndicator
            size="large"
            color={p.bg === CQATAR_RED ? FOODMINE_RED : CQATAR_RED}
          />
        ) : (
          <>
            {p.icon ? (
              <Icon_box
                style={{
                  marginRight: 3,
                  marginLeft: p.icon_left ? p.icon_left : 0,
                }}
              >
                {p.icon_color ? (
                  <p.icon style={{color: p.icon_color}} />
                ) : (
                  <p.icon />
                )}
              </Icon_box>
            ) : null}
            <Txt {...p.txt_style}>{p.title}</Txt>
          </>
        )}
      </Tcho>
    );
  }
};

export const RadioBtn = p => {
  return (
    <View
      style={{
        width: p.size ? p.size : 20,
        height: p.size ? p.size : 20,
        backgroundColor: '#fff',
        borderWidth: p.active ? 6 : 2,
        borderColor: p.active ? FOODMINE_RED : '#E8E5E5',
        borderRadius: 100,
        marginLeft: p.ml ? p.ml : 0,
        marginTop: p.mt ? p.mt : 0,
        marginBottom: p.mb ? p.mb : 0,
        marginRight: p.mr ? p.mr : 0,
      }}
    />
  );
};

export const Picker_btn = p => {
  return (
    <Shadow_box height={p.hi ? p.hi : 55} mt={p.mt ? p.mt : 0}>
      <Tcho
        press_dasabled={p.dis}
        onPress={p.onPress}
        style={[
          {
            flexDirection: 'row',
            paddingHorizontal: 10,
            borderRadius: 13,
            backgroundColor: p.color === 'g' ? '#F0F2F5' : '#EFEFEF',
            borderWidth: 1,
            borderColor: p.err ? CRED : p.color === 'g' ? '#F0F2F5' : '#fff',
            height: p.hi ? p.hi : 46,
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          p.style,
        ]}
      >
        {p.left_icon ? (
          <Icon_box size={16} mr={12}>
            <p.left_icon
              style={{color: FOODMINE_RED}}
              width={p.left_icon_width}
            />
          </Icon_box>
        ) : null}
        <Txt
          ellipsizeMode="tail"
          lines={2}
          c={p.value ? 'b' : 'g'}
          style={{marginRight: 8, flex: 1}}
        >
          {p.value ? p.value : p.picker_title}
        </Txt>
        <Icon_box>
          <Downarrowsvg />
        </Icon_box>
      </Tcho>
    </Shadow_box>
  );
};

export const Add_btn = p => {
  return (
    <View
      style={{
        borderRadius: 100,
        width: 32,
        height: 32,
        borderColor: CORANGE,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: p.ml ? p.ml : 0,
        marginTop: p.mt ? p.mt : 0,
        marginBottom: p.mb ? p.mb : 0,
        marginRight: p.mr ? p.mr : 0,
      }}
    >
      <Txt c="o" s={20} w={300} lh={30} mb={-3}>
        +
      </Txt>
    </View>
  );
};

export const Loading = p => {
  if (p.top) {
    return (
      <View
        style={[
          {
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            position: 'absolute',
            height: windowHeight + STATUS_BAR_HIGHT,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            elevation: 6,
          },
          p.style,
        ]}
      >
        <ActivityIndicator size="large" color={FOODMINE_RED} />
      </View>
    );
  } else {
    return (
      <View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: p.bg ? p.bg : null,
          },
          p.style,
        ]}
      >
        <ActivityIndicator size="large" color={FOODMINE_RED} />
      </View>
    );
  }
};

export const get_date_time = (date, type) => {
  return Moment(date).format(type);
};


export const Alert_msg = p => {
  const [change_text, setChange] = useState(
    `Your cart contains items from ${p.old_shop}. Do you want to discard the selection and add items from ${p.new_shop}?`,
  );

  useEffect(() => {
    if (p.old_shop === p.new_shop) {
      setChange(
        `Your cart contains items from ${p.old_shop}. Do you want to discard the selection and reorder?`,
      );
    } else {
      setChange(
        `Your cart contains items from ${p.old_shop}. Do you want to discard the selection and add items from ${p.new_shop}?`,
      );
    }
  }, [p.new_shop, p.old_shop]);
  return (
    <Modal statusBarTranslucent transparent visible={p.visible}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          flex: 1,
          width: windowWidth,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            backgroundColor: CWHITE,
            padding: 16,
            borderRadius: 13,
            width: '100%',
          }}
        >
          {p.alert ? null : (
            <Txt c="q" w={600} mt={16} s={16}>
              {p.type === 'chenage_shop' ? 'Replace cart item?' : p.title}
            </Txt>
          )}
          <Txt c={p.alert ? 'b' : 'g'} mt={6}>
            {p.type === 'chenage_shop' ? change_text : p.msg}
          </Txt>

          <View style={{flexDirection: 'row', marginTop: 16}}>
            {p.alert || p.hide_btn1 ? null : (
              <Btn
                onPress={p.onBtn1}
                title={p.btn1}
                bg="#E8E5E5"
                style={{flex: 1}}
                txt_style={{c: 'fb', w: 600, s: 16}}
                hi={50}
                mr={4}
              />
            )}

            <Btn
              onPress={p.onBtn2}
              title={p.alert ? 'OK' : p.btn2}
              bg={FOODMINE_RED}
              loading={p.btn2_loading}
              style={{flex: 1}}
              ml={p.alert || p.hide_btn1 ? 0 : 4}
              txt_style={{c: 'w', w: 600, s: 16}}
              hi={50}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const InfoModal = p => {
  return(
    <Modal
    statusBarTranslucent transparent visible={p.visible}
    animationType={ p.anim ? p.anim : "fade"}
    >
      <Txt>{p.txt}</Txt>
    </Modal>
  )
}

export const Goto_web = async url => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  }
};

export const Get_percentage = (value, percentage) => {
  return Math.round((Number(value) * Number(percentage)) / 100);
};

export const Check_Loc_Permission = cb => {
  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    .then(result => {
      const Ask_permission = () => {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
          console.log('result:');
          console.log(result);
          if (result === 'granted') {
            cb(true);
          } else {
            cb(false);
          }
        });
      };

      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          cb(false, false);
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          Ask_permission();
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          cb(true, true);
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          cb(true, true);

          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          Ask_permission();
          break;
      }
    })
    .catch(error => {
      // …
      console.log('per mission error');
      console.log(error);
    });
};
// marginLeft:p.ml?p.ml:0,marginTop:p.mt?p.mt:0,marginBottom:p.mb?p.mb:0,marginRight:p.mr?p.mr:0

// export const Goto_web = async (url) =>{
//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       await Linking.openURL(url);
//     }
//   }
export const getAddressIcon = type => {
  switch (type) {
    case 'Work':
      return <MaterialIcons size={20} color={FRED} name="work" />;
    case 'Home':
      return <MaterialIcons size={22} color={FRED} name="home-filled" />;
    case 'Other':
      return (
        <MaterialCommunityIcons size={22} color={FRED} name="office-building" />
      );
    default:
      return <Locationosvg style={{color: FRED}} />;
  }
};
