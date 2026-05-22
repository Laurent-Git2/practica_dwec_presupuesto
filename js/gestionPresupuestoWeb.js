

function mostrarDatoEnId(idElemento, valor)
{
/*idElemento - Hará referencia al id del elemento HTML donde se insertará el resultado en formato texto.
valor - El valor a mostrar.*/
let elemento= document.getElementById(idElemento);//👉 cherche dans la page l’élément dont l’id est celui reçu.
elemento.innerHTML=valor;                         //👉 remplace le contenu par la valeur reçue.

}



function mostrarGastoWeb(idElemento, gasto)
{
let elemento= document.getElementById(idElemento);
elemento.innerHTML+=`
<div class="gasto">
<div class="gasto-descripcion">${gasto.descripcion}</div>
<div class="gasto-fecha">${gasto.fechaOk}</div>
<div class="gasto-valor">${gasto.valor} €</div>
<div class="gasto-etiquetas">${gasto.etiquetas.join(", ")}</div>
`;
}
/*<!-- PERIODO será "mes", "día" o "año" en función de si el parámetro
       de la función es "mes", "dia" o "anyo" respectivamente -->*/
function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo)
{
let elemento= document.getElementById(idElemento);
//let agrup=agruparGastos(periodo);
let html=`
<div class="agrupacion">
  <h1>Gastos agrupados por ${periodo}</h1>`;

for(let divagrup in agrup)
    {
        html+=`
            <div class="agrupacion-dato">
                <span class="agrupacion-dato-clave">${divagrup}</span>
                <span class="agrupacion-dato-valor">${agrup[divagrup]}</span> <!--👉 "dans l’objet agrup, va chercher la valeur dont le nom est contenu dans divagrup"-->
            </div>`;
    }
        
html += `</div>`;//pout fermer le div class agrupacion

elemento.innerHTML+=html;
}




export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}