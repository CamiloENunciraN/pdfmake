
var fecha=new Date();
var info=["PRoyecto01","Camilo"];
var stuff = [
    'aaaaaaaaaaaaaaaaaaa',
    'bbbbbbbbbbbbbbbbbbb',
    'ccccccccccccccccccc',
    'ddddddddddddddddddd'
];


//cuando click en el boton
document.getElementById('generarpdf_boton').onclick=function() {
    // body... 
    generarPDF();
}

function generarPDF () {

 var docDefinition = {
  header: { table: {
        headerRows: 2,
        widths: [ 'auto', '*', 80 ],

        body: [
          [ { text: 'three.png', rowSpan:2, alignment: 'center' },{ text: 'PROYECTOS INGENIERIA DE SISTEMAS, UNIVERSIDAD FRANCISCO DE PAULA SANTANDER, CUCUTA', bold: true, colSpan:2, alignment: 'center' , fillColor: '#cccccc', fontSize: 10},''],
          [ '', { text: 'Proyecto: '+info[0] , bold: true , fillColor: '#eeeeee' , fontSize: 8}, { text: 'Fecha: '+fecha.toLocaleDateString(), bold: true , fillColor: '#eeeeee', fontSize: 8} ],
        ]
      },
       margin: [ 40, 40, 40, 40 ] 
         },

  content: [{


      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [ 'auto', '*' ],

        body: [
          [ { text: 'Ficha del Proyecto', bold: true,colSpan: 2, alignment: 'center' , fillColor: '#cccccc' },''],
          [ { text: 'Nombre: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: info[0], fontSize: 8}],
          [ { text: 'Autor: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: info[1], fontSize: 8}],
          [ { text: 'Fecha: ', bold: true , fillColor: '#eeeeee', fontSize: 10},{ text: 'Proyecto', fontSize: 8}],
          [ { text: 'Tipo: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Estado: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Enlace: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Descripcion: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'P royecto', fontSize: 8}],

        ]
      },
        margin: [ 0, 10, 0, 10 ]
    },{
        table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 2,
        widths: [ 'auto', '*', 'auto', 'auto' ],

        body: [
          [ { text: 'Involucrados', bold: true,colSpan: 4, alignment: 'center' , fillColor: '#cccccc'},'','',''],
          [ { text: 'Codigo', bold: true , fillColor: '#eeeeee', fontSize: 10},
            { text: 'Nombre', bold: true , fillColor: '#eeeeee', fontSize: 10},
            { text: 'Correo', bold: true , fillColor: '#eeeeee', fontSize: 10},
            { text: 'Cargo', bold: true , fillColor: '#eeeeee', fontSize: 10} ],
          [ '115555', 'Camilo', 'camilo@correo.com', 'Test' ]
        ]
      },
       margin: [ 0, 10, 0, 10 ] 
    },{
        table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 2,
        widths: [ 'auto', 'auto', '*' ],

        body: [
          [ { text: 'Historial', bold: true,colSpan: 3, alignment: 'center', fillColor: '#cccccc'},'',''],
          [ { text: 'Fecha', bold: true , fillColor: '#eeeeee', fontSize: 10},
            { text: 'Administrador', bold: true , fillColor: '#eeeeee', fontSize: 10},
            { text: 'Descripcion', bold: true , fillColor: '#eeeeee', fontSize: 10} ],
          [ '115555', 'Camilo', 'camilo@correo.com' ]
        ]
      },
       margin: [ 0, 10, 0, 10 ] 
    }
    ],

 footer: function (currentPage, pageCount) {
                    return {
                        table: {
                            widths: ['*','auto'],
                            
                            body: [
                                [{ text: 'Documento generado automaticamente de proyectos del programa ingenieria de sistemas UFPS', fontSize: 8},{ text: "Pagina " + currentPage.toString() + ' of ' + pageCount, fontSize: 8}]
                            ]
                        },
                        margin: [40, 0, 40, 0]
                    };
                },
    pageMargins: [40, 100, 40, 60]

};
pdfMake.createPdf(docDefinition).open();
//pdfMake.createPdf(docDefinition).download();

}

