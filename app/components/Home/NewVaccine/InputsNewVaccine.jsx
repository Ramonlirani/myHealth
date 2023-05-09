import { Box, Input, Pressable, Text, View } from "native-base"
import { MaterialIcons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import moment from 'moment'
import { RadioDose } from "./RadioDose"
import { ImagePickerButton } from "./ImagePickerButton"
import { ButtonRegisterNew } from "./ButtonRegisterNew"
import { Controller } from "react-hook-form";

export const InputsNewVaccine = ({navigation, control}) => {
    const [dateDov, dateDovSet] = useState(new Date())
    const [dateDonv, dateDonvSet] = useState(new Date())

    const [datePickerDov, datePickerDovSet] = useState(false)
    const [datePickerDonv, datePickerDonvSet] = useState(false)

    const dateFormatDov = moment(dateDov).format('DD/MM/YYYY')
    const dateFormatDonv = moment(dateDonv).format('DD/MM/YYYY')

    const handleDateChangeDov = (event, selectedDate) => {
      const currentDate = selectedDate || dateDov;
      dateDovSet(currentDate);
      datePickerDovSet(false);

      console.log('date',dateDov);
    }

    const handleDateChangeDonv = (event, selectedDate) => {
      const currentDate = selectedDate || dateDonv;
      dateDonvSet(currentDate)
      datePickerDonvSet(false)
      console.log('dateDONV',dateDonv);
      }

    return (
        <View mt={5}>
        <Box flexDirection={'row'} alignItems={'center'}  >
        <Text color={'white'} marginRight={2} ml={5} >
           Data de Vacinação
        </Text>
          <Pressable onPress={() => datePickerDovSet(true)} className={'dov'}>
        <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
            <Box
              name={"dov"}
              width={'95%'}
              height={'8'}
              borderColor={'white'}
              backgroundColor={'white'}
              flexDirection={'row'}
              borderRadius={0}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {datePickerDov && (
                <DateTimePicker
                  mode={'date'}
                  value={dateDov}
                  is24Hour={true}
                  dateFormat="day month year"
                  onChange={handleDateChangeDov}
                  maximumDate={new Date()}
                />
              )}
              <Text flex={1} paddingLeft={3} color={'primary.color'}>
                {dateFormatDov}
              </Text>
              <MaterialIcons
                name="calendar-today"
                size={22}
                color="#B0CCDE"
                paddingRight={6}
              />
            </Box>
            )}
            name="dov"
            defaultValue={dateDov}
            rules={{ required: true }}
          />
          </Pressable>
      </Box>
    <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} mt={5} mr={7}>
        <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5} >
            <Text color={'white'} marginRight={3}>Vacina</Text>
        </Box>
        <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            w={'62%'}
            h={'8'}
            onChangeText={onChange}
            value={value}
            borderRadius={0}
            backgroundColor={'#fff'}
            borderColor={'white'}
            color={'primary.color'}
            />
            )}
            name="name"
            defaultValue={''}
            />
        </Box>

        <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
        <RadioDose control={control} />
        </Box>

        {/* <Box>
          <ImagePickerButton/>
        </Box> */}

        <Box flexDirection={'row'} alignItems={'center'} ml={4} mt={5}  >
        <Text color={'white'} marginRight={2} >
           Próxima Vacinação
        </Text>
          <Pressable onPress={() => datePickerDonvSet(true)} className={'donv'}>
        <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
            <Box
              name={"donv"}
              width={'95%'}
              height={'8'}
              borderColor={'white'}
              backgroundColor={'white'}
              flexDirection={'row'}
              borderRadius={0}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {datePickerDonv && (
                <DateTimePicker
                  mode={'date'}
                  value={dateDonv}
                  is24Hour={true}
                  dateFormat="day month year"
                  onChange={handleDateChangeDonv}
                  maximumDate={new Date()}
                />
              )}
              <Text flex={1} paddingLeft={3} color={'primary.color'}>
                {dateFormatDonv}
              </Text>
              <MaterialIcons
                name="calendar-today"
                size={22}
                color="#B0CCDE"
                paddingRight={6}
              />
            </Box>
        )}
        name="donv"
        defaultValue={dateDonv}
        rules={{ required: true }}
      />
          </Pressable>
      </Box>
            </View>
    )
}