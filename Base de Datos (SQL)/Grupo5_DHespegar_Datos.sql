-- 1 Listar todos los clientes que su apellido empiece por A, ordenados por apellido de manera ascendente.
-- SELECT * FROM DHespegar.clientes WHERE apellidos LIKE "A%" ORDER BY apellidos;

-- 2 Listar nombre, apellido,dirección de aquellos clientes que en su dirección contengan la palabra “martin”.
-- SELECT nombres, apellidos, direccion FROM DHespegar.clientes WHERE direccion LIKE "%martin%";

-- 3 Listar todos los hoteles que tengan de 30 a 60 habitaciones.
-- SELECT * FROM DHespegar.hoteles WHERE cantidadHabitaciones between 30 and 60;

-- 4 - Mostrar cuál ha sido el mayor importe facturado y llamarlo “Precio Mayor”, también mostrar cuál es el total facturado y llamarlo “TOTAL”.
-- SELECT MAX(precioTotal) as "Precio Mayor", SUM(precioTotal) as "Total" FROM DHespegar.pagos;

-- 5 Listar las reservas que fueron realizadas el día 16/01/2022 entre las 15hs y las 21hs pertenecientes a la sucursal número 5.
-- SELECT * FROM DHespegar.reservas WHERE (fechaRegistro between "22-01-16 15:00:00" AND "22-01-16 21:00:00") AND idSucursal = 5;

-- 6 Mostrar el top 3 de reservas con mayor cantidad de vuelos.
-- SELECT idReserva, count(*) as Total FROM DHespegar.vuelosxreserva group by idReserva order by Total DESC LIMIT 3;

-- 7 Listar los 10 pagos de menor precio.
-- SELECT * FROM DHespegar.pagos ORDER BY precioTotal Limit 10;

-- 8 Listar todos los países ordenados alfabéticamente y con su nombre en mayúsculas.
-- SELECT upper(nombre) FROM DHespegar.paises order by nombre;

-- 9 Mostrar todos las reservas de vuelos que sean de clase turista y el id de vuelo sea 11 o 13.
-- SELECT * FROM DHespegar.vuelosxreserva WHERE idCategoriasVuelos = 2 AND (idVuelo = 11 OR idVuelo = 13);

-- 10 Listar los usuarios que hayan realizado 2 reservas.
-- SELECT idCliente, count(*) as reserva FROM DHespegar.reservas GROUP BY idCliente  having reserva = 2;

-- 11 Mostrar todos los vuelos que tengan como origen Italia o destino Jamaica.
-- SELECT * FROM DHespegar.vuelos WHERE origen = "Italia" or destino = "Jamaica";

-- 12 Mostrar todos los vuelos que tengan como destino Cuba y la cantidad de pasajeros de primera clase sea menor o igual a 15 personas.
SELECT * FROM DHespegar.vuelos WHERE destino = "Cuba" AND cantidadPrimeraClase <= 15;

-- 13 Se desea conocer cuál es la cantidad de vuelos que tienen como origen México.

-- 14 Se desea conocer cuál es la cantidad de reservas realizadas en la sucursal de Mendoza por el cliente cuyo pasaporte es EC158846.
