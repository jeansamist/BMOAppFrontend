import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { setBackgroundColorAsync, setButtonStyleAsync } from 'expo-navigation-bar';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import FadeInView from '../components/FadeInView';
import Button from '../components/form/Button';
import goto from '../functions/goto';
export default function WelcomeScreen({ navigation }) {
  
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
            <View style={{ marginTop: 100, marginBottom: 50 }} >
              <Image source={require('./../assets/images/draw01.png')} resizeMode='contain' style={{ width: '100%', height: 250}} />
            </View>
          </FadeInView>
          <View>
            <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 30, textAlign: 'center' }}>Welcomes to <Text style={{ color: "#e3681a" }}>BMO</Text></Text>
            <Text style={{ fontFamily: 'Poppins_400Regular', textAlign: 'center', padding: 15, lineHeight: 25 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veniam magnam hic nulla, consequatur accusamus. Veritatis harum quos quae facilis, voluptas sequi beatae libero. Animi praesentium quod cupiditate! Harum, sint.
            </Text>
          </View>
          <View style={{ width: '90%', marginHorizontal: '5%', marginTop: 20}}>
            <Button label='Go it now' onPress={() => goto(navigation, 'registerScreen')} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='dark' backgroundColor='#fff' />
    </>
  )
}