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
  dateOfBirth: yup
    .string()
    .max(new Date(), 'Data inválida')
    .required(),
  email: yup.string().required('Email Obrigatório'),
  password: yup.string().required('Senha Obrigatória'),
  passwordConfirmation: yup
    .string()
    .required('Senha Obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
})

export const Register = ({ navigation }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  })
  return (
    <VStack flex={1} backgroundColor={'backgroundColor.primary'}  width={'100%'} height={'100%'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={'position'} enabled>
          <HeaderRegister navigation={navigation} />
          <Divider backgroundColor={'backgroundColor.primary'} />
          <VStack alignItems={'center'}>
            <Inputs control={control} register={register} errors={errors} />
            <ButtonRegister
              handleSubmit={handleSubmit}
              navigation={navigation}
            />
          </VStack>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </VStack>
  )
}
