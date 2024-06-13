"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import CreateProductModal from '@/components/CreateProductModal';
import GetInsumoModal from '@/components/GetInsumosModal';
import ChatModal from '@/components/ChatModal';

const InventoryList: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isGetModalOpen, setIsGetModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatModalPosition, setChatModalPosition] = useState<{ top: number, left: number } | null>(null);

  const chatButtonRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openGetModal = () => setIsGetModalOpen(true);
  const closeGetModal = () => setIsGetModalOpen(false);

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

  const inventoryData = [
    {
      Producto: "Pastel de Chocolate",
      Estado_Insumos: "Disponibles: huevo, harina...\nNo disponibles: chocolate.",
      Cantidad: "A mano: 10 Unidad(es)",
      Posible: "0 unidades",
      Código: "[PAS242CH]",
    },
    {
      Producto: "Pastel de Vainilla",
      Estado_Insumos: "Disponibles: huevo, harina...\nNo disponibles: esencia de vainilla.",
      Cantidad: "A mano: 0 Unidad(es)",
      Posible: "0 unidades",
      Código: "[PAS626VA]",
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <CreateProductModal show={isCreateModalOpen} onClose={closeCreateModal} />
      <GetInsumoModal show={isGetModalOpen} onClose={closeGetModal} />
      {isChatModalOpen && chatModalPosition && (
        <ChatModal show={isChatModalOpen} onClose={closeChatModal} position={chatModalPosition} />
      )}

      <div className="bg-black text-white p-4 mb-4">
        <h2 className="text-2xl font-bold">VISISTOCK</h2>
        <h3 className="text-xl text-center mt-2">PRODUCCIÓN</h3>
      </div>
      
      <div className="flex justify-between mb-4">
        <button onClick={openCreateModal} className="bg-black text-white px-6 py-2 rounded">PRODUCIR</button>
        <button onClick={openGetModal} className="bg-black text-white px-6 py-2 rounded">SOLICITAR INSUMOS</button>
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
            <th className="py-2 px-4 border-b">Estado Insumos</th>
            <th className="py-2 px-4 border-b">Cantidad a Mano</th>
            <th className="py-2 px-4 border-b">Cantidad de Producción Posible</th>
            <th className="py-2 px-4 border-b">Código</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.Producto}</td>
              <td className="py-2 px-4 border-b">{item.Estado_Insumos}</td>
              <td className="py-2 px-4 border-b">{item.Cantidad}</td>
              <td className="py-2 px-4 border-b">{item.Posible}</td>
              <td className="py-2 px-4 border-b">{item.Código}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button onClick={handleLogout} className="bg-black text-white px-6 py-2 rounded">CERRAR SESIÓN</button>
        <button onClick={openChatModal} ref={chatButtonRef} className="bg-black text-white px-8 py-2 rounded">CHAT</button>
      </div>
    </div>
  );
};

export default InventoryList;
