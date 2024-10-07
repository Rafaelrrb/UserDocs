import { useState } from 'react';
import axios from 'axios';

export function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:3001/users', { name, email });
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
        type="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border border-gray-300 p-2 rounded w-1/3" 
        required
      />
     

     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Criar Usuário
      </button>
    </form>
  );
}