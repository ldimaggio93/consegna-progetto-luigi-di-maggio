import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Form from './Form';
import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(18, 18, 18, 0.5); /* Sfondo bianco semi-trasparente per migliorare la leggibilità */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ItemBox = styled.div`
  background-color: rgba(244, 244, 244, 0.9); /* Aggiungi opacità per migliorare la leggibilità */
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
  position: relative;
  color: black; /* Mantiene il testo leggibile nel box */
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const App: React.FC = () => {
  const [items, setItems] = useState<{ nome: string; tipologia: string; descrizione: string; }[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const addItem = (item: { nome: string; tipologia: string; descrizione: string; }) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <Form addItem={addItem} postCount={items.length} />
        {items.map((item, index) => (
          <ItemBox key={index}>
            <p><strong>Nome:</strong> {item.nome}</p>
            <p><strong>Tipologia:</strong> {item.tipologia}</p>
            <p><strong>Descrizione:</strong> {item.descrizione}</p>
            <RemoveButton onClick={() => removeItem(index)}>Rimuovi</RemoveButton>
          </ItemBox>
        ))}
      </AppContainer>
    </>
  );
};

export default App;
