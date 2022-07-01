/* Se necesita crear una calculadora de promedio en la cual el usuario ingrese la cantidad de exámenes,
luego el usuario debe ingresar las notas de los exámenes  y posterior a eso la calculadora le debe entregar
 el promedio */

function agregarFila(tableID, notaID) {
    let nota = document.getElementById(notaID);
    let notaVal = nota.value;

    if (notaVal != '') {
        let table = document.getElementById(tableID);
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = notaVal;
        nota.focus();
        nota.value = '';
    } else {
        alert("Debe ingresar un número válido");
        return;
    }
}

function quitarFila(tableID) {
    let table = document.getElementById(tableID);
    let rowCount = table.rows.length;
    table.deleteRow(rowCount - 1);
}

function promedioNotas(tableID) {
    /*
        Se valida que la tabla tenga al menos dos notas para poder iniciar el calculo de notas,
        de lo contrario se interrumpe el flujo.
    */
    let table = document.getElementById(tableID);
    rowCount = table.rows.length;
    if (rowCount <= 2) {
        alert("Debe ingresar al menos DOS notas");
        return;
    }

    /*
        Se inicia en 1, dado que la primera fila(row) de la tabla es el encabezado 'Nota'.
        En cada iteracion se suman las notas de cada fila con la anterior
    */
    let sumNotas = 0;
    for (let i = 1; i < rowCount; i++) {
        let tr = table.rows[i];
        let td = tr.cells[0].innerText;
        sumNotas = parseFloat(sumNotas) + parseFloat(td);
        console.log("total Notas: ", sumNotas);
    }

    /*
        Se calcula la suma total de las notas.
        El total de notas ingresadas se le resta 1, dado que la primera fila es el encabezado 'Nota' de la tabla.
        Se captura el elemento 'p' del HTML (promVal) y se agrega el valor del proemdio de notas.
    */
    let promedio = sumNotas / (rowCount - 1);
    let promVal = document.getElementById("promVal");
    promVal.textContent = "Promedio: " + promedio.toFixed(2);
}
