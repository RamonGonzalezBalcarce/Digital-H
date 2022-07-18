-- Camada 7
-- Grupo 4
-- Integrantes: 
-- -Rubén Escobar
-- -Ramón Balcarce
-- -Ignacio Aracena
-- -Malena Milagros Grande
-- -Nicolás Sanchez
-- -Nicolás Amaya

-- Consigna - CheckPoint II
-- 1. Listar todos los clientes que su apellido empiece por A, ordenados por apellido
-- de manera ascendente.
select * from clientes
where apellidos like 'a%'
order by apellidos;
-- 10


-- 2. Listar nombre, apellido,dirección de aquellos clientes que en su dirección
-- contengan la palabra “martin”.
select nombres, apellidos, direccion from clientes
where direccion like '%martin%';
-- 5


-- 3. Listar todos los hoteles que tengan de 30 a 60 habitaciones.
select * from hoteles
-- where cantidadHabitaciones > 30 and cantidadHabitaciones < 60
where cantidadHabitaciones between 30 and 60;
-- 13


-- 4. Mostrar cuál ha sido el mayor importe facturado y llamarlo “Precio Mayor”,
-- también mostrar cuál es el total facturado y llamarlo “TOTAL”.
select max(precioTotal) as 'Precio Mayor', sum(precioTotal) as Total from pagos;
-- 1


-- 5. Listar las reservas que fueron realizadas el día 16/01/2022 entre las 15hs y las
-- 21hs pertenecientes a la sucursal número 5.
select * from reservas
where idsucursal = 5 and 
date(fechaRegistro) = '2022-01-16' and 
time(fechaRegistro) > '15:00:00' and 
time(fechaRegistro) < '21:00:00';
-- 3


-- 6. Mostrar el top 3 de reservas con mayor cantidad de vuelos.
select cantidadPrimeraClase + cantidadTurista as reservaTotal, nroVuelo from vuelos
order by reservaTotal desc
limit 3;
-- 3


-- 7. Listar los 10 pagos de menor precio.
select * from pagos
order by precioTotal
limit 10;
-- 10


-- 8. Listar todos los países ordenados alfabéticamente y con su nombre en
-- mayúsculas.
select nombre as NOMBRE from paises
order by nombre;
-- 30


-- 9. Mostrar todos las reservas de vuelos que sean de clase turista y el id de vuelo
-- sea 11 o 13.
select idreserva from vuelosxreserva
where idvuelo = 11 or idVuelo = 13 and idcategoriasvuelos = 2; -- clase turista
-- 11


-- 10. Listar los usuarios que hayan realizado 2 reservas.
select idCliente, count(codigoReserva) from reservas
group by idCliente
having count(codigoReserva) = 2;
-- 9


-- 11. Mostrar todos los vuelos que tengan como origen Italia o destino Jamaica.
select * from vuelos
where origen like '%italia%' or destino like '%jamaica%';
-- 8 


-- 12. Mostrar todos los vuelos que tengan como destino Cuba y la cantidad de
-- pasajeros de primera clase sea menor o igual a 15 personas.
select * from vuelos
where destino like '%cuba%' and cantidadPrimeraClase <= 15;
-- 2


-- 13. Se desea conocer cuál es la cantidad de vuelos que tienen como origen México.
select count(nroVuelo) from vuelos
where origen like '%mexico%';
-- 1 


-- 14. Se desea conocer cuál es la cantidad de reservas realizadas en la sucursal de
-- Mendoza por el cliente cuyo pasaporte es EC158846.
select * from sucursales
where ciudad like '%mendoza%'; -- idSucursal = 1
select * from clientes
where numeroPasaporte = 'EC158846'; -- idcliente = 13
select * from reservas
where idSucursal = 1 and idcliente = 13 ;
-- 2


-- 15. Cual es el promedio de pasajeros de clase turista que tengan como destino
-- Jamaica.
select avg(cantidadTurista) from vuelos
where destino like '%jamaica%';
-- 1


-- 16. Cual es el monto total de los pagos realizados en efectivo.(campo:preciototal ).
select * from metodospago; --  efectivo = 1
select sum(precioTotal) from pagos
where idMetodosPago = 1;
-- 1


-- 17. Mostrar el tercer importe de pagos realizado con menor valor.
select * from pagos
order by precioTotal
limit 1
offset 2;
-- 1


-- 18. Se desea conocer la cantidad de reservas realizadas en Chile más
-- específicamente en el 'Santiago Hotel'.
select * from hoteles
where nombre like '%Santiago Hotel%'; -- idhotel = 15
select count(idReserva) from hotelesxreserva
where idHotel = 15;
-- 1


-- 19. Agregar al cliente Solari Carlos cuyo pasaporte es AR221422 , domiciliado en
-- calle Av.Libertad 451 de la ciudad de Córdoba-Argentina, teléfono móvil
-- +542645667714.
select * from clientes;
select * from paises; -- para conocer el ID de argentina
insert into clientes (nombres, apellidos, numeroPasaporte, direccion, ciudad, telefono, idPais)
values ('Carlos', 'Solari', 'AR221422', 'Av.Libertad 451', 'Córdoba', '+542645667714', 1);
select * from clientes;
-- 71

-- 20. Modificar el tipo de hospedaje de 'Pensión Completa' a 'Pensión Premium'
select * from tiposhospedaje;
update tiposhospedaje
set nombre = 'Pensión Premium'
where idtiposhospedaje = 2;
select * from tiposhospedaje;
-- 2