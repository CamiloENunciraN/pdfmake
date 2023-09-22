    var data= [
    { name: 'Bartek', age: 34 },
    { name: 'John', age: 27 },
    { name: 'Elizabeth', age: 30 },
    { name: 'Elizabeth', age: 30 },
    { name: 'Elizabeth', age: 30 },
];
    var data2= [
    { name: 'camilo', age: 34, estado: 'activo' },
    { name: 'John', age: 27, estado: 'Inactivo'  },
    { name: 'Elizabeth', age: 30 , estado: 'activo' },
    { name: 'Elizabeth', age: 30 , estado: 'activo' },
    { name: 'Elizabeth', age: 30 , estado: 'activo' },
];
//cuando click en el boton
document.getElementById('generarpdf_boton').onclick=function() {
    // body... 
    generarPDF();
}

function generarPDF () {
var fecha=new Date();
var dd = {

    header: { table: {
        headerRows: 2,
        widths: [ 'auto', '*', 80 ],

        body: [
          [ { text: 'three.png', rowSpan:2, alignment: 'center' },{ text: 'PROYECTOS INGENIERIA DE SISTEMAS, UNIVERSIDAD FRANCISCO DE PAULA SANTANDER, CUCUTA', bold: true, colSpan:2, alignment: 'center' , fillColor: '#cccccc', fontSize: 10},''],
          [ '', { text: 'Proyecto: ', bold: true , fillColor: '#eeeeee' , fontSize: 8}, { text: 'Fecha: '+fecha.toLocaleDateString(), bold: true , fillColor: '#eeeeee', fontSize: 8} ],
        ]
      },
       margin: [ 40, 40, 40, 40 ] 
         },

    content: [
      {
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [ 'auto', '*' ],

        body: [
          [ { text: 'Ficha del Proyecto', bold: true,colSpan: 2, alignment: 'center' , fillColor: '#cccccc' },''],
          [ { text: 'Nombre: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Autor: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Fecha: ', bold: true , fillColor: '#eeeeee', fontSize: 10},{ text: 'Proyecto', fontSize: 8}],
          [ { text: 'Tipo: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Estado: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Enlace: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'Proyecto', fontSize: 8}],
          [ { text: 'Descripcion: ', bold: true , fillColor: '#eeeeee', fontSize: 10}, { text: 'P royecto', fontSize: 8}],

        ]
      },
        margin: [ 0, 10, 0, 10 ]
    },
  //      { text: 'Dynamic parts', style: 'header' },
        table(data, ['name', 'age'], 'involucrados'),
        table(data2, ['name', 'age'], 'historial'),
        table(data2, ['name', 'age'], 'historial'),
        table(data2, ['name', 'age'], 'historial'),
        table(data2, ['name', 'age'], 'historial'),
        table(data2, ['name', 'age'], 'historial'),
        table(data2, ['name', 'age'], 'historial'),
        
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
pdfMake.createPdf(dd).open();
//pdfMake.createPdf(docDefinition).download();

}
function table(data, columns, title) {
    return {
        table: {
            headerRows: 2,
            widths: [ 'auto', '*' ],
            body: buildTableBody(data, columns, title)

        },
        margin: [ 0, 10, 0, 10 ] 
    };
}
function buildTableBody(data, columns, title) {
    var body = [];
    var encabezado=[ { text: title, bold: true,colSpan: columns.length , alignment: 'center' , fillColor: '#cccccc'},''];
    var titulos=[ { text: columns[0], bold: true, fillColor: '#cccccc',fontSize: 10},
                  { text: columns[1], bold: true, fillColor: '#cccccc',fontSize: 10}];
    body.push(encabezado);
    body.push(titulos);

    data.forEach(function(row) {
        var dataRow = [];

        columns.forEach(function(column) {
            dataRow.push({ text: row[column].toString(),fontSize: 8});
        })

        body.push(dataRow);
    });

    return body;
}
