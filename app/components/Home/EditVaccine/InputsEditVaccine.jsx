import { Box, Input, Pressable, Text, View } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { Controller } from 'react-hook-form';
import { RadioDoseEdit } from './RadioDoseEdit';

export const InputsEditVaccine = ({editNameVaccine,handleEditNameVaccineChange, editDateVaccine, handleEditDateVaccineChange, editNextVaccine, handleEditNextVaccineChange, editDose, handleEditDoseChange}) => {

  return (
    <View mt={5}>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Text color={'white'} marginRight={2} ml={5}>
          Data de Vacinação
        </Text>
        
            <Input
              w={'40%'}
              h={'8'}
              borderRadius={0}
              backgroundColor={'#fff'}
              borderColor={'white'}
              color={'primary.color'}
              value={editDateVaccine}
              onChangeText={handleEditDateVaccineChange}
              placeholder='DD/MM/AAAA'
              InputRightElement={<MaterialIcons name='calendar-today' size={17} marginRight={10} color="#B0CCDE"/>}
            />
       
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} mt={5} mr={7}>
        <Box flexDirection={'row'} alignItems={'center'} paddingVertical={5}>
          <Text color={'white'} marginRight={3}>
            Vacina
          </Text>
        </Box>
            <Input
            w={'62%'}
            h={'8'}
            borderRadius={0}
            backgroundColor={'#fff'}
            borderColor={'white'}
            color={'primary.color'}
            value={editNameVaccine}
            onChangeText={handleEditNameVaccineChange}
            />
       
      </Box>

      <Box flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}>
        <RadioDoseEdit editDose={editDose} handleEditDoseChange={handleEditDoseChange} />
      </Box>

      {/* <Box>
          <ImagePickerButton/>
        </Box> */}
      
        <Box flexDirection={'row'} alignItems={'center'} ml={4} mt={5}>
        <Text color={'white'} marginRight={2}>
          Próxima Vacinação
        </Text>        
       
            <Input
            w={'40%'}
            h={'8'}
            borderRadius={0}
            backgroundColor={'#fff'}
            borderColor={'white'}
            color={'primary.color'}
            value={editNextVaccine}
            onChangeText={handleEditNextVaccineChange}
            InputRightElement={<MaterialIcons name='calendar-today' size={17} marginRight={10} color="#B0CCDE"/>}
            placeholder='DD/MM/AAAA'
            />
         
      </Box>
    </View>
  );
};
