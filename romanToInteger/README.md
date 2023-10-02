# Descripcion del Ejercicio

Los números romanos están representados por siete símbolos diferentes: 
`I, V, X, L, C, D y M`

| Simbolo | Valor |
|---------|-------|
|I|1|
|V|5| 
|X|10| 
|L|50|
|C|100|
|D|500|
|M|1000|

Por ejemplo, `2` se escribe como `II` en números romanos, solo dos unidades sumadas. `12` se escribe `XII`, que es simplemente `X + II`. El número `27` se escribe `XXVII`, que es `XX + V + II`.

Los números romanos suelen escribirse de mayor a menor, de izquierda a derecha. Sin embargo, el número cuatro no es `IIII`. En cambio, el número cuatro se escribe como `IV`. Como el uno está antes del cinco, lo restamos para obtener cuatro. El mismo principio se aplica al número nueve, que se escribe como `IX`. Hay seis casos en los que se utiliza la resta:

- Se puede colocar `I` antes de `V` (5) y `X` (10) para formar 4 y 9.
- Se puede colocar `X` antes de `L` (50) y `C` (100) para formar 40 y 90.
- `C` se puede colocar antes de `D` (500) y `M` (1000) para formar 400 y 900.

Dado un número romano, conviértalo a un número entero.

### Solución:

Lo primero que haces es crear un objeto llamado numbers con los datos de la tabla.
```
numbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
```

Después creamos una función llamada romanToInt y le pasamos el `s` como argumento
```
function romanToInt(s) {...}
```

1. Dentro de nuestra función creamos una variable llamada `result` y le asignamos un `cero`.
2. Creamos un ciclo `for` el cual va a recorrer cada caracter del string `s` (que es el numero romano).
3. Se crean las variables`let current` y `let next`  Para cada carácter, obtenemos su valor numérico del objeto numbers `let current = numbers[s[i]]`.Current es el valor del carácter actual, y `let next = numbers[s[i + 1]]` next es el valor del siguiente carácter en el string.
4. `if (current < next) {...}` Comprobamos si el valor del carácter actual es menor que el valor del siguiente. Si es así, significa que estamos en un caso de sustracción (como IV o IX).
5. `result -= current` Si estamos en un caso de sustracción, restamos el valor del carácter actual al resultado.
6. `else {...}` Si no estamos en un caso de sustracción, significa que el valor del carácter actual es mayor o igual al siguiente.
7. `result += current` En este caso, sumamos el valor del carácter actual al resultado.
8. `return result` Devolvemos el resultado final después de terminar de procesar todos los caracteres.

```
numbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function romanToInt(s) {
    let result = 0;

    for (let i = 0 ; i < s.length ; i++) {
        let current = numbers[s[i]]
        let next = numbers[s[i + 1]]

        if (current < next) {
            result -= current
        } else {
            result += current
        }
    }
    return result
}
```