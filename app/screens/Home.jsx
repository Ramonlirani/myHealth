import React ,{ useState } from 'react'
import {  FlatList, Text, VStack, View } from 'native-base'
import { HeaderHome } from '../components/Home/HeaderHome'
import { SearchBarHome } from '../components/Home/SearchBarHome'
import { CardVaccine } from '../components/Home/CardVaccine'
import { ButtonNewVaccine } from '../components/Home/Button'
// import { vaccineList } from '../utils/Vaccine'
import { v4 as uuidv4 } from 'uuid';
import { CardVaccine2 } from '../components/Home/CardVaccine2'
import { DeviceEventEmitter } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NewVaccine } from './NewVaccine'

const Stack = createNativeStackNavigator()


export const Home = ({ navigation }) => {
  const [vaccineList, setVaccineList] = useState([]);
  console.log(vaccineList);

  DeviceEventEmitter.addListener('event.addVaccine', (item) => {
    const newVaccine = { id: uuidv4(), ...item };
    setVaccineList((currentList) => {
      return  [...currentList, newVaccine];
    });
  } )

  return (
    <>
     <Stack.Navigator>
      <Stack.Screen name="NewVaccine" component={NewVaccine} options={{ headerShown: false }} />
     </Stack.Navigator>
      <HeaderHome navigation={navigation}/>
      <VStack
        backgroundColor={'backgroundColor.primary'}
        width={'100%'}
        flex={1}
        alignItems={'center'}
      >
        <SearchBarHome />
        <FlatList data={vaccineList}  renderItem={({item}) => <CardVaccine item={item} />} keyExtractor={item => item.id} />
       <ButtonNewVaccine navigation={navigation} />
      </VStack>
    </>
  )
}
