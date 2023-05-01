import {
  FormControl,
  Input,
  Box,
  Text,
  View,
  Pressable,
} from 'native-base'
import { RadioRegister } from './RadioRegister'
import { Controller } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { MaterialIcons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import moment from 'moment'

export const Inputs = ({ control, register, errors }) => {
  const [date, dateSet] = useState(new Date())
  const [datePicker, datePickerSet] = useState(false)

  const handleDateChange = (event, selectedDate) => {
    datePickerSet(false)
    dateSet(selectedDate)
  }

  const dateFormat = moment(date).format('DD/MM/YYYY')

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
            backgroundColor={'#fff'}
            _focus={{ bg: '#fff', borderColor: '#00D7DF' }}
            onChangeText={onChange}
            value={value}
            color={'black'}
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
      <Text color={'gray.500'} fontWeight="bold" paddingBottom={2}>
        Data de Nascimento
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Pressable onPress={() => datePickerSet(true)} className={'dob'}>
            <Box
              borderWidth={1}
              height={12}
              minHeight={14}
              borderColor={'gray.300'}
              flexDirection={'row'}
              width={'100%'}
              borderRadius={4}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {datePicker && (
                <DateTimePicker
                  mode={'date'}
                  value={date}
                  is24Hour={true}
                  dateFormat="day month year"
                  onChange={handleDateChange}
                  maximumDate={new Date()}
                />
              )}
              <Text flex={1} paddingLeft={3} color={'black'}>
                {dateFormat}
              </Text>
              <MaterialIcons
                name="calendar-today"
                size={22}
                color="black"
                paddingRight={6}
              />
            </Box>
          </Pressable>
        )}
        name="dateOfBirth"
        defaultValue={new Date()}
        rules={{ required: true }}
      />
      <ErrorMessage
        errors={errors}
        name="dateOfBirth"
        render={({ message }) => <Text>{message}</Text>}
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
            backgroundColor={'#fff'}
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
            backgroundColor={'#fff'}
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
            backgroundColor={'#fff'}
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
