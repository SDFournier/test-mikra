


const  object2 = {
                    sons: [{ bar: 'baz', 
                            grandsons: [{name:"name"}], 
            
}]
  };
const path = 'sons[1].grandsons[0].name'
function deepGet(object, path){
    let readObject;
    const myArray = path.split(".");

    for(let i = 0; i<myArray.length; i++){
        console.log("[myArray[i]: ",myArray[i])
        readObject = object[myArray[i]]
        console.log("readObject: ",readObject)
    }
    return  readObject;
}

function deepGet2(object, idx11,  idx2){

    let readObject = object.sons[idx11].grandsons[idx2].name
  
    return  readObject;
}

console.log("Respuesta: ", deepGet2(object2,0,0))

/*

Problema: Se requiere escribir un algoritmo que pueda leer valores en un cierto path determinado de un objeto cuya estructura es desconocida.

Tareas:
Definir e implementar unit tests
Escribir el algoritmo

Signature:
deepGet(object, path) : any


Ejemplo: 
deepGet(object, ‘sons[1].grandsons[0].name’)

*/