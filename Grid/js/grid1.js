/*
grid1.js
Uso de tabla con información fija con ExtJS
*/

Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	//Definir datos
	//El espacio de nombres "data" implica que ahí se mantiene información de la aplicación 
	//La clase Store implica un almacén de datos en cliente (puede ser fijo o provenir del servidor)
	Ext.create('Ext.data.Store', {   
    storeId: 'datosSchedule', //identificador del almacenamiento para usar posteriormente
    fields:[ 'clave', 'materia','docente', 'hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'tipo', 'creditos'], //campos que forman el "registro"
    data: [ //en este caso, es un arreglo de objetos
        { clave: '7g4C', materia: 'Programacion Logica y Funcional', docente: 'Ulises Juarez Martinez', hora: '07-08', lunes:'L5', martes:'L5', miercoles:'L5', jueves:'L5', viernes:'', tipo:'MN', creditos:'4'},
        { clave: '7gAC', materia: 'Aplicaciones Enriquecidas de Internet', docente: 'Monica Ruiz Martinez', hora: '08-09', lunes:'L1', martes:'L1', miercoles:'L1', jueves:'L1', viernes:'L1', tipo:'MN', creditos:'5'},
        { clave: '7g3A', materia: 'Taller de Investigacion I', docente: 'Marmol Enrique Santos Quinteros', hora: '10-11', lunes:'CB1', martes:'CB1', miercoles:'CB1', jueves:'CB1', viernes:'', tipo:'MN', creditos:'4'},
        { clave: '6g6A', materia: 'Ingenieria de Software', docente: 'Concepcion Nava Arteaga', hora: '11-12', lunes:'13', martes:'13', miercoles:'13', jueves:'13', viernes:'13', tipo:'MP', creditos:'5'},
        { clave: '7gBC', materia: 'Arquitectura de Software para la Web', docente: 'Alma Ivonne Sanchez Garcia', hora: '12-13', lunes:'L6', martes:'L6', miercoles:'L6', jueves:'L6', viernes:'L6', tipo:'MN', creditos:'4'},
        { clave: '7g2A', materia: 'Conmutacion y Enrutamiento de Redes de Datos', docente: 'Ignacio Lopez Martinez', hora: '14-15', lunes:'L10', martes:'L10', miercoles:'L10', jueves:'L10', viernes:'L10', tipo:'MN', creditos:'5'},
        { clave: '6g5C', materia: 'Programacion Web', docente: 'Manuel Panzi Utrera', hora: '15-16', lunes:'L1', martes:'L1', miercoles:'L1', jueves:'L1', viernes:'L1', tipo:'MP', creditos:'5'}
		]
	});
	
	//Definir tabla y relacionarla
	Ext.create('Ext.grid.Panel', {
		title: 'Horario',
		//headerPosition: 'top', //probar con y sin atributo
		store: Ext.data.StoreManager.lookup('datosSchedule'), // Al administrador de almacen busque relación con almacenamiento
		columns: [ //columnas de tabla, pueden ser menos que en el almacenamiento
			{ text: 'Clave', 
				dataIndex: 'clave', //nombre del "campo" del "registro"
				sortable: false, //permite o no que se reordene la información
				hideable: false}, //permite o no que se oculte la columna
			{ text: 'Materia', 
				dataIndex: 'materia', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Docente', 
				dataIndex: 'docente', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Hora', 
				dataIndex: 'hora', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Lunes', 
				dataIndex: 'lunes', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Martes', 
				dataIndex: 'martes', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Miercoles', 
				dataIndex: 'miercoles', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Jueves', 
				dataIndex: 'jueves', 
				flex: 1, //1 o mayor significa que el tamaño de la columna se adaptará al contenido
				menuDisabled:true
			},
			{ text: 'Viernes', 
				dataIndex: 'viernes',
				flex: 1,
				menuDisabled:true
			},
			{ text: 'Tipo', 
				dataIndex: 'tipo',
				flex: 1,
				menuDisabled:true
			},
			{ text: 'Creditos', 
				dataIndex: 'creditos',
				flex: 1,
				menuDisabled:true
			}
		],
		
		height: 250,
		width: 1365,
		renderTo: Ext.getBody() //se pega al body
	});
});
