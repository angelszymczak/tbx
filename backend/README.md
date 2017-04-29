# Ejercicio 2
  Diseñar una API REST para manejo de Stock, que incluya lista, alta y baja de stock para un
  producto (no es necesaria la API para administrar productos).

# Planteo
  + Se planteó un ABM del Modelo `Stock`, el cual contiene dos simples atributos `productName` y `count`.
  + Asegúrese de instalar las dependencias con `npm` y MongoDB.
  + Puede servir la aplicación con `npm start` (este está configurado para inciar con nodemon).
  + Rutas:

  | Verbo  | Ruta            |     Params             |
  |:------:|:---------------:|:----------------------:|
  | GET    | /api/stocks     |                        |
  | POST   | /api/stocks     | { productName, count } |
  | GET    | /api/stocks/:id |                        |
  | PUT    | /api/stocks/:id | { productName, count } |
  | DELETE | /api/stocks/:id |                        |
