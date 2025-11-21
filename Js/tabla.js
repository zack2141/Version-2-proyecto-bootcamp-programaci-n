
// ruta donde se encuentra el archivo csv
const doc ="../Copia de 02_modern-renewable-energy-consumption.csv"


//caraga el historia de datos generalizado
async function carga_documento() {


   const tbody = document.getElementById("cuerpo") // obtiene el cuerpo de la tabla
   const titulos = document.querySelector("#encabezado")

   
   const datos = await fetch(doc)
   const texto= await datos.text() 

   const separador = texto.split("\n")
   const cuerpo = separador.slice(1)

   

   //crea los encabezados

   titulos.replaceChildren("")
   const encabezado = separador[0].split(",") // toma la primela linea del archivo y separa los datos cade que encuentra una ","

   for(var i=0; i<= encabezado.length;i++){

      if(i!= encabezado.length){
         const columnas = document.createElement("th")

         const nodo = document.createTextNode(encabezado[i])

         columnas.appendChild(nodo)

         titulos.appendChild(columnas)


      }
        
   }

   // recorre los datos y los inserta

   tbody.replaceChildren("")

   cuerpo.forEach((separador)=>{
      const columnas = separador.split(",")// esto separa cada columna de cada linea del archivo

      const fila= document.createElement("tr")

      columnas.forEach((dato)=>{

         const celda = document.createElement("th");
         celda.textContent = dato.trim(); 
         fila.appendChild(celda);

      })

      tbody.appendChild(fila)
   })

}

carga_documento()