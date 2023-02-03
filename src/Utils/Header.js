import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = p => {
  return (
    <TouchableOpacity 
        onPress={p.onPress}
        disabled={p.press_dasabled ? p.press_dasabled : false}
        onLayout={p.onLayout}
        activeOpacity={p.aco ? p.aco : 0.6}
        style={[
          {
            width: p.wd ? p.wd : 30,
            height: p.ht ? p.ht : 30,
            backgroundColor: p.bg ? p.bg : null,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: p.cntr == "cntr" ? "center" : null,
            borderRadius: p.br ? p.br : 0,
            marginTop: p.mt ? p.mt : 0,
            marginLeft: p.ml ? p.ml : 0,
            marginBottom: p.mb ? p.mb : 0,
            marginRight: p.mr ? p.mr : 0,
            padding: p.pd ? p.pd : 0,
            margin: p.mr ? p.mr : 0
          },
          p.style,
        ]}
    >
        <MaterialIcons 
        size={p.iconsize ? p.iconsize : 22} color={p.ic ? p.ic : "#000"} name= {p.iconname ? p.iconname : "arrow-back"} />
    </TouchableOpacity>
  )
}
