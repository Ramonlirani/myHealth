import * as React from 'react'
import {  VStack } from 'native-base'
import { HeaderHome } from '../components/Home/HeaderHome'
import { SearchBarHome } from '../components/Home/SearchBarHome'
import { CardVaccine } from '../components/Home/CardVaccine'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { ButtonNewVaccine } from '../components/Home/Button'

export const Home = ({ navigation }) => {

  
  return (
    <>
      <HeaderHome />
      <VStack
        backgroundColor={'white'}
        width={'100%'}
        height={'100%'}
        alignItems={'center'}
      >
        <SearchBarHome />
        <CardVaccine />
       <ButtonNewVaccine navigation={navigation} />
      </VStack>
    </>
  )
}
