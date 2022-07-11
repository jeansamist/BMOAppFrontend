import { Poppins_400Regular, Poppins_700Bold, Poppins_700Bold_Italic, useFonts } from '@expo-google-fonts/poppins';
import { Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from "react-native-vector-icons/Feather";
import { APP } from './../helpers/data';
export default function BasketHeader({navigation = () => {}}) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_700Bold_Italic,
  });
  return (
    <View style={{ height: 250, backgroundColor: APP.primary, borderBottomEndRadius: 50, borderBottomLeftRadius: 50}}>
      <View style={{ marginTop: 50, marginBottom: 20,paddingHorizontal: 25, flexDirection: 'row', alignItems: 'center'}}>
        
      <View style={{paddingRight: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 40, height: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
          <FeatherIcon size={25} color={APP.primary} name='chevron-left' />
        </TouchableOpacity>
      </View>
      <Text style={{ fontFamily: 'Poppins_700Bold', color: "#fff", fontSize: 25 }}>Your Basket</Text>
      </View>
      <View style={{  marginBottom: 20, paddingHorizontal: 25}}>
        <Text style={{ fontFamily: 'Poppins_400Regular', color: "#fff", fontSize: 10 }}>Thank you John !</Text>
        <Text style={{ fontFamily: 'Poppins_700Bold_Italic', color: "#fff", fontSize: 15 }}>Buy yours products now !</Text>
      </View>
    </View>
  )
}