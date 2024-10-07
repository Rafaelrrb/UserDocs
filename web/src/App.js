import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from "./components/Header/header";
import { MainContent } from "./pages/MainContent/mainContent";
import { EditUser } from "./pages/EditUser/editUser";
import { DocumentsPage } from "./pages/DocumentsPage/documentsPage"
import { EditDoc } from './pages/EditDoc/editDoc';

export function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/edit/:id" element={<EditUser/>} />
          <Route path="/documents/:id" element={<DocumentsPage/>} />
          <Route path="/documents/:id/edit/:docid" element={<EditDoc/>} />
          
        </Routes>
      </Router>
    </>
  );
}


