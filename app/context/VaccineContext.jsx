import { createContext, useState } from 'react';

const VaccineContext = createContext();

function VaccineProvider({ children }) {
  const [vaccines, setVaccines] = useState([]);

  function addVaccine(newVaccine) {
    setVaccines([...vaccines, newVaccine]);
  }

  return (
    <VaccineContext.Provider value={{ vaccines, addVaccine }}>{children}</VaccineContext.Provider>
  );
}

export { VaccineContext, VaccineProvider };
