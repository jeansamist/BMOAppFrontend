import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import UserHeader from '../components/UserHeader.jsx';
import { APP } from './../helpers/data';
import goto from '../functions/goto.js';

function ListItem({ icoName, label, items = [{name: 'T-Shirt', }] }) {
  return <Shadow startColor={'#00000010'} viewStyle={{width: '100%', marginBottom: 20}} radius={10}>
    <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 9, alignItems: 'center', backgroundColor: '#fff', borderRadius: 10}}>
      <Text>The 07 / 02 / 2022</Text>
      <View>
        <View></View>
      </View>
    </View>
  </Shadow>
}

export default function CommandsScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  return (
    <>
      <SafeAreaView style={{ minHeight: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
          <View>
            <UserHeader title='Commands' navigation={navigation} />
          </View>
          <View style={{ marginTop: -130}}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', height: 210}}>
              <Shadow radius={200}>
                <Image source={require('./../assets/images/draw02.png')} style={{ width: 200, height: 200, borderRadius: 200}} />
              </Shadow>
            </View>
            <View>
              <Text style={{ fontFamily: 'Poppins_700Bold', color: APP.primary, fontSize: 35, marginBottom: 20, textAlign: 'center' }}>John</Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor={APP.primary} />
    </>
  )
}