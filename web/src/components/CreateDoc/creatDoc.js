import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function CreateDoc() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(`http://localhost:3001/users/${id}/documents`, { name, status });
      alert('Usuário criado com sucesso!');
      window.location.reload();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-4 mb-4">
    
    <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        className="border border-gray-300 p-2 rounded w-1/3" 
        required
      />

      <input 
        type="text" 
        id="status" 
        value={status} 
        onChange={(e) => setStatus(e.target.value)}
        placeholder="status"
        className="border border-gray-300 p-2 rounded w-1/3" 
        required
      />
     

     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Criar documento
      </button>
    </form>
  );
}