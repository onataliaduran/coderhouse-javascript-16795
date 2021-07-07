
// -------------------------------- EJERCICIO: Simular operaciones bancarias 
// OPERACIONES: 
// Transferir
// Retirar

// -------------------------------- Llamado/Invocación funciones
transferir('456789');
retirar('123456', 2000);


// -------------------------------- Implementación
function transferir(cbu) { 
    console.log('***** Inicio de TRANSFERIR *****');
    
    // Aquí el paso a paso: 
    // Obtener el CBU 
    if(cbu != '') {
        // Ingresar monton 
        let monto = prompt('ingrese el monto a transferir:');
        // Corroborar datos 
        console.log('Quiere transferir: ' + monto + ' a este cbu: ' + cbu);
        // Si esta todo OK realiamos la operacion, de lo contrario salir
        let validar = prompt('quiere proseguir? SI o NO ? VEA LA CONSOLA');
        if(validar.toUpperCase() === 'SI') {
            console.log('Se realizó la operación');
        } else {
            console.log('Se canceló la operación');
        }       
    } else {
        console.log('Necesito el dni para proseguir');
    }
}


function retirar(dni, montoRetiro) {
    console.log('***** Inicio de RETIRAR *****');

    // proceso:
    // solicitar dni 
    if(!dni) {
        console.log('Lo siento, sin DNI no puedo ejecutar esta operación');
    } else {
        // continuo con la operación 
        // valida que tenga una cuenta en el banco y la buscar cuenta con el dni
        let exiteCuenta = obtenerDatosDeCuenta(dni, 'validacion');
        console.log('La cuenta existe?: ', exiteCuenta);
        
        if(exiteCuenta) {
            // ver saldo disponible 
            let montoDisponible = obtenerDatosDeCuenta(dni, 'saldo');
            console.log('Saldo disponible?: ', montoDisponible);
            // realizo la operación
            console.log('Se retiraron ' + montoRetiro + ' de su cuenta');
            console.log('Su saldo disponible ahora es: ', (montoDisponible - montoRetiro));
        } else {
            console.log('No existe cuenta con ese dni');
        }
    }
}

 
function obtenerDatosDeCuenta(dni, valorDeRetorno) {
    console.log('***** Inicio de OBTENER DATOS DE CUENTA *****');

    switch(dni) {
        case '123456': {
            let CBU = 157784;
            let nombre = 'Ignacio Perez';
            let saldo = 12000;
            console.log('Usuario existente, con CBU: ' + CBU + '\nNombre: ' + nombre + '\nSaldo disponible es: ' + saldo);
            if(valorDeRetorno === 'validacion') return true;
            else if(valorDeRetorno === 'saldo') return saldo;
        }
        case '456789': {
            let CBU = 854795;
            let nombre = 'Carlos Garcia';
            let saldo = 30000;
            console.log('Usuario existente, con CBU: ' + CBU + '\nNombre: ' + nombre + '\nSaldo disponible es: ' + saldo);
            if(valorDeRetorno === 'validacion') return true;
            else if(valorDeRetorno === 'saldo') return saldo;
        }
        default: 
            console.log('No existen cuentas con ese DNI'); 
            return false;
    }
}


// -------------------------------- EJERCICIO: Simular carrito de compras
// OPERACIÓN: 
// Agregar producto al carrito

// -------------------------------- Llamado/Invocación de la función 
agregarProducto('ZAPATOS', 2);


// -------------------------------- Implementación
function agregarProducto(producto, cantidad) {
    console.log('***** Inicio de AGREGAR PRODUCTO *****');

    let inventarioDisponible = obtenerInventario(producto); 
    // let inventarioDisponible = 3;
    // Obtener el producto a agregar 
    if(!producto) {
        console.log('Sin un producto no puedo realizar nada');
    } else {
        // establecer la cantidad 
        if(inventarioDisponible === 0) {
            console.log('De este producto no hay unidades disponibles');
        } else {
            console.log('Se agrego el producto: ' + producto + ' exitosamente ' + 'y la cantidad fue: ' + cantidad);
        }
    }
}


function obtenerInventario(producto) {
    let disponibles;

    switch(producto.toUpperCase()) {
        case 'ZAPATOS': 
            disponibles = 9;
            break;
        case 'MEDIAS': 
            disponibles = 9;
            break;
        default: 
            console.log('Ese producto no exite');
    }

    console.log('disponibles', disponibles);
    return disponibles; 
}





