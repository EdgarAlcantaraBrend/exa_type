var examen = /** @class */ (function () {
    function examen() {
    }
    //Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
    examen.prototype.actividad1 = function () {
        console.log("Hola Mundo");
    };
    // Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
    examen.prototype.actividad2 = function () {
        var cadena = "Hola Mundo.!!";
        console.log(cadena);
    };
    // Escribir un programa que pregunte el nombre del usuario en la consola y 
    //después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola <nombre>!, 
    //donde <nombre> es el nombre que el usuario haya introducido.
    examen.prototype.actividad3 = function () {
        var nombre = prompt("Ingresa tu nombre");
        var cadena = "Hola";
        console.log(cadena + ' ' + nombre);
    };
    //Escribir un programa que pregunte el nombre del usuario en la consola y un número 
    //entero e imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número introducido.
    examen.prototype.actividad4 = function () {
        var nombre = prompt("Ingresa tu nombre");
        var iteraciones = prompt("¿Cuantas veces quieres que se repita tu nombre.?");
        iteraciones = parseInt(iteraciones);
        for (var i = 1; i <= iteraciones; i++) {
            console.log(i + ' ' + nombre);
        }
    };
    /**
     *
     * Escribir un programa que pregunte el nombre completo del usuario en la consola
     * y después muestre por pantalla el nombre completo del usuario tres veces,
     * una con todas las letras minúsculas, otra con todas las letras mayúsculas
     * y otra solo con la primera letra del nombre y de los apellidos en mayúscula.
     * El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.
     */
    examen.prototype.actividad5 = function () {
        var nombre = prompt("Ingresa tu nombre");
        var paterno = prompt("Ingresa tu apellido paterno");
        var materno = prompt("Ingresa tu apellido materno");
        var nombreCompleto = nombre + " " + paterno + " " + materno;
        nombreCompleto = nombreCompleto.toLowerCase();
        var nombreCompleto2 = nombreCompleto.toUpperCase();
        console.log(nombreCompleto);
        console.log(nombreCompleto2);
        var nombre2 = nombre + "";
        nombre2.charAt(0).toUpperCase();
        var paterno2 = paterno + "";
        paterno2.charAt(0).toUpperCase();
        var materno2 = materno + "";
        materno2.charAt(0).toUpperCase();
        console.log(nombre2 + " " + paterno2 + " " + materno2);
    };
    // Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor de edad o no.
    examen.prototype.actividad6 = function () {
        var edad = prompt("Ingresa tu edad");
        edad = parseInt(edad);
        if (edad >= 18) {
            console.log("Eres mayor de edad");
        }
        else {
            console.log("Eres menor de edad");
        }
    };
    /**
     * Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
     *  pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
     * por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.
     */
    examen.prototype.actividad7 = function () {
        var password = prompt("Ingresa una contraseña:");
        var pedir_password = prompt("Ingrese la contraseña:");
        if (password === pedir_password) {
            console.log("Las contraseñas coinciden");
        }
        else {
            console.log("Las contraseñas no coinciden");
        }
    };
    //Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
    examen.prototype.actividad8 = function () {
        var cadena = prompt("Ingresa una palabra");
        for (var i = 1; i <= 10; i++) {
            console.log(i + " " + cadena);
        }
    };
    // Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
    examen.prototype.actividad9 = function () {
        var edad = prompt("Ingresa tu edad");
        for (var i = 1; i <= edad; i++) {
            console.log(i + " " + "años");
        }
    };
    /**
     *  Escribir un programa que pregunte al usuario una cantidad a invertir,
     *  el interés anual y el número de años, y muestre por pantalla el capital
     * obtenido en la inversión cada año que dura la inversión.
     */
    examen.prototype.actividad10 = function () {
        var cantidad_invertir = prompt("Ingresa una cantidad a invertir:");
        var interes_anual = prompt("Ingresa el interes anual");
        var años = prompt("Ingresa el numero de años");
        /**
         * Formula para calcular la calcular el valor futuro de una cantidad
         *
         * VF = M(1+i)^n
         *
         * Donde:
         * M = cantidad a invertir
         * i = Interes anual
         * N = Numero de periodos
         */
        cantidad_invertir = parseInt(cantidad_invertir);
        interes_anual = parseInt(interes_anual);
        años = parseInt(años);
        var suma = 1 + interes_anual;
        var porciento = interes_anual / 100;
        var ganancias1 = Math.pow(suma, porciento);
        var ganancias2 = cantidad_invertir * ganancias1;
        console.log("Las ganacias futuras fueron:" + " " + ganancias2);
    };
    return examen;
}());
var ejercicio = new examen();
ejercicio.actividad10();
