# Ejercicio 1
  Escribe un script que a partir de un array de ints devuelva un array de strings aplicando las siguientes reglas:
  1. Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
  2. Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
  3. Devuelve FizzBuzz si el número es divisible por 3 y por 5.

# Planteo
  + Obsérvese, que para que un número devuelva FizzBuzz debería cumlir la regla número 3, la cual es excluyente que
    ambos sean divisibles por los dos números a la vez. Sin embargo, es posible que cumpla parcialmente alguna condición
    de la regla 1 y de la regla 2 (por ejemplo inclusión de digito 5 y por otro lado divisibilidad por 3) lo cual también
    devuelve FizzBuzz dado que no se especifica lo contrario. Tales casos se pueden observar en el siguiente cuadro para
    los números 51 y -552.
  + No se especifica ningún tipo de retorno para aquellos que no cumplen con regla alguna.

  | Número |   Fizz?  |  Fizz?       |  Buzz?   |  Buzz?       | FizzBuzz?       |  Resultado |
  |:------:|:--------:|:------------:|:--------:|:------------:|:---------------:|:----------:|
  |        |  Div 3?  |  Incluye 3?  |  Div 5?  |  Incluye 5?  | Div 3? Y Div 5? |            |
  |0       |          |              |          |              |                 |            |
  |3       |  √       | √            |          |              |                 |    Fizz    |
  |5       |          |              | √        | √            |                 |    Buzz    |
  |13      |          | √            |          |              |                 |    Fizz    |
  |51      |  √       |              |          | √            |                 |  FizzBuzz  |
  |100     |          |              | √        |              |                 |    Buzz    |
  |15      |  √       |              | √        |              |       √         |    Fizz    |
  |30      |  √       | √            | √        |              |       √         |  FizzBuzz  |
  |-552    |  √       |              |          | √            |                 |  FizzBuzz  |
