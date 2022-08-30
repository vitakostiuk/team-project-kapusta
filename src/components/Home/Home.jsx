import React from 'react';
import Balance from 'components/Balance';
import Summary from './Summary';
import Tabs from 'components/Table/Tabs/Tabs';
import InputForm from 'components/Table/InputForm/InputForm';

const Home = () => {
  return (
    <div>
      <Balance />
      <Tabs />
      <InputForm />
      <Summary />
    </div>
  );
};

export default Home;
