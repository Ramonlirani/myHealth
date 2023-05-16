import { createContext, useState } from 'react';

const VaccineContext = createContext();

function VaccineProvider({ children }) {
  const [vaccines, setVaccines] = useState([]);

  function addVaccine(newVaccine) {
    setVaccines([...vaccines, newVaccine]);
  }

  function deleteVaccine(id) {
    setVaccines(vaccines.filter((vaccine) => vaccine.id !== id));
  }

  return (
    <VaccineContext.Provider value={{ vaccines, addVaccine, deleteVaccine  }}>{children}</VaccineContext.Provider>
  );
}

export { VaccineContext, VaccineProvider };
