import * as React from 'react'
import {  FlatList, VStack } from 'native-base'
import { HeaderHome } from '../components/Home/HeaderHome'
import { SearchBarHome } from '../components/Home/SearchBarHome'
import { CardVaccine } from '../components/Home/CardVaccine'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ButtonNewVaccine } from '../components/Home/Button'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { vaccineList } from '../utils/Vaccine'

const Drawer = createDrawerNavigator();


export const Home = ({ navigation }) => {
  //substituir o vaccinelist por um estado para controlar os inputs
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
        <FlatList data={vaccineList} renderItem={CardVaccine} keyExtractor={item => item.id} />
       <ButtonNewVaccine navigation={navigation} />
      </VStack>
    </>
  )
}
