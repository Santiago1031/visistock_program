import React, { useEffect, useRef } from 'react';

interface ChatModalProps {
  show: boolean;
  onClose: () => void;
  position: { top: number, left: number };
}

const ChatModal: React.FC<ChatModalProps> = ({ show, onClose, position }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!show) return null;

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: position.top,
    left: position.left,
    zIndex: 1000,
  };

  return (
    <div style={modalStyle} ref={modalRef} className="flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden w-80">
        <div className="bg-black text-white p-4 text-center">
          <h2 className="text-lg font-bold">CHAT</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="bg-gray-200 p-3 rounded">
            <p className="text-gray-800">Renovar insumos del producto “pastel de vainilla” con código [PAS626VA] para crear 200 unidades.</p>
            <p className="text-gray-500 text-right text-xs">7:00 pm</p>
          </div>
          <div className="bg-gray-200 p-3 rounded">
            <p className="text-gray-800">Se han renovado los insumos del producto “pastel de vainilla”.</p>
            <p className="text-gray-500 text-right text-xs">7:11 pm</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Escribe aquí..."
            className="flex-grow p-2 border rounded focus:outline-none"
          />
          <button className="bg-black text-white px-4 py-2 rounded">➤</button>
        </div>
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900">✕</button>
      </div>
    </div>
  );
};

export default ChatModal;
