import React from 'react';

const InventoryList = () => {
  const inventoryData = [
    {
      Producto: "Esencia de Vainilla",
      Unidades: "A mano: 100 Unidad(es)",
      Precio: "Precio/unidad: 35000",
      Código: "[VAN145TE]",
    },
    {
      Producto: "Huevos (lotes de 30)",
      Unidades: "A mano: 1000 Unidad(es)",
      Precio: "Precio/lote: 15000",
      Código: "[PIR023AR]",
    },
    {
      Producto: "Chocolate",
      Unidades: "A mano: 10 Unidad(es)",
      Precio: "Precio/unidad: 15000",
      Código: "[CHO333TE]",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-black text-white p-4 mb-4">
        <h2 className="text-2xl font-bold">VISISTOCK</h2>
        <h3 className="text-xl text-center mt-2">INSUMOS</h3>
      </div>
      
      <div className="flex justify-between mb-4">
        <button className="bg-black text-white px-6 py-2 rounded">CREAR</button>
        <button className="bg-black text-white px-6 py-2 rounded">ELIMINAR</button>
        <button className="bg-black text-white px-8 py-2 rounded">RENOVAR UNIDADES</button>
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
            <th className="py-2 px-4 border-b">Precio</th>
            <th className="py-2 px-4 border-b">Código</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.Producto}</td>
              <td className="py-2 px-4 border-b">{item.Unidades}</td>
              <td className="py-2 px-4 border-b">{item.Precio}</td>
              <td className="py-2 px-4 border-b">{item.Código}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button className="bg-black text-white px-6 py-2 rounded">CERRAR SESIÓN</button>
        <button className="bg-black text-white px-6 py-2 rounded">PRODUCTOS</button>
        <button className="bg-black text-white px-8 py-2 rounded">CHAT</button>
      </div>
    </div>
  );
};

export default InventoryList;