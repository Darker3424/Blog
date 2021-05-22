const crearArchivo = ( base = 5 ) => {

    let salida = '';
    for( let i = 1; i <= 10; i++ ){
        salida += `${ base } x ${ i } = ${ base * i }\n`;
    }

    console.log(salida);

    fs.writeFileSync( `tabla-${ base }.text`, salida);

    console.log(`tabla-${ base }.txt creado`); 

}