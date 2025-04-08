let servicio = [
    ["lunes", "María"],
    ["martes", "Luis"],
    ["miércoles", "Antonia"],
    ["jueves", "Pedro"],
    ["viernes", "Marisa"]
]
function encargado(dia) {
    let dias = dia.toLowerCase()
    let encargado = servicio.find((s) => s[0] === dias)

    if (encargado) {
        console.log("Este día se encarga" + encargado)
    } else {
        console.log("No hay servicio este día");
    }
}
encargado("Lunes")
