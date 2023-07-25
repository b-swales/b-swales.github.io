import React, { ChangeEvent, useState } from 'react';
import DynamicInputsComponent from './DynamicInputs';


const RouteCreator = () => {

  const [environment, setSelectedEnvironment] = useState('localhost:3000/#');
  const handleEnvironmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedEnvironment = event.target.value;
    setSelectedEnvironment(selectedEnvironment);
  };

  return (
    <div>
      <div>
      <select name="environment" id="environment" onChange={handleEnvironmentChange}>
        <option value="localhost:3000/#">localhost:3000/#</option>
        <option value="kone.dev.koddi.io/#">kone.dev.koddi.io/#</option>
        <option value="kone.uat.koddi.io/#">kone.uat.koddi.io/#</option>
        <option value="koddi.io/#">koddi.io/#</option>
      </select>
      </div>
      <div>
      <DynamicInputsComponent environment={environment} />
      </div>
    </div>
  );
};

export default RouteCreator;
