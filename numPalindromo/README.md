# Descripcion del Ejercicio

Dada una matriz de números enteros y un objetivo entero, devuelva índices de los dos números de manera que sumen el objetivo.

Puede suponer que cada entrada tendría exactamente una solución y no puede utilizar el mismo elemento dos veces.

Puede devolver la respuesta en cualquier orden.

##### Ejemplo 1:

Input: `x = 121` <br>
Output: `true` <br>
Explicacion: 121 se lee como 121 de izquierda a derecha y de derecha a izquierda. 

##### Ejemplo 2:

Input: `x = -121` <br>
Output: `false` <br>
Explicacion: De izquierda a derecha se lee -121. De derecha a izquierda se lee 121-. Por lo que no es un palindromo.

##### Ejemplo 3:

Input: `x = 10` <br>
Output: `false` <br>
Explicacion: Se lee 01 de derecha a izquierda Por lo que no es un palindromo.

## Solución: Verificación de Palíndromos

Supongamos que `x = 121`, por lo que su forma invertida debería ser `121`.

Creamos una funcion llamada `isPalindrome` y como argumento recibe `x`

> **Nota:** Los palíndromos no pueden ser negativos, por lo que descartamos cualquier número que sea menor a cero.

Creamos dos variables, invertido y original:
- invertido la inicializamos en cero `(invertido = 0)`
- original le asignamos x `(original = x)`


#### Primera Iteración
Dentro del ciclo `while`, estamos haciendo:
1. `(invertido * 10)` que sería `(0 * 10)` lo que da `0`.
2. `(x % 10)` que sería `(121 % 10)` el residuo de `121 / 10` es `1`.
Ahora, `x = 12.1`.
3. En esta primera iteración ahora tenemos `0 + 1`, por lo que `invertido = 1`.
4. Después, `x` es `12`.
5. `Math.floor` convierte `12.1` a `12`, por lo que `x = 12`.

#### Segunda Iteración
1. `(invertido * 10)` que sería `(1 * 10)` lo que da `10`.
2. `(x % 10)` que sería `(12 % 10)` el residuo de `12 / 10` es `2`.
Ahora, `x = 1.2`.
3. Ahora tenemos `10 + 2`, por lo que `invertido = 12`.
4. Después, `x` es `1`.
5. `Math.floor` convierte `1.2` a `1`, por lo que `x = 1`.
6. Verifica `invertido === original` --> `12 === 121` --> Falso.

#### Tercera Iteración
1. `(invertido * 10)` que sería `(12 * 10)` lo que da `120`.
2. `(x % 10)` que sería `(1 % 10)` el residuo es `1`.
   Ahora, `x = 0.1`.
3. Ahora tenemos `120 + 1`, por lo que `invertido = 121`.
4. Después, `x` es `0`.
5. `Math.floor` convierte `0.1` a `0`, por lo que `x = 0`.
6. Verifica `invertido === original` --> `121 === 121` --> Verdadero.

Como `x` ya no es mayor a cero, el ciclo termina.
