console.log("hola mundo");
const nombre = "Allisson";
let apellido = "Dominguez";

console.log(nombre);
console.log(apellido);

//nombre = "Sugey";
apellido = "Flores";
 
console.log (apellido);

//OBJETOS DE JAVA
const persona ={
 nombre : "jose" ,
 apellido :"Sanchez",
 edad :20 ,
 apodos :[ "pepe", "chepe " ,"chepito"]
};
 
persona.apellido = "Dominguez Flores"
console.log(persona.apellido );
console.log ("==========FIN OBJETOS=============");
//FUNCIONS JAVA

//function saludar (nombre ){
   // return "Hola " + nombre ;

//}

const saludar = nombre => 
    "Hola " + nombre;



const saludo = saludar (persona.apellido);
console.log(saludo);

console.log("============Fin Funciones==========");
console.log ("===========Listas =================");

const listaNumeros =[
    5,10,3,8,9
];

console.log(listaNumeros);
listaNumeros[3]= 7;
console.log (listaNumeros);

const nummerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy) => {
        return numeroEnElQueVoy * 3 ;
    }
);

console.log(nummerosMultiplicados);

const numerosEnObjetos = listaNumeros.map (
    (numeroEnElQueVoy) => {
        return {
            valor : numeroEnElQueVoy
        
        };
    }
);
console.log(numerosEnObjetos);

//funcion filter
const numerosX = [90,70,30,10,50];
const numerosFiltrados = numerosX.filter(
    numX => numX > 50
    
);
console.log(numerosFiltrados);
 
const personas =[
    {
        nombre : "Allisson",
        edad :20 
    },
    { 
        nombre : "Fran",
        edad :20
    },
    {
        nombre :"juli",
        edad : 15
    },
];

const personasMayores = personas.filter(
    (personaX) => {
        return personaX.edad >17;
    }
);

console.log(personasMayores);


//funcion reduce 
const numerosY = [3,6,9,12,16];

const sumaNumero = numerosY.reduce(
    (variablePersistente, elemento) => 
      variablePersistente + elemento
        


    ,
    0
);

console.log(sumaNumero);