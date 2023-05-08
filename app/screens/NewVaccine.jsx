import React from 'react'
import { HeaderNewVaccine } from '../components/Home/NewVaccine/HeaderNewVaccine'
import { Box } from 'native-base'
import { InputsNewVaccine } from '../components/Home/NewVaccine/InputsNewVaccine'

export const NewVaccine = ({navigation}) => {
  return (
    <Box width={'100%'} flex={1} backgroundColor={'backgroundColor.primary'}>
    <HeaderNewVaccine navigation={navigation}/> 
    <InputsNewVaccine/>
    </Box>
  )
}

