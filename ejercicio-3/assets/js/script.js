{
  /* REDUCE RECORRE CADA VALOR
  DEBO DEVOLVER INVENTORY.REDUCE, COMO ARGUMENTOS RECIBIRÁ UN ARRAY VACÍO QUE
  AÑADIRÁ CADA CATEGORÍA Y SI EXISTE SOBREESCRIBIRÁ LA CANTIDAD ACTUAL.
  Y EL ARRAY*/
 
  /*COMPORTAMIENTO DEL ARRAY
    - PUEDO AÑADIR UN NUEVO TIPO DE OBJETO (CATEGORÍA).
    - PUEDO AÑADIR UN NUEVO NOMBRE DENTRO DE UNA CATEGORÍA YA EXISTENTE.
    - PUEDO AUMENTAR LA CANTIDAD DE UN NOMBRE EXISTENTE.

    LA SALIDA DEBE SER
    {
      "toys": {
        "doll": 5
      }
    }
    
    MI PUTA SALIDA ES
    {
      "toys": [
        {
          "name": "doll",
          "quantity": 5
        }
      ]
    }
    EFDBKKFHGKUGKVGGKFGKK PORQUE COJONES ME SACA EL NOMBRE Y QUANTITY SI ESTOY HACIENDO UN OBJECT.VALUES

    RECORRO EL BUCLE Y COMPRUEBO SI EXISTE LA CATEGORÍA Y NOMBRE
  */
  const organizeInventory = (inventory) => {
    const organized = {};
    inventory.forEach(item => {
      if (!organized[item.category]) {
        organized[item.category] = {};
      }
      !organized[item.category][item.name] 
      ? organized[item.category][item.name] = item.quantity
      : organized[item.category][item.name] += item.quantity;
    });
    return organized;
  };

  //  Debería devolver su categoría junto a su nombre y cantidad por cada nombre
  //  Toys Doll 5 / Car 5
  //  Sports Ball 2 / Racket 4
  const inventory = [
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
  ];

  console.log(organizeInventory(inventory));

  //  Education Book 15 || Art Paint 3
  const inventory2 = [
    { name: "book", quantity: 10, category: "education" },
    { name: "book", quantity: 5, category: "education" },
    { name: "paint", quantity: 3, category: "art" },
  ];

  console.log(organizeInventory(inventory2));
}
