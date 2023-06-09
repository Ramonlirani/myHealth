import { FormControl, Input, Box, Text, View, Pressable } from 'native-base';
import { RadioRegister } from './RadioRegister';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import moment from 'moment';

export const Inputs = ({ control, register, errors }) => {
  
  return (
    <View mt="5">
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
        <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5}>
          <Text color={'white'} marginRight={3}>
            Nome Completo
          </Text>
        </Box>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              w={'62%'}
              h={'8'}
              borderRadius={0}
              backgroundColor={'#fff'}
              borderColor={'white'}
              onChangeText={onChange}
              value={value}
              color={'primary.color'}
              {...register('name')}
            />
          )}
          name="name"
        />
      </Box>
      <Box alignItems={'flex-end'} justifyContent={'flex-end'}>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <Text marginRight={12} style={{ color: 'red' }}>
              {message}
            </Text>
          )}
        />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
        <RadioRegister />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Text color={'white'} marginRight={2}>
          Data de Nascimento
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              w={'40%'}
              h={'8'}
              marginLeft={1}
              borderRadius={0}
              backgroundColor={'#fff'}
              borderColor={'white'}
              color={'primary.color'}
              onChangeText={onChange}
              value={value}
              {...register('dateOfBirth')}
              placeholder='DD/MM/AAAA'
              InputRightElement={<MaterialIcons name='calendar-today' size={17} marginRight={10} color="#B0CCDE"/>}
            />
          )}
          name="dateOfBirth"          
        />
      </Box>
      <Box justifyContent={'flex-end'} alignItems={'flex-end'} marginRight={12}>
        <ErrorMessage
          errors={errors}
          name="dateOfBirth"
          render={({ message }) => (
            <Text marginRight={12} style={{ color: 'red' }}>
              {message}
            </Text>
          )}
        />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} paddingTop={5}>
        <Text color={'white'} marginRight={3}>
          E-mail
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              w={'62%'}
              height={'8'}
              backgroundColor={'#fff'}
              borderRadius={0}
              borderColor={'white'}
              onChangeText={onChange}
              value={value}
              color={'primary.color'}
              {...register('email')}
            />
          )}
          name="email"
        />
      </Box>
      <Box alignItems={'flex-end'} justifyContent={'flex-end'}>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <Text marginRight={12} style={{ color: 'red' }}>
              {message}
            </Text>
          )}
        />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} paddingTop={5}>
        <Text color={'white'} marginRight={3}>
          Senha
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              width={'62%'}
              height={'8'}
              backgroundColor={'#fff'}
              borderRadius={0}
              borderColor={'white'}
              onChangeText={onChange}
              value={value}
              color={'primary.color'}
              {...register('password')}
            />
          )}
          name="password"
        />
      </Box>
      <Box alignItems={'flex-end'} justifyContent={'flex-end'}>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <Text marginRight={12} style={{ color: 'red' }}>
              {message}
            </Text>
          )}
        />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} paddingTop={5}>
        <Text color={'white'} marginRight={3}>
          Repetir senha
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              width={'62%'}
              height={'8'}
              backgroundColor={'#fff'}
              onChangeText={onChange}
              value={value}
              color={'primary.color'}
              {...register('passwordConfirmation')}
            />
          )}
          name={'passwordConfirmation'}
        />
      </Box>
      <Box alignItems={'flex-end'} justifyContent={'flex-end'}>
        <ErrorMessage
          errors={errors}
          name="passwordConfirmation"
          render={({ message }) => (
            <Text marginRight={5} style={{ color: 'red' }}>
              {message}
            </Text>
          )}
        />
      </Box>
    </View>
  );
};
