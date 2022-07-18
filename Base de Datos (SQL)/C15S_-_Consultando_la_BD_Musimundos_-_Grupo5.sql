-- 2. Listar las canciones cuya duración sea mayor a 2 minutos.
-- SELECT * FROM canciones
-- where milisegundos >= 120000;

-- 2. Listar las canciones cuyo nombre comience con una vocal.
-- SELECT * FROM canciones
-- where nombre like 'a%' or 
-- nombre like 'e%' or 
-- nombre like 'i%' or 
-- nombre like 'o%' or 
-- nombre like 'u%';

-- select * from canciones
-- where LEFT(nombre, 1)  in ('a','e','i','o','u')



-- 3. Listar las canciones ordenadas por compositor en forma descendente. 
-- Luego, por nombre en forma ascendente. Incluir únicamente aquellas
-- canciones que tengan compositor.

-- SELECT * FROM canciones
-- where compositor != ''
-- order by compositor desc , nombre asc;

-- 4a. Listar la cantidad de canciones de cada compositor.
-- SELECT compositor, count(*) as Cant FROM canciones
-- group by compositor;

-- 4b. Modificar la consulta para incluir únicamente los compositores que
-- tengan más de 10 canciones.
-- SELECT compositor, count(*) as Cant FROM canciones
-- group by compositor
-- having Cant > 10;

-- 5a. Listar el total facturado agrupado por ciudad.
-- SELECT ciudad_de_facturacion, sum(total) as total FROM facturas
-- group by ciudad_de_facturacion;

-- 5b. Modificar el listado del punto (a) mostrando únicamente las ciudades de Canadá.
-- SELECT pais_de_facturacion, ciudad_de_facturacion, sum(total) as total FROM facturas
-- where pais_de_facturacion like 'Canadá'
-- group by ciudad_de_facturacion;

-- 5c. Modificar el listado del punto (a) mostrando únicamente las ciudades con una facturación mayor a 38.
-- SELECT ciudad_de_facturacion, sum(total) as total FROM facturas
-- group by ciudad_de_facturacion
-- having total > 38;

-- 6a. Listar la duración mínima, máxima y promedio de las canciones.
-- SELECT min(milisegundos), max(milisegundos), avg(milisegundos) FROM canciones

-- 6b. Modificar el punto (a) mostrando la información agrupada por género.
-- SELECT min(milisegundos), max(milisegundos), avg(milisegundos), generos.nombre FROM canciones
-- join generos on canciones.id_genero = generos.id
-- group by id_genero
