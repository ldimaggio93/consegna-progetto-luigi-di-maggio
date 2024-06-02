import React, { useState } from 'react';
import styled from 'styled-components';

interface FormProps {
  addItem: (item: { nome: string; tipologia: string; descrizione: string; }) => void;
  postCount: number;
}

const Form: React.FC<FormProps> = ({ addItem, postCount }) => {
  const [nome, setNome] = useState('');
  const [tipologia, setTipologia] = useState('');
  const [descrizione, setDescrizione] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && tipologia && descrizione) {
      addItem({ nome, tipologia, descrizione });
      setNome('');
      setTipologia('');
      setDescrizione('');
    }
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <ProfileSection>
        <ProfileImage src="/round_icon.png" alt="Profile" />
        <PostCount>Post: {postCount}</PostCount>
      </ProfileSection>
      <Label>
        Nome:
        <Input type="text" value={nome} onChange={handleChange(setNome)} />
      </Label>
      <Label>
        Tipologia:
        <Input type="text" value={tipologia} onChange={handleChange(setTipologia)} />
      </Label>
      <Label>
        Descrizione:
        <Input type="text" value={descrizione} onChange={handleChange(setDescrizione)} />
      </Label>
      <AddButton type="submit">Aggiungi</AddButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const PostCount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

export default Form;
