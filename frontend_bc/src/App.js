import {  BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddNotes from "./components/AddNotes";
import EditNotes from "./components/EditNotes";
import React from "react";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<UserList/>}/>
    <Route path="add" element={<AddNotes/>}/>
    <Route path="edit/:id" element={<EditNotes/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
