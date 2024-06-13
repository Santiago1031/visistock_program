"use client";

import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }

  .cancel-button {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
  }

  .save-button {
    background-color: #000000;
    color: white;
  }
`;

interface Props {
  show: boolean;
  onClose: () => void;
}

const CreateProductModal: React.FC<Props> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle><p>Producir Producto</p></ModalTitle>
        <InputGroup>
          <label>Cantidad</label>
          <input type="text" placeholder="Ingresa el nombre" />
        </InputGroup>
        <InputGroup>
          <label>Código del Producto</label>
          <input type="text" placeholder="Ingresa el código" />
        </InputGroup>
        <ButtonGroup>
          <button className="cancel-button" onClick={onClose}>Cancelar</button>
          <button className="save-button">Guardar información</button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreateProductModal;
