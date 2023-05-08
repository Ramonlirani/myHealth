import React, { useState} from 'react'
import { HeaderNewVaccine } from '../components/Home/NewVaccine/HeaderNewVaccine'
import { Box } from 'native-base'
import { InputsNewVaccine } from '../components/Home/NewVaccine/InputsNewVaccine'
import { ButtonRegisterNew } from '../components/Home/NewVaccine/ButtonRegisterNew'
import { useForm } from "react-hook-form";

export const NewVaccine = ({navigation,route}) => {

const { control, handleSubmit, register,formState: { errors } } = useForm();
  
const onSubmit = (data) => {
  console.log(data);
  route.params.handleAddVaccine(data);
  navigation.navigate('Home');
}

  return (
    <Box width={'100%'} flex={1} backgroundColor={'backgroundColor.primary'}>
    <HeaderNewVaccine navigation={navigation}/> 
    <InputsNewVaccine control={control} errors={errors} register={register} />
    <ButtonRegisterNew navigation={navigation} handleSubmit={handleSubmit(onSubmit)} />
    </Box>
  )
}

