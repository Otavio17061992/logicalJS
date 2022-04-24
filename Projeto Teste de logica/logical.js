//Implemente os métodos abaixo:

//1) Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function metodo1(numero1, letra1) {
    let ArrayLetras = []
    for (i = 1; i <= numero1; i++) {
        ArrayLetras.push(letra1);
    }

    console.log(ArrayLetras)
    return ArrayLetras;
}

metodo1(3,'a')
//2) Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function ReverseArray() {
    let array1 = [1, 2, 3, 4]
    let reversearray1 = []

    for (i = array1.length - 1; i > 0; i-- ) {
        reversearray1.push(array1[i])
    }
    console.log(reversearray1)
    return reversearray1;
}

ReverseArray()


//3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
//Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]


function filtro() {
    const myArray = [1,2,'',undefined];
    const resposta = myArray.filter(number => number >= 1);

    console.log(resposta);
    return resposta;
}
    
filtro()

//4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
//Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

 let array1 = [
     ['c' , 2],
     ['d', 4]
 ]

function arrayToObject(array) {
    let result = {}
    for (const element of array) {
        result [element[0]] = element[1];
    }
    console.log(result)
    return result
}

arrayToObject(array1)


//5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]


function semItens(array01, numero01, numero02) {
    const myArray3 = array01.filter(newarray => newarray !== numero01 && newarray !==numero02)

    console.log(myArray3)
    return myArray3
}

semItens([5,4,3,2,5], 5,3)


//6) Implemente um método que retorne um array, sem valores duplicados.
//Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function valorDuplicado(arrayM) {

    const newArray = [];

    for(unique of arrayM) {
        if(newArray.indexOf(unique) === -1) {
            newArray.push(unique);
        }
    }

    console.log(newArray);
    return newArray;
}

valorDuplicado([1,2,3,3,2,4,5,4,7,3])



//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function booleanArrayReturn(arrayPrime, arraySecond){

    const response = arrayPrime.length == arraySecond.length && arrayPrime.every(function(value,index){
        return value === arraySecond[index];
    })
    console.log(response);
    return response
}

booleanArrayReturn([1,2,3,4],[1,2,3,4])

//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
//Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function removeAninhamentos() {
    const arrayPrincipal = [1, 2, [3], [4,5]];
    const novoArray = [];

    const render = arrayPrincipal.map(number => novoArray.push(number));

    console.log(render);
    return render
}

removeAninhamentos()

//9) Implemente um método divida um array por uma quantidade passada por parâmetro.
//Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function diviArrayPorArray(newArray9, number09) {
    const array09 = new Array(Math.ceil(newArray9.length / number09)).fill().map(
        _ => newArray9.splice(0, number09)
    )

    console.log(array09)
    return array09    
}


diviArrayPorArray([1, 2, 3, 4, 5], 2)



//10) Implemente um método que encontre os valores comuns entre dois arrays.
//Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function valoresiguaisArrays(newArray01, newArray02) {
    const newArray10 = newArray01.filter(number => newArray02.includes(number));


    console.log(newArray10);
    return newArray10;
}

valoresiguaisArrays([6, 8], [8, 9])