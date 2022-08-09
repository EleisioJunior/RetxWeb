import React from 'react';

import { Carros } from'./Pages/Carros'
import { Home } from "./Pages/Home"
import { Agendamento } from './Pages/Agendamento'
import { Perfil } from "./Pages/Perfil";

export function App() {
  return (
    <>
    <Home/>
    <Carros/>
    <Agendamento/>
    <Perfil/>
    </>
  );
}
