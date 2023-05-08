import { Box, Input, Pressable, Text, View } from "native-base"
import { MaterialIcons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import moment from 'moment'
import { RadioDose } from "./RadioDose"


export const InputsNewVaccine = () => {
    const [date, dateSet] = useState(new Date())
    const [datePicker, datePickerSet] = useState(false)
    const dateFormat = moment(date).format('DD/MM/YYYY')
    
    
    const handleDateChange = (event, selectedDate) => {
        datePickerSet(false)
        dateSet(selectedDate)
      }
    return (
        <View mt={5}>
        <Box flexDirection={'row'} alignItems={'center'}  >
        <Text color={'white'} marginRight={2} >
           Data de Vacinação
        </Text>
          <Pressable onPress={() => datePickerSet(true)} className={'dob'}>
            <Box
              width={'95%'}
              height={'8'}
              borderColor={'white'}
              backgroundColor={'white'}
              flexDirection={'row'}
              borderRadius={0}
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
              <Text flex={1} paddingLeft={3} color={'primary.color'}>
                {dateFormat}
              </Text>
              <MaterialIcons
                name="calendar-today"
                size={22}
                color="#B0CCDE"
                paddingRight={6}
              />
            </Box>
          </Pressable>
      </Box>
    <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} mt={5} mr={7}>
        <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5} >
            <Text color={'white'} marginRight={3}>Vacina</Text>
        </Box>
          <Input
            w={'62%'}
            h={'8'}
            borderRadius={0}
            backgroundColor={'#fff'}
            borderColor={'white'}
            color={'primary.color'}
            />
        </Box>
        <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
        <RadioDose />
        </Box>
            </View>
    )
}