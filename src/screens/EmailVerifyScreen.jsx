import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { setBackgroundColorAsync, setButtonStyleAsync } from 'expo-navigation-bar';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FadeInView from '../components/FadeInView';
import Button from '../components/form/Button';
import Field from '../components/form/Field';
import goto from '../functions/goto';
import { APP } from '../helpers/data';


export default function EmailVerifyScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  useEffect(async () => {
    await setBackgroundColorAsync('white')
    await setButtonStyleAsync('dark')
  }, [])
  return (
    <>
      <SafeAreaView style={{ minHeight: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
          <FadeInView duration={1000}>
            <View style={{ marginTop: 100, marginBottom: 20 }} >
              <Image source={require('./../assets/images/draw05.png')} resizeMode='contain' style={{ width: '100%', height: 200}} />
            </View>
          </FadeInView>
          <View>
            <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 30, textAlign: 'center' }}>Check your mail</Text>
            <View  style={{ width: '90%', marginHorizontal: '5%', marginTop: 20}}>
              <Field label='Code - 4 lenght' icoName='lock' type='number' />
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ fontFamily: 'Poppins_400Regular', color: APP.border2, fontSize: 15, }}>You have an accounts ?{" "}</Text>
                <TouchableOpacity onPress={() => goto(navigation, 'loginScreen')}>
                  <View>
                    <Text style={{ color: APP.primary, fontFamily: 'Poppins_400Regular', }}>Log in</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={{ fontFamily: 'Poppins_400Regular', color: APP.border2, fontSize: 15, }}>I don't receive a mail. <Text style={{ color: "#e3681a" }}>Resend</Text></Text>
            </View>
          </View>
          <View style={{ width: '90%', marginHorizontal: '5%', marginTop: 20}}>
            <Button onPress={() => goto(navigation, 'app')} label='Finish' />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='dark' backgroundColor='#fff' />
    </>
  )
}