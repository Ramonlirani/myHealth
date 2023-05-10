import { Box, Input, Pressable, Text, View } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioDose } from './RadioDose';
import { Controller } from 'react-hook-form';

export const InputsNewVaccine = ({ control }) => {

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
              w={'40%'}
              h={'8'}
              borderRadius={0}
              backgroundColor={'#fff'}
              borderColor={'white'}
              color={'primary.color'}
              onChangeText={onChange}
              value={value}
              placeholder='DD/MM/AAAA'
              InputRightElement={<MaterialIcons name='calendar-today' size={17} marginRight={10} color="#B0CCDE"/>}
            />
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
            borderRadius={0}
            backgroundColor={'#fff'}
            borderColor={'white'}
            color={'primary.color'}
            onChangeText={onChange}
            value={value}
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
            w={'40%'}
            h={'8'}
            borderRadius={0}
            backgroundColor={'#fff'}
            borderColor={'white'}
            color={'primary.color'}
            onChangeText={onChange}
            value={value}
            InputRightElement={<MaterialIcons name='calendar-today' size={17} marginRight={10} color="#B0CCDE"/>}
            placeholder='DD/MM/AAAA'
            />
          )}
          defaultValue={''}
          rules={{ required: true }}
          />
      </Box>
    </View>
  );
};
