class carro {
    constructor(id, marca, modelo, precio){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio

    }
    mostrarData(){
        console.log(`El carro es ${this.modelo}, es marca ${this.marca} y su precio es $${this.precio}.`)
    }
}
//Objetos
const carro1 = new carro(01, "HotWheels", "1970 Pontiac Firebird", 2)
const carro2 = new carro(02, "HotWheels", "Tooned Volkswagen Golf Mk1", 2)
const carro3 = new carro(03, "HotWheels", "Porsche 935", 2)
const carro4 = new carro(04, "HotWheels", "Sweet Driver", 2)
const carro5 = new carro(05, "HotWheels", "Toon'd '83 Chevy Silverado", 2)
const carro6 = new carro(06, "HotWheels", "Lolux", 2)
const carro7 = new carro(07, "HotWheels", "1986 Toyota Van", 2)
const carro8 = new carro(08, "HotWheels", "Lotus Emira", 2)
const carro9 = new carro(09, "HotWheels", "Aston Martin Vantage GTE", 2)
const carro10 = new carro(10, "HotWheels", "'62 Corvette Gasser", 2)
const carro11 = new carro(11, "Matchbox", "1956 Jaguar", 2)
const carro12 = new carro(12, "Matchbox", "1957 Thunderbird", 2)
const carro13 = new carro(13, "Matchbox", "1965 Ford C900", 2)
const carro14 = new carro(14, "Matchbox", "1956 Aston Martin", 2)
const carro15 = new carro(15, "Matchbox", "2015 Alfa Romeo Giulia", 2)

const catalogo = [carro1, carro2, carro3, carro4, carro5, carro6, carro7, carro8, carro9, carro10, carro11, carro12, carro13, carro14, carro15]

//funcion para mostrar el catalogo
function mostrarCatalogo(catalogo){
    catalogo.forEach(carro => {
        carro.mostrarData()
    });
}

//funcion para realizar filtro por marca
function buscarMarca(catalogo){
    let marcaBuscar = prompt("Ingresa el nombre de la marca que buscas")
    let busqueda = catalogo.filter(
        (carro)=> carro.marca.toLowerCase() == marcaBuscar.toLowerCase()
    )
    if(busqueda.length == 0){
        console.log("No contamos con esa marca en nuestro catálogo")
    }else{
        console.log(busqueda)
        mostrarCatalogo(busqueda)
    }
}

//funcion para ordenar alfabeticamente
let ordenamiento = {"1956 Aston Martin": 1, "1956 Jaguar": 2, "1957 Thunderbird": 3, "'62 Corvette Gasser": 4, "1965 Ford C900": 5, "1970 Pontiac Firebird": 6, "1986 Toyota Van": 7, "2015 Alfa Romeo Giulia": 8, "Aston Martin Vantage GTE": 9, "Lolux": 10, "Lotus Emira": 11, "Porsche 935": 12, "Sweet Driver": 13, "Toon'd '83 Chevy Silverado": 14, "Tooned Volkswagen Golf Mk1": 15};
function ordenarAlfabeticamente(catalogo){
    console.table(catalogo.sort((a, b) => {
      if(a.modelo == b.modelo) {
        return 0; 
      }
      if(a.modelo < b.modelo) {
        return -1;
      }
      return 1;
    }))

}

//funcion para realizar compra
function opcionCarro(){
    let carros = parseInt(prompt(`¿Cuáles carros desea comprar?
	1: HotWheels 1970 Pontiac Firebird $${precio}
	2: HotWheels Tooned Volkswagen Golf Mk1 $${precio}
	3: HotWheels Porsche 935 $${precio}
	4: HotWheels Sweet Driver $${precio}
	5: HotWheels Toon'd '83 Chevy Silverado $${precio}
	6: HotWheels Lolux $${precio}
	7: HotWheels 1986 Toyota Van $${precio}
	8: HotWheels Lotus Emira $${precio}
	9: HotWheels Aston Martin Vantage GTE $${precio}
	10: HotWheels '62 Corvette Gasser $${precio}
    11: "Matchbox 1956 Jaguar" $${precio}
	12: "Matchbox 1957 Thunderbird" $${precio}
	13: "Matchbox 1965 Ford C900" $${precio}
	14: "Matchbox 1956 Aston Martin" $${precio}
	15: "Matchbox 2015 Alfa Romeo Giulia" $${precio}
	16 = Escribe 16 para finalizar compra`))
    comprar(carros)
}
function comprar(seleccionCarros){
        switch(seleccionCarros){
            case 1:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro1.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 2:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro2.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 3:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro3.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 4:
                total += precio
                cantidad = i++                                                    
                console.log(`${buyer} has agregado ${carro4.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 5:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro5.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 6:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro6.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 7:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro7.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 8:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro8.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 9:
                total += precio
                cantidad = i++
                console.log(`${buyer} has agregado ${carro9.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 10:
                total += precio
                cantidad = i++            
                console.log(`${buyer} has agregado ${carro10.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 11:
                total += precio
                cantidad = i++            
                console.log(`${buyer} has agregado ${carro11.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 12:
                total += precio
                cantidad = i++            
                console.log(`${buyer} has agregado ${carro12.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 13:
                total += precio
                cantidad = i++            
                console.log(`${buyer} has agregado ${carro13.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 14:
                total += precio
                cantidad = i++            
                console.log(`${buyer} has agregado ${carro14.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 15:
                total += precio
                cantidad = i++            
                console.log(`${buyer} has agregado ${carro15.modelo} con éxito. Total de productos agregados: ${cantidad}.`);
                break
            case 16:
                let pregunta = prompt("Desea continuar comprando?").toLowerCase();
                if (pregunta == "no") {
                    if (total != 0) {
                        console.log(`RESUMEN DE COMPRA: ${buyer} el total de compra es $${total} y llevas ${cantidad} carros hoy. Te enviaremos tu compra a ${direccion} y la información de contacto en nuestra base de datos es teléfono: ${telefono} y correo electrónico: ${correo}. ¡Gracias por tu visita!`)
                    } else {
                        console.log(`¡${buyer}, no agregaste productos al carrito! Te esperamos la próxima.`)
                    }
                }
                break
            default: 
                console.log("Ingresa el número correspondiente para agregar al carrito.");
            }
        
            }
        
        
            


//variables
let buyer = prompt("Bienvenidas y bienvenidos a The Collective Store. ¿Cómo te llamas?")
let correo = prompt("¿Cúal es tu correo electrónico?")
let telefono = prompt("¿A qué número te podemos contactar?")
let direccion = prompt("¿Dónde te entregamos?")
let precio = 2
let cantidad = 0
let total = 0
let i = 1

//menu de opciones
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver carros disponibles
                        2 - Buscar carros por marca
                        3 - Ver por orden alfabetico
                        4 - Comprar
                        0 - Salir
                        `))
    menu(opcion)
}

function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`¡${buyer}, gracias por visitar The Collective Store. Te esperamos la próxima`)
        break    
        case 1:
            mostrarCatalogo(catalogo)
        break 
        case 2: 
            buscarMarca(catalogo)
        break 
        case 3:
            ordenarAlfabeticamente(catalogo)
        break
        case 4:
            opcionCarro()
        break
        default: 
        alert(`Ingrese una opción correcta`)
    }
}
let salir = false
while(salir!=true){
    preguntarOpcion()
}