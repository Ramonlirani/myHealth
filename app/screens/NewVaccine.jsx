import React, { useContext, useState } from 'react';
import { HeaderNewVaccine } from '../components/Home/NewVaccine/HeaderNewVaccine';
import { Box } from 'native-base';
import { InputsNewVaccine } from '../components/Home/NewVaccine/InputsNewVaccine';
import { ButtonRegisterNew } from '../components/Home/NewVaccine/ButtonRegisterNew';

import { v4 as uuidv4 } from 'uuid';
import { VaccineContext } from '../context/VaccineContext';

export const NewVaccine = ({ navigation }) => {
  
  const { addVaccine } = useContext(VaccineContext);
  const [nameVaccine, nameVaccineSet] = useState('');
  const [dateVaccine, dateVaccineSet] = useState('');
  const [nextVaccine, nextVaccineSet] = useState('');
  const [dose, doseSet] = useState('');
  
  const handleNameVaccineChange = (text) => {
    nameVaccineSet(text);
  };
  
  const handleDateVaccineChange = (text) => {
    dateVaccineSet(text);
  };
  
  const handleNextVaccineChange = (text) => {
    nextVaccineSet(text);
  };
  
  const handleDoseChange = (text) => {
    doseSet(text);
  };
  
  const newId = uuidv4();
  const onSubmit = () => {
    const newVaccine = {
      id: newId,
      name: nameVaccine,
      date: dateVaccine,
      next: nextVaccine,
      dose: dose
    };
    addVaccine(newVaccine);
    navigation.pop();
  };

  return (
    <Box width={'100%'} flex={1} backgroundColor={'backgroundColor.primary'}>
      <HeaderNewVaccine navigation={navigation} />
      <InputsNewVaccine nameVaccine={nameVaccine} dateVaccine={dateVaccine} nextVaccine={nextVaccine} dose={dose} handleNameVaccineChange={handleNameVaccineChange} handleDateVaccineChange={handleDateVaccineChange} handleNextVaccineChange={handleNextVaccineChange} handleDoseChange={handleDoseChange}  />
      <ButtonRegisterNew navigation={navigation} onSubmit={onSubmit} />
    </Box>
  );
};
