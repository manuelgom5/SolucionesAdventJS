{
    /*Recibo un array de objetos botas, debo de ordenarlos por 
    tamaño y comprobar si existe dos botas del mismo tamaño y 
    diferente pie, en ese caso, devuelve solo el tamaño en un 
    array unidimensional*/
    function organizeShoes(shoes) {
        //  Ordena el array y guarda el resultado en un array nuevo
        const shoesSorted = shoes.sort((a, b) => a.size - b.size);
        let organize = [];
        shoesSorted.forEach(element => {
            organize.push([element]);
            while (organize[0].size === element.size) {
                organize.push(element);
            }
        });
        /*let newArray = shoesSorted.filter((a, b) => a.size === b.size);
        console.log(newArray);
        */
        /*
        shoesSorted.forEach((item, index) => {
            if (index + 1 !== shoes.length) {
                if (item.size === shoesSorted[index + 1].size && item.type !== shoesSorted[index + 1].type) {
                    organize.push(item.size);
                }
            }
        });
        */
        shoesSorted.forEach()
        /*
        
        
        */
        return organize;
    }

    const shoes = [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        {type: 'I', size: 42}
    ]

    console.log(organizeShoes(shoes));
    //  [38, 42]

    const shoes2 = [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 }
    ]
    
    console.log(organizeShoes(shoes2));
    //  [38, 38]

    const shoes3 = [
        { type: 'I', size: 38 },
        { type: 'R', size: 36 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 43}
    ]

    console.log(organizeShoes(shoes3));
}