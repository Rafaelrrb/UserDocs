import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DocCard } from '../../components/DocCard/docCard';
import { CreateDoc } from '../../components/CreateDoc/creatDoc';

export function DocumentsPage(){
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${id}/documents`); 
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [id]);

  return(
    <>
      <CreateDoc/>
      {
        data.map(item => <DocCard data={item}/>)
      }
    </>
  )
}