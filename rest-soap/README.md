# Ejercicio 4
  Algunas preguntas:
  1. ¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y porque?
      Utilizadaría alguna librería en el cliente que me permita comunicarme con un servicio de
      almacenamiento, como AWS S3 o Wistia (para el caso de archivos multimedia). De esta manera delego
      el Storage en un servicio y libero carga en los recursos de mi servidor de Backend. Por último,
      el flujo continua con las respuestas del servidor de almacenamiento, y esta respuesta es la que
      se persiste en nuestras bases de datos.
      Para recuperarlos en Fronted deberá pedirlo al servidor del Storage, liberándonos también de la
      subida de archivos al cliente.

  2. ¿Implementaría un cache del lado del cliente? ¿Porque?
     Hoy en día las "páginas webs" ya no son lo que eran antes, no se limitan a ser sencillos blogs.
     Las aplicaciones actuales hoy están orientadas a brindar una mejor experiencia de usuario, con lo
     cual estas aplicaciones son mas inteligentes y se "personalizan" según nuestros usos habituales.
     Esto hace tiempo era algo difícil de concebir dado a las limitaciones con la tecnología de Software
     disponible al momento y las limitaciones de Hardware existentes.
     Si bien hoy en día se trata de lograr productos cada vez mas eficientes en cuanto costos de recursos,
     es cierto que también las plataformas disponibles son cada vez poderosas. En consecuencias, hay
     información que no se vuelve a descargar siempre, con lo que nos beneficiamos una mejor Perfomance.
     Por otra parte, almacenar cierta información estratégica nos permite operar con aplicaciones que
     no disponen siempre de la conexión a Internet, y en beneficio, podemos sincronizarlas en su próxima
     conexión.
     Desde este punto de vista, implementar una caché en el cliente es una práctica factible, tanto en
     optimización de la experiencia de usuario como en consumo de recursos.

  3. ¿Cuál es la diferencia entre SOAP y REST?
     No es un standar, es arquitectura basada en estándares: HTTP, URL, Representacion de recursos (XML/HTML/GIF/JPEG), tipos MME (text/xml, text/html)

     SOAP es un protocolo para el intercambio de mensajes sobre redes de computadoras, generalmente usando HTTP. Está basado en XML, esto facilita la lectura, pero también los mensajes resultan más largos y, por lo tanto, considerablemente más lentos de transferir.

     En aspectos técnicos en REST las operaciones se definen en los mensajes, o que lo convierte en un componente débilmente acoplado, mientras que en SOAP
     las operaciones son definidas como puertos WSDL, lo que lo hace un componente fuertemente acoplado.

     Podemos notar el consumo de recursos en REST es bajo con respecto a SOAP.

     El protocolo SOAP está centrado en el diseño de aplicaciones distribuidas , con lo cual suelen tener muchas operaciones con pocos recursos, al diferencia de REST que provée unas pocas acciones para muchos recursos, esta a diferencia de SOAP está centrada en la escalabilidad y rendimiento para sistemas distribuidos de hipermedia.

     Por otro lado la estructura de la información es diferente, REST utiliza un XML auto descriptivo (JSON), mientras que SOAP XML Schema, lo cual hace que sea de tipado fuerte.

     Otro aspecto importante es la seguridad HHTPS (REST) y WS SECURITY (SOAP).
