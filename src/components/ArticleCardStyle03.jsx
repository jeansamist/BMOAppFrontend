import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import goto from '../functions/goto';
import { APP } from '../helpers/data';

export default function ArticleCardStyle03({ articleId = 0, navigation = () => {} }) {
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
    return (<View></View>)
  }
  return (<Shadow distance={5} startColor={'#00000010'} viewStyle={{width: "100%"}} containerViewStyle={{marginHorizontal: '5%', marginBottom: 20}} radius={20}>
      <View style={{backgroundColor: '#fff', height: 170, flexDirection: 'row', borderRadius: 20, padding: 10, }}>
    <TouchableOpacity  onPress={() => goto(navigation, 'productScreen', data)} style={{width: 125, height: 150, justifyContent: 'center', alignItems: 'center', borderTopStartRadius: 20, borderBottomRightRadius: 20, marginRight: 10}}>
      <Image source={{ uri: data.cover }} resizeMode='cover'  style={{width: "100%", height: '100%', borderRadius: 20}} />
    </TouchableOpacity>
    <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingVertical: 10}}>
      <Text style={{ fontFamily: 'Poppins_400Regular', color: APP.primary, fontSize: 10 }}>{data.category}</Text>
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 20 }}>{data.name}</Text>
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 20 }}><Text style={{ fontFamily: 'Poppins_400Regular', color: APP.primary,}}>$</Text>{data.price}</Text>
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 15 }}>Quantity:<Text style={{ fontFamily: 'Poppins_400Regular', color: APP.primary,}}>48</Text></Text>
    </View>
  </View>
  </Shadow>)
}

