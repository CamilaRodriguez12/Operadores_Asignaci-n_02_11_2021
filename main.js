let mystyle_b = `font-family; color:white; 
            background:black;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;
let mystyle_y = `font-family; color:black; 
            background:yellow;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let x = parseInt(prompt( 'Ingrese un número para el primer dato' ) ); // parsenInt convierte el dato(string) que se ingresa a numero
let y = parseInt(prompt ( 'Ingrese un número para el segúndo dato' ) );

// Operador de asignación "variables"
let nombre = "María Camila";
let apellido = "Rodríguez Cano";
console.log(nombre);
nombre = apellido;
console.log(nombre);
//end asignación

console.log(`%c x: %c ${x} %c y: %c ${y}`,mystyle_b,mystyle_y,mystyle_b,mystyle_y);

//Operador de adición '+' 
console.group("Adicion '+' ");
console.log(`%c Significado %c x = x + y %c  ${x} = ${x} + ${y} `,mystyle_b,mystyle_y,mystyle_b,(x + y));
console.log(`%c Abreviado %c x += y %c  ${x} += ${y} `,mystyle_b,mystyle_y,mystyle_b,(x += y));
console.groupEnd();

console.group("Sustracion '-' ");
console.log(`%c Significado %c x = x - y %c  ${x} = ${x} - ${y} `,mystyle_b,mystyle_y,mystyle_b,(x - y));
console.log(`%c Abreviado %c x -= y %c  ${x} -= ${y} `,mystyle_b,mystyle_y,mystyle_b,(x -= y));
console.groupEnd();

console.group("Multiplicación '*' ");
console.log(`%c Significado %c x = x * y %c  ${x} = ${x} * ${y} `,mystyle_b,mystyle_y,mystyle_b,(x * y));
console.log(`%c Abreviado %c x *= y %c  ${x} *= ${y} `,mystyle_b,mystyle_y,mystyle_b,(x *= y));
console.groupEnd();

console.group("Division '/' ");
console.log(`%c Significado %c x = x / y %c  ${x} = ${x} / ${y} `,mystyle_b,mystyle_y,mystyle_b,(x / y));
console.log(`%c Abreviado %c x /= y %c  ${x} /= ${y} `,mystyle_b,mystyle_y,mystyle_b,(x /= y));
console.groupEnd();

console.group("Resto '%' ");
console.log(`%c Significado %c x = x % y %c  ${x} = ${x} % ${y} `,mystyle_b,mystyle_y,mystyle_b,(x % y));
console.log(`%c Abreviado %c x %= y %c  ${x} %= ${y} `,mystyle_b,mystyle_y,mystyle_b,(x %= y));
console.groupEnd();

console.group("Exponenciación '**' ");
console.log(`%c Significado %c x = x ** y %c  ${x} = ${x} ** ${y} `,mystyle_b,mystyle_y,mystyle_b,(x ** y));
console.log(`%c Abreviado %c x **= y %c  ${x} **= ${y} `,mystyle_b,mystyle_y,mystyle_b,(x **= y));
console.groupEnd();

/*
console.log(`Variable y: `,y);
x = x + y; // también se puede escribir `x += y;`
console.log(`Resultado variable x: `,x);
console.log(`Variable y: `,y);
//end adicion

//Operador de sustración '-' 
let a = 5, b = 20; // para que ambas variables sean let
console.log(`Variable a: `,a);
console.log(`Variable b: `,b);
a = a - b; // también se puede escribir `a -= b;`
console.log(`Resultado variable a: `,a);
console.log(`Variable b: `,b);
//end adicionsustración
*/

