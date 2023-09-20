export const getNativeName = (currencies, name) => {
  // Supongamos que deseas acceder a la propiedad 'name' del objeto dentro de 'currencies'
  const primerObjetoCurrencies = currencies; // Accedes al objeto 'currencies'

  // Luego, obtienes el primer valor (propiedad) del objeto 'currencies' (en este caso, 'egp')
  const primeraPropiedad = Object.keys(primerObjetoCurrencies)[0];

  // Finalmente, accedes a la propiedad 'name' del objeto dentro de 'currencies'
  const currencie = primerObjetoCurrencies[primeraPropiedad].name;

  // Supongamos que deseas acceder a la propiedad 'name' del objeto dentro de 'currencies'
  const primerObjetonativeName = name; // Accedes al objeto 'nativeName'

  // Luego, obtienes el primer valor (propiedad) del objeto 'nativeName' (en este caso, 'egp')
  const primeraPropiedadNativeName = Object.keys(primerObjetonativeName)[0];

  // Finalmente, accedes a la propiedad 'name' del objeto dentro de 'nativeName'
  const nativeName = primerObjetonativeName[primeraPropiedadNativeName].common;

  return {currencie, nativeName}
};
