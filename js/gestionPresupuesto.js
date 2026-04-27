// TODO: Crear las funciones, objetos y variables indicadas en el enunciado
// TODO: Variable global
let presupuesto=0;//el test 1 no funciona con var

function actualizarPresupuesto(valor) {
    // TODO
    //let valor; ne pas declarer 2 fois
    if(valor>=0 && !isNaN(valor))//ne pas oublier isNAN!! //BLOC1: validacion
    {presupuesto=  valor;//Bloc2: action
        return presupuesto;//retounre le presupuesto pas la valeur // BLOC3: retour
    }
    else{
        console.log("error")//alert no pasa el test= hacer console.log
        return -1;}//pas besoin de mettre valor=-1; return Valor;
    }


function mostrarPresupuesto() //la fonction doit etourner un texte qui contient la valeur de presupuesto
{
    return "Tu presupuesto actual es de "+ presupuesto +" €" // o `Tu presupuesto actual es de ${presupuesto} €`
}

function CrearGasto(descripcion,valor,fecha,...etiquetas) //funcion constructora= ne retourne rien attention! //“Je définis une fonction appelée CrearGasto
{
    this.descripcion=descripcion; //Dans l’objet en cours de création (this)->j’assigne à la propriété descripcion,la valeur du paramètre descripcion
    //JavaScript retourne AUTOMATIQUEMENT :this
    //dans this.descripcion=descripcion: 
    //this.descripcion description= propriete de l objet 
    // //description apres le signe= : le paramètre de la fonction ou valeur passée quand on appelle la fonction
    if(!isNaN(valor) && valor>=0)
    {
        this.valor=valor;
    }
    else
    {
        this.valor=0;
    }
   this.etiquetas=etiquetas;
   //this.fecha= Date.now();
const fechaTs = Date.parse(fecha);

if(!isNaN(fechaTs))
{
    this.fecha = fechaTs;
}
else
{
    this.fecha = Date.now();
}

this.fechaOK = new Date(this.fecha).toLocaleString();

    //METODOS
 this.mostrarGasto=function() //bien mettre this pour faire reference al afonction crear
 {
    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
 }

 this.actualizarDescripcion=function(descripcion)
    {
    this.descripcion=descripcion;
    }
this.actualizarValor=function(valor)
    {
    if(!isNaN(valor) && valor>=0)
    {
    this.valor=valor;
    }
    }
this.mostrarGastoCompleto=function()
{

return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.
Fecha: ${this.fechaOK}
Etiquetas:
- ${this.etiquetas.join("\n- ")}\n`
}

this.actualizarFecha=function(fecha)//- Función de 1 parámetro que actualizará la propiedad fecha del objeto. Deberá recibir la fecha en formato string que sea entendible por la función Date.parse. Si la fecha no es válida, se dejará sin modificar.
{
const fechaTs = Date.parse(fecha);

if(!isNaN(fechaTs))
{
    this.fecha = fechaTs;
    this.fechaOK = new Date(this.fecha).toLocaleString();
}
}

this.anyadirEtiquetas=function(...etiquetas)//Función de un número indeterminado de parámetros que añadirá las etiquetas pasadas como parámetro a la propiedad etiquetas del objeto. Deberá comprobar que no se creen duplicados
{
for(let i = 0; i < etiquetas.length; i++)

    if(!this.etiquetas.includes(etiquetas[i]))
{
    this.etiquetas.push(etiquetas[i]);
}
}

this.borrarEtiquetas=function(...etiquetas)//Función de un número indeterminado de parámetros que recibirá uno o varios nombres de etiquetas y procederá a eliminarlas (si existen) de la propiedad etiquetas del objeto
{
    for(let i = this.etiquetas.length-1; i>=0;i--)//antes con for(let i = 0; i < etiquetas.length; i++) me borraba la nueva posicion siempre
{
    //splice=con posicion
    if(etiquetas.includes(this.etiquetas[i]))
    {
        this.etiquetas.splice(i,1);
    
    }
}
}

this.obtenerPeriodoAgrupacion = function(periodo)//JS3
{
    const fechaObj = new Date(this.fecha);
    let anyo = fechaObj.getFullYear();
let mes = fechaObj.getMonth() + 1;
let dia = fechaObj.getDate();

if(mes < 10)
    {
        mes = "0" + mes;
    }

    if(dia < 10)
    {
        dia = "0" + dia;
    }

    if(periodo == "anyo")
    {
        return anyo;
    }

    if(periodo == "mes")
    {
        return anyo + "-" + mes;
    }

    if(periodo == "dia")
    {
        return anyo + "-" + mes + "-" + dia;
    }
}

}

 //JS2
 //crear 2 variables locales
 let gastos=[];
 let idGasto=0;

//crear funciones vacias

function listarGastos()
{
    return gastos;// ✔ Devuelve un array vacío si no hay gastos (valor por defecto)
}

function anyadirGasto(gasto)
{
    gasto.id=idGasto;//Añadir al objeto gasto pasado como parámetro una propiedad id cuyo valor será el valor actual de la variable global idGasto.
    idGasto++;//Incrementar el valor de la variable global idGasto
    gastos.push(gasto);//Añadir el objeto gasto pasado como parámetro a la variable global gastos. El gasto se debe añadir al final del array.
}

function borrarGasto(idGasto)
{
    //Función de 1 parámetro que eliminará de la variable global gastos el objeto gasto cuyo id haya sido pasado como parámetro. Si no existe un gasto con el id proporcionado, no hará nada.
for (let i=0; i<gastos.length; i++)
{
    if (gastos[i].id==idGasto)
    {gastos.splice(i,1)}
}
}

function calcularTotalGastos()
{
let suma=0;
for (let i=0;i<gastos.length;i++)
{
    suma=suma+gastos[i].valor;  
}
return suma
}

function calcularBalance()
{
  return presupuesto-calcularTotalGastos();  
}
function filtrarGastos()
{

}

function agruparGastos()
{

}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}
