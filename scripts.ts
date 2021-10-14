class examen{
    //Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.
    public actividad1() :void{

        console.log("Hola Mundo");
    }

    // Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.
    public actividad2() :void{
        let cadena: string= "Hola Mundo.!!";
        console.log(cadena);
    }

    // Escribir un programa que pregunte el nombre del usuario en la consola y 
    //después de que el usuario lo introduzca muestre por pantalla la cadena ¡Hola <nombre>!, 
    //donde <nombre> es el nombre que el usuario haya introducido.
    public actividad3():void{
        let nombre : any=prompt("Ingresa tu nombre");
        let cadena:string="Hola";
        console.log(cadena + ' ' + nombre);
    }

    //Escribir un programa que pregunte el nombre del usuario en la consola y un número 
    //entero e imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número introducido.
    public actividad4():void{
        let nombre: any=prompt("Ingresa tu nombre");
        let iteraciones:any=prompt("¿Cuantas veces quieres que se repita tu nombre.?");
        iteraciones = parseInt(iteraciones);

        for (let i = 1; i <= iteraciones; i++) {
            console.log(i + ' ' + nombre);
        }
    }

    /**
     * 
     * Escribir un programa que pregunte el nombre completo del usuario en la consola 
     * y después muestre por pantalla el nombre completo del usuario tres veces, 
     * una con todas las letras minúsculas, otra con todas las letras mayúsculas 
     * y otra solo con la primera letra del nombre y de los apellidos en mayúscula. 
     * El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.
     */
    public actividad5(): void{
        let nombre:any=prompt("Ingresa tu nombre");
        let paterno:any=prompt("Ingresa tu apellido paterno");
        let materno:any=prompt("Ingresa tu apellido materno");

        let nombreCompleto=nombre+" "+ paterno + " " + materno;

        nombreCompleto = nombreCompleto.toLowerCase();
        let nombreCompleto2= nombreCompleto.toUpperCase();
        
        console.log(nombreCompleto);
        console.log(nombreCompleto2);

        let nombre2= nombre + ""; 
        nombre2.charAt(0).toUpperCase();

        let paterno2 = paterno + "";
        paterno2.charAt(0).toUpperCase();

        let materno2 = materno + "";
        materno2.charAt(0).toUpperCase();

        
        console.log(nombre2 + " " + paterno2 + " " + materno2);
    }

    // Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor de edad o no.
    public actividad6(): void{

        let edad: any=prompt("Ingresa tu edad");
        edad = parseInt(edad);
        if (edad >= 18) {
            console.log("Eres mayor de edad");
        }else{
            console.log("Eres menor de edad");
        }
    }

    /**
     * Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
     *  pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida 
     * por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.
     */
    public actividad7():void{
        let password :any=prompt("Ingresa una contraseña:");

        let pedir_password:any=prompt("Ingrese la contraseña:");

        if (password === pedir_password) {
            console.log("Las contraseñas coinciden");
        }
        else{
            console.log("Las contraseñas no coinciden");
        }
    }

    //Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
    public actividad8(): void{
        let cadena : any=prompt("Ingresa una palabra");

        for (let i = 1; i <= 10; i++) {
            console.log(i + " " + cadena);
            
        }
    }

    // Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los años que ha cumplido (desde 1 hasta su edad).
    public actividad9(): void{
        let edad:any=prompt("Ingresa tu edad");

        for (let i = 1; i <= edad; i++) {
            
            console.log(i + " " +  "años");
            
        }
    }

    /**
     *  Escribir un programa que pregunte al usuario una cantidad a invertir,
     *  el interés anual y el número de años, y muestre por pantalla el capital 
     * obtenido en la inversión cada año que dura la inversión.
     */
    public actividad10(): void{
        let cantidad_invertir:any=prompt("Ingresa una cantidad a invertir:");
        let interes_anual:any=prompt("Ingresa el interes anual");
        let años:any=prompt("Ingresa el numero de años");

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
        

        cantidad_invertir= parseInt(cantidad_invertir);
        interes_anual = parseInt(interes_anual);
        años = parseInt(años);
        let suma = 1 + interes_anual;

        let porciento = interes_anual / 100;
        
        let ganancias1 =Math.pow(suma, porciento);

        let ganancias2= cantidad_invertir * ganancias1

        console.log("Las ganacias futuras fueron:" + " " +  ganancias2);
    }

}

const ejercicio = new examen();

ejercicio.actividad10();