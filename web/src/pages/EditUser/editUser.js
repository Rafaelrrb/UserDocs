
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.put(`http://localhost:3001/users/${id}`, { name, email });
      alert('Editado com sucesso!');
      navigate('/');
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
      />

      <input 
        type="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-300 p-2 rounded w-1/3" 
      />
     

     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Editar Usuário
      </button>
    </form>
  );
}