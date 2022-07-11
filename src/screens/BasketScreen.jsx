import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import ArticleCardStyle03 from '../components/ArticleCardStyle03';
import BasketHeader from '../components/BasketHeader.jsx';
import Button from '../components/form/Button';
import { APP } from './../helpers/data';

export default function BasketScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  return (
    <>
      <SafeAreaView style={{ minHeight: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
          <View>
            <BasketHeader navigation={navigation} />
          </View>
          <View style={{ marginTop: -60}}>
            <ArticleCardStyle03 navigation={navigation} />
          </View>
          <View style={{ padding: 20}}>
            <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 30, textAlign: 'center', marginBottom: 25 }}>Total is <Text style={{ color: APP.primary }}>$48</Text></Text>
            <Button label='Command Now' />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor={APP.primary} />
    </>
  )
}
