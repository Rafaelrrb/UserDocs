import { Link } from 'react-router-dom';
export function Header(){
  return (
    <header className="w-full h-16 bg-blue-600 flex items-center justify-center p-4 mb-4">
      <Link to="/">
        <button className="px-4 py-2 text-white rounded hover:bg-blue-700">
          Usuários
        </button>
      </Link>
    </header>
  )
}