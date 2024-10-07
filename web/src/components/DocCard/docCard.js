import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export function DocCard({data}){
  const { id } = useParams();
  const handleDelete = async (DocId) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}/documents/${DocId}`);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao deletar o usuário:', error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md mb-2">
      <div className="flex items-center">
        <p className="text-gray-700 font-semibold mr-4">{data.id}</p> 
        <div className="flex flex-col">
          <p className="text-lg font-bold text-gray-900">{data.name}</p>
          <p className="text-gray-600">{data.status}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Link to={`/documents/${id}/edit/${data.id}`}>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Editar
          </button>
        </Link>
        <button 
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={()=>handleDelete(data.id)}
        >
          Deletar
        </button>

      </div>
    </div>
  )
}