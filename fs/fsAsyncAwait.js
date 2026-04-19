const fs = requier('fs').promises;

const agregarPersonaje = async () => {

    const datos = readFile('./personajes.json', 'utf-8');

