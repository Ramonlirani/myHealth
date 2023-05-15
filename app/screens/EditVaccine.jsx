import { Box, Text, View } from 'native-base';
import { HeaderEditVaccine } from '../components/Home/EditVaccine/HeaderEditVaccine';
import { InputsEditVaccine } from '../components/Home/EditVaccine/InputsEditVaccine';
import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ButtonSaveChange } from '../components/Home/EditVaccine/ButtonSaveChange';
import { ButtonDelete } from '../components/Home/EditVaccine/ButtonDelete';
import { VaccineContext } from '../context/VaccineContext';

export const EditVaccine = ({  navigation, route }) => {
  const { item } = route.params;
  const [editNameVaccine, editNameVaccineSet] = useState(item.name);
  const [editDateVaccine, editDateVaccineSet] = useState(item.date);
  const [editNextVaccine, editNextVaccineSet] = useState(item.next);
  const [editDose, editDoseSet] = useState(item.dose);

  const { addVaccine } = useContext(VaccineContext);

  console.log('params',item);
  
  const handleEditNameVaccineChange = (text) => {
    editNameVaccineSet(text);
  };
  
  const handleEditDateVaccineChange = (text) => {
    editDateVaccineSet(text);
  };
  
  const handleEditNextVaccineChange = (text) => {
    editNextVaccineSet(text);
  };
  
  const handleEditDoseChange = (text) => {
    editDoseSet(text);
  };

  const handleSaveChanges = () => {
    
    const updatedItem = {
      id: item.id, // Mantém o mesmo ID do item
      name: editNameVaccine,
      date: editDateVaccine,
      next: editNextVaccine,
      dose: editDose,
    };

    console.log('Alterações salvas:', updatedItem);
  };


  return (
    <Box width={'100%'} flex={1} backgroundColor={'backgroundColor.primary'}>
      <HeaderEditVaccine navigation={navigation}/>
      <InputsEditVaccine editNameVaccine={editNameVaccine} handleEditNameVaccineChange={handleEditNameVaccineChange} editDateVaccine={editDateVaccine} 
      handleEditDateVaccineChange={handleEditDateVaccineChange} editNextVaccine={editNextVaccine} handleEditNextVaccineChange={handleEditNextVaccineChange} 
      editDose={editDose} handleEditDoseChange={handleEditDoseChange}/>
      <Box marginTop={'32'}>
      <ButtonSaveChange onSaveChanges={handleSaveChanges}/>
      <ButtonDelete/>
      </Box>
    </Box>
  );
};
