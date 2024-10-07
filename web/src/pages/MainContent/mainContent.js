import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/card';
import { CreateUser } from '../../components/CreateUser/createUser';

export function MainContent(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users'); 
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return(
    <>
      <CreateUser/>
      {
        data.map(item => <Card data={item}/>)
      }
    </>
  )
}