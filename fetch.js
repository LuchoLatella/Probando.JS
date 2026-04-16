
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))

            // Gererar en la web de fake api la conexion  https://fakestoreapi.com/

//         {
//   id: 1,
//   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
//   price: 109.95,
//   description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
//   category: "men's clothing",
//   image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
//   rating: { rate: 3.9, count: 120 }
// }                                                                    resultado de la consulta a la API

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// MEJORAR EL CÓDIGO DE FETCH

const url = 'https://fakestoreapi.com/products';    //dejando constante la URL

fetch(url)
    .then((response)=>{
        if(!response.ok){                               //viendo en caso de error
            console.log('Error');
        }
        return response.json();                         // en caso ok, retornar el json
    })
    .then((datos) => {
        console.log(datos);                             // genero los mismos datos pero con un mejor manejo de errores
    
    })
    .catch((error)=> {
        console.log(`Error ${error}`);                  //en caso de error, mostrar el error  

    })


    // .then(res => res.json())
    // .then(json=>console.log(json))

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // USANDO ASYNC AWAIT para mejorar el código

    async function BuscarTotal(){
        try{
            const response = await fetch(url);            //constante de la respuesta de la consulta
            if(!response.ok){                               //viendo en caso de error
            console.log('error');
            }
            const productos = await response.json();
            console.log(productos);

        }catch(error){
            console.log(`Error ${error}`);              //en caso de error, mostrar el error

        }                              //buscar en el total
    }
    BuscarTotal();