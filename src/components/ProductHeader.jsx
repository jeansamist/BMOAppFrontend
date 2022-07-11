import { Poppins_400Regular, Poppins_700Bold, Poppins_700Bold_Italic, useFonts } from '@expo-google-fonts/poppins';
import { Image, TouchableOpacity, View } from 'react-native';
import FeatherIcon from "react-native-vector-icons/Feather";
import { APP } from './../helpers/data';
export default function ProductHeader({navigation = () => {}, params}) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_700Bold_Italic,
  });
  return (
    <View style={{ height: 535, backgroundColor: APP.primary, borderBottomEndRadius: 50, borderBottomLeftRadius: 50, paddingTop: 50}}>
      <View style={{paddingLeft: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 40, height: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
          <FeatherIcon size={25} color={APP.primary} name='chevron-left' />
        </TouchableOpacity>
      </View>
      <View style={{ width: '90%', marginHorizontal: '5%', marginTop: 20, height: 400}}>
        <Image source={{uri: params.cover }} style={{ width: '100%', height: '100%', borderRadius: 50}} />
      </View>
    </View>
  )
}