import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import ArticleCardStyle01 from '../components/ArticleCardStyle01';
import ArticleCardStyle02 from '../components/ArticleCardStyle02';
import HomeHeader from '../components/HomeHeader';
import goto from '../functions/goto';
import { APP } from './../helpers/data';

export default function HomeScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  return (
    <>
      <SafeAreaView style={{ minHeight: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
          <View>
            <HomeHeader navigation={navigation} />
          </View>
          <View style={{ marginTop: -60}}>
            <View>
              <ScrollView style={{ flexDirection: 'row', height: 390}} contentContainerStyle={{alignItems: 'center'}} horizontal={true}>
                {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste earum consequatur at, vel debitis optio fugit qui sed commodi excepturi mollitia, omnis error, repellendus ut voluptates aut in a deleniti?</Text> */}
                <ArticleCardStyle01 navigation={navigation} />
                <ArticleCardStyle01 navigation={navigation} />
                <ArticleCardStyle01 navigation={navigation} />
                <ArticleCardStyle01 navigation={navigation} />
                <ArticleCardStyle01 navigation={navigation} />
              </ScrollView>
            </View>
            <View style={{ paddingTop: 40 }}>
              <Text style={{ fontFamily: 'Poppins_700Bold', color: "#000", fontSize: 25, marginBottom: 20, paddingHorizontal: 20 }}>Dresses</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ArticleCardStyle02 navigation={navigation} />
                <ArticleCardStyle02 navigation={navigation} />
                <ArticleCardStyle02 navigation={navigation} />
                <ArticleCardStyle02 navigation={navigation} />
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => goto(navigation, 'basketScreen')} style={{ width: 65, height: 65, backgroundColor: APP.primary, justifyContent: 'center', alignItems: 'center', borderRadius: 50, position: 'absolute', bottom: 20, right: 20}}>
          <MaterialIcon size={25} color="#fff" name='shopping-cart' />
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar style='light' backgroundColor={APP.primary} />
    </>
  )
}
