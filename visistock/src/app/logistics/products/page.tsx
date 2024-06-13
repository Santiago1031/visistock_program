"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import CreateInsumoModal from '@/components/CreateInsumoModal';
import DeleteInsumoModal from '@/components/DeleteInsumoModal';
import ChatModal from '@/components/ChatModal';

const InventoryList: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatModalPosition, setChatModalPosition] = useState<{ top: number, left: number } | null>(null);

  const chatButtonRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const openChatModal = () => {
    if (chatButtonRef.current) {
      const rect = chatButtonRef.current.getBoundingClientRect();
      setChatModalPosition({ top: rect.top - 420, left: rect.left - 125}); // Ajusta estos valores según sea necesario
      setIsChatModalOpen(true);
    }
  };
  
  const closeChatModal = () => setIsChatModalOpen(false);


  const handleLogout = () => {
    router.push('/'); 
  };

  const gotoSupplies = () => {
    router.push('/logistics'); 
  };

  const inventoryData = [
    {
      Producto: "Pastel de Chocolate",
      Unidades: "A mano: 10 Unidad(es)",
      Estado_Insumos: "Disponibles: huevo, harina...\nNo disponibles: chocolate.",
      Precio: "Precio/unidad: 50000",
      Código: "[PAS242CH]",
    },
    {
      Producto: "Pastel de Vainilla",
      Unidades: "A mano: 0 Unidad(es)",
      Estado_Insumos: "Disponibles: huevo, harina...\nNo disponibles: esencia de vainilla.",
      Precio: "Precio/unidad: 50000",
      Código: "[PAS626VA]",
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <CreateInsumoModal show={isCreateModalOpen} onClose={closeCreateModal} />
      <DeleteInsumoModal show={isDeleteModalOpen} onClose={closeDeleteModal} />
      {isChatModalOpen && chatModalPosition && (
        <ChatModal show={isChatModalOpen} onClose={closeChatModal} position={chatModalPosition} />
      )}

      <div className="bg-black text-white p-4 mb-4">
        <h2 className="text-2xl font-bold">VISISTOCK</h2>
        <h3 className="text-xl text-center mt-2">PRODUCTOS</h3>
      </div>
      
      <div className="flex justify-between mb-4">
        <button onClick={openCreateModal} className="bg-black text-white px-6 py-2 rounded">CREAR</button>
        <button onClick={openDeleteModal} className="bg-black text-white px-6 py-2 rounded">ELIMINAR</button>
        <input
          type="text"
          placeholder="Buscar producto..."
          className="border rounded py-2 px-4"
        />
        <button className="bg-black text-white px-6 py-2 rounded">Buscar</button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Producto</th>
            <th className="py-2 px-4 border-b">Unidades</th>
            <th className="py-2 px-4 border-b">Estado Insumos</th>
            <th className="py-2 px-4 border-b">Precio</th>
            <th className="py-2 px-4 border-b">Código</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.Producto}</td>
              <td className="py-2 px-4 border-b">{item.Unidades}</td>
              <td className="py-2 px-4 border-b">{item.Estado_Insumos}</td>
              <td className="py-2 px-4 border-b">{item.Precio}</td>
              <td className="py-2 px-4 border-b">{item.Código}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button onClick={handleLogout} className="bg-black text-white px-6 py-2 rounded">CERRAR SESIÓN</button>
        <button onClick={gotoSupplies} className="bg-black text-white px-6 py-2 rounded">INSUMOS</button>
        <button onClick={openChatModal} ref={chatButtonRef} className="bg-black text-white px-8 py-2 rounded">CHAT</button>
      </div>
    </div>
  );
};

export default InventoryList;
