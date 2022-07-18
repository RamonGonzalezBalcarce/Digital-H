-- Vistas - Parte I

-- Clientes
-- 1. Crear una vista con los siguientes datos de los clientes: ID, contacto, y el
-- Fax. En caso de que no tenga Fax, colocar el teléfono, pero aclarándolo. Por
-- ejemplo: “TEL: (01) 123-4567”.
drop view vw_contacto;
create view vw_contacto_clientes as
select ClienteID as ID, Contacto, 
case when fax = '' then concat('TEL: ', telefono) 
else fax end as Fax
from clientes;

-- 2. Se necesita listar los números de teléfono de los clientes que no tengan
-- fax. Hacerlo de dos formas distintas:
-- a. Consultando la tabla de clientes.
select telefono from clientes
where fax = '';

-- b. Consultando la vista de clientes.
select * from vw_contacto
where Fax like '%TEL%';

-- Proveedores
-- 1. Crear una vista con los siguientes datos de los proveedores: ID,
-- contacto, compañía y dirección. Para la dirección tomar la dirección,
-- ciudad, código postal y país.
drop view vw_concacto_proveedores;
create view vw_contacto_proveedores as
select ProveedorID as ID, Contacto, Compania, 
concat(Direccion, ' - ', Ciudad, ' - ', CodigoPostal, ' - ', Pais) as Direccion
from proveedores;

-- 2. Listar los proveedores que vivan en la calle Americanas en Brasil. Hacerlo
-- de dos formas distintas:
-- a. Consultando la tabla de proveedores.
select * from proveedores
where Direccion like '%Americana%';

-- b. Consultando la vista de proveedores.
select * from vw_contacto_proveedores
where Direccion like '%Americanas%';

-- Vistas - Parte II
-- 1. Crear una vista de productos que se usará para control de stock. Incluir el ID
-- y nombre del producto, el precio unitario redondeado sin decimales, las
-- unidades en stock y las unidades pedidas. Incluir además una nueva
-- columna PRIORIDAD con los siguientes valores:
-- ■ BAJA: si las unidades pedidas son cero.
-- ■ MEDIA: si las unidades pedidas son menores que las unidades
-- en stock.
-- ■ URGENTE: si las unidades pedidas no duplican el número de
-- unidades.
-- ■ SUPER URGENTE: si las unidades pedidas duplican el número
-- de unidades en caso contrario.
create view vw_control_stock as
select ProductoID as ID, ProductoNombre as Nombre,
round(PrecioUnitario, 0) as PrecioUnitario,
UnidadesStock, UnidadesPedidas,
case when UnidadesPedidas = 0 then 'Baja'
	 when UnidadesPedidas < UnidadesStock then 'Media'
     when UnidadesPedidas < (UnidadesStock * 2) then 'Urgente'
     else 'Super Urgente'
     end as Prioridad
from productos;

-- 2. Se necesita un reporte de productos para identificar problemas de stock.
-- Para cada prioridad indicar cuántos productos hay y su precio promedio.
-- No incluir las prioridades para las que haya menos de 5 productos.
create view vw_problemas_stock as
select Prioridad, count(*), avg(PrecioUnitario) from vw_control_stock
group by Prioridad
having count(*) > 5

