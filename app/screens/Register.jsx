import React from 'react'
import { VStack, Divider, KeyboardAvoidingView } from 'native-base'
import { Inputs } from '../components/Register/Inputs'
import { HeaderRegister } from '../components/Register/HeaderRegister'
import { ButtonRegister } from '../components/Register/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const SignupSchema = yup.object().shape({
  name: yup.string().required('Campo Obrigatório'),
  dob: yup.date().required('Campo Obrigatório'),
  email: yup.string().required('Email Obrigatório'),
  password: yup.string().required('Senha Obrigatória'),
  passwordConfirmation: yup
    .string()
    .required('As senhas não conferem')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
})

export const Register = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })
  return (
    <VStack backgroundColor={'#24253c'} width={'100%'} height={'100%'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={'position'} enabled>
          <HeaderRegister />
          <Divider backgroundColor={'#9BC2F7'} />
          <VStack alignItems={'center'}>
            <Inputs control={control} register={register} errors={errors} />
            <ButtonRegister handleSubmit={handleSubmit} />
          </VStack>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </VStack>
  )
}