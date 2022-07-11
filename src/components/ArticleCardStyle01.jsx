import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import goto from '../functions/goto';
import { APP } from '../helpers/data';

export default function ArticleCardStyle01({ articleId = 0, navigation = () => {} }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  const [data, setdata] = useState(null)
  useEffect(() => {
    setdata({
      cover: 'https://st.depositphotos.com/1017986/2626/i/600/depositphotos_26263587-stock-photo-man-in-blank-t-shirt.jpg',
      name: 'T-Shirt',
      category: 'Dress Men',
      price: 48
    })
  }, [])
  
  if (data === null) {
    return (<View style></View>)
  }
  return (
    <Shadow distance={10} startColor={'#00000010'} viewStyle={{width: 200, height: 359}} containerViewStyle={{marginHorizontal: 10, borderRadius: 20}} radius={20}>
      <View style={{ width: 200, height: 362, backgroundColor: '#fff', borderRadius: 20}}>
        <View style={{ width: '100%', height: 250 }}>
          <Image source={{ uri: data.cover }} resizeMode='cover'  style={{width: "100%", height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
        </View>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20}}>
          <Text style={{ fontFamily: 'Poppins_400Regular', color: APP.primary, fontSize: 10 }}>{data.category}</Text>
          <Text style={{ fontFamily: 'Poppins_700Bold', color: "#333", fontSize: 18 }}>{data.name}</Text>
        </View>
        <View style={{ paddingLeft: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 20 }}>${data.price}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => goto(navigation, 'productScreen', data)} style={{width: 40, height: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderTopStartRadius: 20, borderBottomRightRadius: 20}}>
              <MaterialIcon size={17} color="#fff" name='launch' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Shadow>
  )
}