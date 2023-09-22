import { useState } from "react";

export const useOrder = (orderingForm, data) => {

  if (orderingForm === "lowToHigh") {
    function orderByPopulation(a, b) {
      return a.population - b.population;
    }
    let countries = data.sort(orderByPopulation);

    return countries;
  } else if (orderingForm === "highToLow") {
    function orderByPopulation(a, b) {
      return b.population - a.population;
    }
    let countries = data.sort(orderByPopulation);

    return countries;
  } else if (orderingForm === "aToZ") {
    function alphabeticOrder(a, b) {
      const nombreA = a.name.toUpperCase(); // Convertir a mayúsculas para ordenar sin distinguir entre mayúsculas y minúsculas
      const nombreB = b.name.toUpperCase();

      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0; // Son iguales
    }
    let countries = data.sort(alphabeticOrder);

    return countries;
  } else if (orderingForm === "zToA") {
    function alphabeticOrder(a, b) {
      const nombreA = a.name.toUpperCase(); // Convertir a mayúsculas para ordenar sin distinguir entre mayúsculas y minúsculas
      const nombreB = b.name.toUpperCase();

      if (nombreA < nombreB) {
        return 1;
      }
      if (nombreA > nombreB) {
        return -1;
      }
      return 0; // Son iguales
    }
    let countries = data.sort(alphabeticOrder);

    return countries;
  } else return data;
};
