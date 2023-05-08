import { Box, Button,   Input,  Text, VStack } from 'native-base'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import * as yup from 'yup'
import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

export const InputsForgot = ({navigation,control,errors, handleSubmit, register}) => {
    const onSubmit = (data) => {
        console.log(data)
        navigation.navigate('Login')
      }


  return (
    <>
      <Box flexDirection={'row'} >
      <Text paddingRight={3}  color={'white'}>E-mail</Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            borderRadius={0}
            w={'65%'}
            h={'10'}
            backgroundColor={'#fff'}
            onChangeText={onChange}
            value={value}
            color={'primary.color'}
            {...register('email')}
            />
            )}
            name="email"
            />
        </Box>
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <Text style={{color: 'red'}}>{message}</Text>}
        />
     <Button
        borderRadius={0}
        mt="10"
        width={'60%'}
        height={'10'}
        bgColor={'primary.button.success'}
        onPress={handleSubmit(onSubmit)}
      >
        <Text color={'white'} >
          Recuperar senha
        </Text>
      </Button>
    </>
  )
}


