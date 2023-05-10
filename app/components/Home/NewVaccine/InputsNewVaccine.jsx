import { Box, Input, Pressable, Text, View } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import moment from 'moment';
import { RadioDose } from './RadioDose';
import { Controller } from 'react-hook-form';

export const InputsNewVaccine = ({ navigation, control, setValue }) => {
  const [dateDov, dateDovSet] = useState(new Date());
  const [dateDonv, dateDonvSet] = useState(new Date());

  const [datePickerDov, datePickerDovSet] = useState(false);
  const [datePickerDonv, datePickerDonvSet] = useState(false);

  const dateFormatDov = moment(dateDov).format('DD/MM/YYYY');
  const dateFormatDonv = moment(dateDonv).format('DD/MM/YYYY');

  const handleDateChangeDov = (event, selectedDateDov) => {
    datePickerDovSet(false);
    dateDovSet(selectedDateDov);
    setValue(selectedDateDov);
  };

  const handleDateChangeDonv = (event, selectedDateDonv) => {
    datePickerDonvSet(false);
    dateDonvSet(selectedDateDonv);
    setValue(selectedDateDonv);
  };

  return (
    <View mt={5}>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Text color={'white'} marginRight={2} ml={5}>
          Data de Vacinação
        </Text>
        <Controller
          control={control}
          name="dov"
          render={({ field: { onChange, value } }) => (
            <Input
              flex={1}
              paddingLeft={3}
              color={'primary.color'}
              onChangeText={onChange}
              value={value}
            ></Input>
          )}
          defaultValue={''}
          rules={{ required: true }}
        />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} mt={5} mr={7}>
        <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5}>
          <Text color={'white'} marginRight={3}>
            Vacina
          </Text>
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

      <Box flexDirection={'row'} alignItems={'center'} ml={4} mt={5}>
        <Text color={'white'} marginRight={2}>
          Próxima Vacinação
        </Text>
        <Controller
          control={control}
          name="donv"
          render={({ field: { onChange, value } }) => (
            <Input
              flex={1}
              paddingLeft={3}
              color={'primary.color'}
              onChangeText={onChange}
              value={value}
            ></Input>
          )}
          defaultValue={''}
          rules={{ required: true }}
        />
      </Box>
    </View>
  );
};
