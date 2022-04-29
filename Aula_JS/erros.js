function valida(arr, num){
    try {
        if(!arr && !num) throw new ReferenceError("Parâmetros não encontrados");
        if(typeof arr != 'object') throw TypeError("O array não é do tipo OBJECT");
        if (typeof num != 'number') throw TypeError("O número não é do tipo NUMBER");
        if (arr.length != num) throw RangeError("O tamanho do array é diferente do parâmetro");
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
        } else if (e instanceof TypeError){
            console.log("Este erro é um TyperError")
        }else if (e instanceof RangeError){
            console.log("Este erro é um RangeError")
        } 
        }
            
    }
    
console.log(valida([1,2,3,4],5));