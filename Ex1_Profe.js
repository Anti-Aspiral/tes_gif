let productos = [
    ["Laptop", 1200],
    ["Celular", 850],
    ["Memoria", 160],
];

// 1
function preciodelProducto(nombre) {
    let precio = productos.filter((producto) => producto[0].toLowerCase() == nombre.toLowerCase())
    if (precio.length > 0) {
        console.log("El precio es = $" + precio[0][1] + " " + nombre)
    } else {
        console.log("No tenemos")
    }
}

// 2
function totaldelaCompra(lista) {
    let total = 0
    for (let i = 0; i < lista.length; i++) {
        let encontrado = productos.filter(producto => producto[0].toLowerCase() == lista[i].toLowerCase())
        if (encontrado.length > 0) {
            total += encontrado[0][1]
        }
    }
    console.log("El total de la compra es = $" + total)
}



// 4
function eliminarProducto(nombre) {
    let index = productos.findIndex((p) => p[0].toLowerCase() == nombre.toLowerCase())
    if (index !== -1) {
        productos.splice(index, 1)
        console.log("Producto eliminado:", nombre)
    } else {
        console.log("Producto no encontrado")
    }
    console.log("Productos actuales:", productos)
}

// 5
function agregarProducto(nombre, precio) {
    let existe = productos.some((p) => p[0].toLowerCase() == nombre.toLowerCase())
    if (existe) {
        console.log("El producto ya existe")
    } else {
        productos.push([nombre, precio])
        console.log("Producto agregado:", nombre)
    }
    console.log("Productos actuales:", productos)
}

// 6
function buscarProducto(nombre) {
    let resultado = productos.filter((producto) => producto[0].toLowerCase() == nombre.toLowerCase())
    if (resultado.length > 0) {
        console.log("Producto encontrado: " + resultado[0][0] + " $" + resultado[0][1])
    } else {
        console.log("Producto no encontrado")
    }
}

preciodelProducto("Laptop")               
totaldelaCompra(["Laptop", "Memoria"])            
eliminarProducto("Memoria")            
agregarProducto("Tablet", 500)     
buscarProducto("Tablet")              
