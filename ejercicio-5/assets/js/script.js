{
    /*Recibo un array de objetos botas, debo de ordenarlos por 
    tamaño y comprobar si existe dos botas del mismo tamaño y 
    diferente pie, en ese caso, devuelve solo el tamaño del zapato 
    en un array unidimensional*/
    function organizeShoes(shoes) {
        
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