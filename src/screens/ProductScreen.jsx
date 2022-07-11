import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ArticleCardStyle02 from '../components/ArticleCardStyle02';
import Button from '../components/form/Button';
import Field from '../components/form/Field';
import ProductHeader from '../components/ProductHeader';
import goto from '../functions/goto';
import { APP } from './../helpers/data';
export default function ProductScreen({ navigation, route }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  return (
    <>
      <SafeAreaView style={{ minHeight: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
          <View>
            <ProductHeader navigation={navigation} params={route.params} />
          </View>
          <View style={{ marginVertical: 20, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
              <Text style={{ fontFamily: 'Poppins_400Regular', color: APP.primary, fontSize: 15 }}>{route.params.category}</Text>
              <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 30 }}>{route.params.name}</Text>
            </View>
            <View>
              <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 30 }}>${route.params.price}</Text>
            </View>
          </View>
          <View>
            <Text style={{ fontFamily: 'Poppins_400Regular', textAlign: 'center', padding: 15, lineHeight: 25 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veniam magnam hic nulla, consequatur accusamus. Veritatis harum quos quae facilis, voluptas sequi beatae libero. Animi praesentium quod cupiditate! Harum, sint.
            </Text>
          </View>
          <View style={{ marginVertical: 20, paddingHorizontal: 20}}>
            <Field label='Quantity' type='numeric' icoName='add-shopping-cart' />
            <Button onPress={() => goto(navigation, 'basketScreen')} label='Add to cart' />
          </View>
            <View style={{ paddingTop: 40 }}>
              <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 25, marginBottom: 20, paddingHorizontal: 20 }}>In the same category</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ArticleCardStyle02 navigation={navigation} />
                <ArticleCardStyle02 navigation={navigation} />
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor={APP.primary} />
    </>
  )
}
