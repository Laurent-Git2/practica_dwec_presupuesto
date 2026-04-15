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

function CrearGasto(descripcion,valor) //funcion constructora= ne retourne rien attention! //“Je définis une fonction appelée CrearGasto
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
 }

 //JS2
 //crear 2 variables locales
 let gastos=[];
 let idGasto=0;

//crear funciones vacias

function listarGastos()
{}

function anyadirGasto()
{}

function borrarGasto()
{}

function calcularTotalGastos()
{}

function calcularBalance()
{}
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
    calcularBalance
}
