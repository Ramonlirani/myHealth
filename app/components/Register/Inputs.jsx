import { VStack, FormControl, Input, Box, Text, View } from 'native-base'
import { RadioRegister } from './RadioRegister'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export const Inputs = ({ control, register, errors }) => {
  return (
    <View mt="5">
      <FormControl.Label>Nome Completo</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            backgroundColor={'#24253c'}
            _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
            onChangeText={onChange}
            value={value}
            color={'white'}
            {...register('name')}
          />
        )}
        name="name"
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <Text>{message}</Text>}
      />
      <Box>
        <RadioRegister />
      </Box>
      <FormControl.Label>Data de nascimento</FormControl.Label>
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
        backgroundColor={'#24253c'}
        _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
      />

      <FormControl.Label>E-mail</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            backgroundColor={'#24253c'}
            _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
            onChangeText={onChange}
            value={value}
            color={'white'}
            {...register('email')}
          />
        )}
        name="email"
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => <Text>{message}</Text>}
      />
      <FormControl.Label>Senha</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            backgroundColor={'#24253c'}
            _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
            onChangeText={onChange}
            value={value}
            color={'white'}
            {...register('password')}
          />
        )}
        name="password"
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => <Text>{message}</Text>}
      />
      <FormControl.Label>Repetir senha</FormControl.Label>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            w={{
              base: '75%',
              md: '25%',
            }}
            backgroundColor={'#24253c'}
            _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
            onChangeText={onChange}
            value={value}
            color={'white'}
            {...register('passwordConfirmation')}
          />
        )}
        name={'passwordConfirmation'}
      />
      <ErrorMessage
        errors={errors}
        name="passwordConfirmation"
        render={({ message }) => <Text>{message}</Text>}
      />
    </View>
  )
}
