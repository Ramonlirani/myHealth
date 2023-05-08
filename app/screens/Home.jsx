import React ,{ useState } from 'react'
import {  FlatList, Text, VStack, View } from 'native-base'
import { HeaderHome } from '../components/Home/HeaderHome'
import { SearchBarHome } from '../components/Home/SearchBarHome'
import { CardVaccine } from '../components/Home/CardVaccine'
import { ButtonNewVaccine } from '../components/Home/Button'
// import { vaccineList } from '../utils/Vaccine'
import { v4 as uuidv4 } from 'uuid';
import { CardVaccine2 } from '../components/Home/CardVaccine2'


export const Home = ({ navigation }) => {
  const [vaccineList, setVaccineList] = useState([]);
  const addVaccine = (item) => {
  const newVaccine = { id: uuidv4(), ...item };
  const newList = [...vaccineList, newVaccine];
  console.log('newList',newList);
  setVaccineList(newList);
}

const handleAddVaccine = (data) => {
  addVaccine(data);
};
  return (
    <>
      <HeaderHome navigation={navigation}/>
      <VStack
        backgroundColor={'backgroundColor.primary'}
        width={'100%'}
        flex={1}
        alignItems={'center'}
      >
        <SearchBarHome />
        <FlatList data={vaccineList}  renderItem={({item}) => <CardVaccine item={item} />} keyExtractor={item => item[0].id} />
       <ButtonNewVaccine navigation={navigation} handleAddVaccine={handleAddVaccine}  />
      </VStack>
    </>
  )
}
