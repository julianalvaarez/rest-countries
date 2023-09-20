import { useState } from "react";

export const usePaginacion = (data = [], items = 24) => {

  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPorPagina, setItemsPorPagina] = useState(items);
  const indexOfLastItem = paginaActual * itemsPorPagina;
  const indexOfFirstItem = indexOfLastItem - itemsPorPagina;
  const dataPaginada = data.slice(indexOfFirstItem, indexOfLastItem);
  const cambiarPagina = (pageNumber) => {
    if (pageNumber === 0) return;
    if (pageNumber === Math.ceil(data.length / items) + 1) return
    setPaginaActual(pageNumber);
  };

  return {
    cambiarPagina,
    paginaActual,
    setPaginaActual,
    dataPaginada,
  };
};