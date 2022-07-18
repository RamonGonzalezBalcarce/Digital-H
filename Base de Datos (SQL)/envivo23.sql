-- 1) Empleados
-- a) Crear un SP que liste los apellidos y nombres de los empleados ordenados
-- alfabéticamente.
-- b) Invocar el SP para verificar el resultado.
DELIMITER $$ 
CREATE PROCEDURE sp_apellidos_nombre_empleadosASC() 
begin
	select 
		empleados.Apellido,empleados.Nombre
	from
		empleados
	order by
		empleados.Apellido ASC;
end $$

CALL sp_apellidos_nombre_empleadosASC() ;

-- 2) Empleados por ciudad
-- a) Crear un SP que reciba el nombre de una ciudad y liste los empleados de esa
-- ciudad.
-- b) Invocar al SP para listar los empleados de Seattle.
DELIMITER $$ 
CREATE PROCEDURE sp_empleadosxciudad(IN ciudad varchar(300)) 
begin
	select 
		empleados.Apellido,empleados.Nombre
	from
		empleados
	where 
		empleados.Ciudad=ciudad;
end $$

call sp_empleadosxciudad('Seattle')

-- 3) Clientes por país
-- a) Crear un SP que reciba el nombre de un país y devuelva la cantidad de clientes
-- en ese país.
-- b) Invocar el SP para consultar la cantidad de clientes en Portugal.

DELIMITER $$

CREATE PROCEDURE clientesPais(IN pais varchar(15), out cantidad int)
BEGIN
	SELECT count(*) into cantidad 
    from 
		clientes 
    where 
		clientes.Pais = pais;
END $$

call clientesPais('USA',@cantidad);
select @cantidad;

-- 4) Productos sin stock
-- a) Crear un SP que reciba un número y liste los productos cuyo stock está por
-- debajo de ese número. El resultado debe mostrar el nombre del producto, el
-- stock actual y el nombre de la categoría a la que pertenece el producto.
-- b) Listar los productos con menos de 10 unidades en stock.
-- c) Listar los productos sin stock.

DELIMITER $$

CREATE PROCEDURE sp_productos_menor_stock(IN numero int)
BEGIN
	SELECT 
		productos.ProductoNombre, 
        productos.UnidadesStock as 'Stock Actual',
        categorias.CategoriaNombre as 'Nombre de la categoria'
    from 
		productos 
	JOIN 
		categorias on categorias.CategoriaID=productos.CategoriaID
	where 
		 productos.UnidadesStock < numero;
END $$
 call sp_productos_menor_stock(10);
 
-- 5) Ventas con descuento
-- a) Crear un SP que reciba un porcentaje y liste los nombres de los productos que
-- hayan sido vendidos con un descuento igual o superior al valor indicado,
-- indicando además el nombre del cliente al que se lo vendió.
-- b) Listar la información de los productos que hayan sido vendidos con un
-- descuento mayor al 10%.
--  
DELIMITER $$
CREATE PROCEDURE productosClientes(IN porcentaje int)
BEGIN
	SELECT Productos.ProductoNombre from FacturaDetalle 
    inner join Productos ON FacturaDetalle.ProductoID = Productos.ProductoID
    inner join Facturas on FacturaDetalle.FacturaID = Facturas.FacturaID
    inner join Clientes on Facturas.ClienteID = Clientes.ClienteID
    where (Descuento*100) >= porcentaje ;
END $$

call productosClientes(10);