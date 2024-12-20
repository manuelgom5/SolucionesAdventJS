{
  const preparedGifts = (gifts) => {
    //  Si no hay regalo recibidos muestra el mensaje correspondiente por pantalla
    if (gifts.length === 0) {
      return "No hay regalo, la lista queda vacía.";
    }
    //  Creamos un Set con los valores del array para eliminar los duplicados
    let setGifts = new Set(gifts);
    //    Ordenamos los valores de forma ascendente
    const orderGifts = [...setGifts].sort((a, b) => a - b);
    //    Devolvemos los valores
    return orderGifts;
  };

  const gifts1 = [3, 1, 2, 3, 4, 2, 5];
  const preparedGifts1 = preparedGifts(gifts1);
  console.log(preparedGifts1); //  [1, 2, 3, 4, 5]

  const gifts2 = [6, 5, 5, 5, 5];
  const preparedGifts2 = preparedGifts(gifts2);
  console.log(preparedGifts2); //  [5, 6]

  const gifts3 = [];
  const preparedGifts3 = preparedGifts(gifts3);
  console.log(preparedGifts3); //  No hay regalos, la lista queda vacía
}
