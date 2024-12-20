/*
        if (item) {
          item.quantity += quantity;
        } else {
          result[password].push({ name, quantity });
        }
        */
        
        /*if (result[password] == password && result[password].name == object.name) {
        let actualQuantity = result[password].quantity;
        result[password].push({ name, quantity + actualQuantity });
      } else {
        result[password].push({ name, quantity });
      } */
      /*const password = object.category;
      if (!result[password]) {
        result[password] = [];
        const { nameObject, quantityObject } = object;
        result[password].push(nameObject, quantityObject);
      } else if (result[password] == password && result[password].name == object.name) {
        let actualQuantity = result[password].quantity;
        result[password] = [object.name, object.quantity + actualQuantity];
      } else {
        result[password].push([object.name, object.quantity])
      }
      */

      /* 
        const organizeInventory = (inventory) => {
        return inventory.reduce((result, object) => {
        const [ name, quantity, category ] = Object.values(object);
        console.log(name, quantity);
        if (!result[category]) {
            result[category] = [];
            result[category].push({ name, quantity });
        } else {
            const item = result[category].findIndex(item => item.name === name);
            if (item !== -1) {
            result[category][item].quantity = parseInt(result[category][item].quantity) + quantity;
            } else {
            result[category].push({ name, quantity });
            }
        }
        return result;
        }, {});
        };
      */