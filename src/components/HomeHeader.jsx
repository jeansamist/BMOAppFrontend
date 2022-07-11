import { Poppins_400Regular, Poppins_700Bold, Poppins_700Bold_Italic, useFonts } from '@expo-google-fonts/poppins';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import goto from '../functions/goto';
import { APP } from './../helpers/data';
export default function HomeHeader({ navigation = () => {}}) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_700Bold_Italic,
  });
  return (
    <View style={{ height: 250, backgroundColor: APP.primary, borderBottomEndRadius: 50, borderBottomLeftRadius: 50}}>
      <View style={{ marginTop: 50, marginBottom: 20,paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{ fontFamily: 'Poppins_700Bold', color: "#fff", fontSize: 30 }}>Home</Text>
        <TouchableOpacity onPress={() => goto(navigation, 'userScreen')}>
          <Image source={require('./../assets/images/draw02.png')} style={{ width: 50, height: 50, borderRadius: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{  marginBottom: 20, paddingHorizontal: 25}}>
        <Text style={{ fontFamily: 'Poppins_400Regular', color: "#fff", fontSize: 10 }}>Good Evening John !</Text>
        <Text style={{ fontFamily: 'Poppins_700Bold_Italic', color: "#fff", fontSize: 15 }}>Discover the best products now !</Text>
      </View>
    </View>
  )
}