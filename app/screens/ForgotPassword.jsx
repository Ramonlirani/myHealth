import { VStack } from 'native-base'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import React from 'react'
import { InputsForgot } from '../components/ForgotPassword/InputsForgot'
import { HeaderForgot } from '../components/ForgotPassword/HeaderForgot'

      const ForgotPassSchema = yup.object().shape({
        email: yup.string().required('Email Obrigatório'),      
      })

export const ForgotPassword = ({navigation}) => {
    const onSubmit = (data) => {
        console.log(data)
        navigation.navigate('Login')
      }

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(ForgotPassSchema),
      })


  return (
    <>
        <HeaderForgot/>
    <VStack  height={'100%'} justifyContent={'center'} alignItems={'center'} backgroundColor={'backgroundColor.primary'} >
        <InputsForgot control={control} register={register} handleSubmit={handleSubmit} errors={errors} navigation={navigation}/>
    </VStack>
    </>
  )
}


