use emarket;
/*1) Cálculo de edad
a) Crear un SP que muestre apellidos, nombres y edad de cada empleado,
    debe calcular la edad de los empleados a partir de la fecha de nacimiento y
    que tengan entre n y n años de edad.
*/
DELIMITER $$
CREATE PROCEDURE sp_empleadosEdades(IN n1 int,in n2 int)
BEGIN
	SELECT
	    empleados.apellido,
	    empleados.nombre,
	    CASE
	        WHEN TIMESTAMPDIFF(YEAR, empleados.FechaNacimiento,CURDATE()) between n1 and n2 then TIMESTAMPDIFF(YEAR,empleados.FechaNacimiento,CURDATE())
	        else 'Sin Calcular' end as edad
    from
		empleados;
END $$

call sp_empleadosEdades(50,60);

/*Actualización de productos
a) Crear un SP que reciba un porcentaje y un nombre de categoría y
    actualice los productos pertenecientes a esa categoría, incrementando las unidades pedidas según el
    porcentaje indicado. Por ejemplo: si un producto de la categoría Seafood tiene 30 unidades pedidas,
    al invocar el SP con categoría Seafood y porcentaje 10%, el SP actualizará el valor de unidades pedidas
    con el nuevo valor 33. */

DELIMITER $$
CREATE PROCEDURE sp_sumarProcentaje (IN porcentaje INT,IN nombreCategoria varchar(15))
BEGIN
    update
        productos

    inner join categorias on categorias.CategoriaID=productos.CategoriaID
    set
        productos.UnidadesPedidas= productos.UnidadesPedidas + (porcentaje*productos.UnidadesPedidas/100)
    where
        categorias.CategoriaNombre=nombreCategoria;

END $$

call sp_sumarProcentaje(10,'Beverages');
/*3) Actualización de empleados
a) Crear un SP que cree una tabla con los nombres, apellidos y teléfono de contacto de todos los empleados que hayan sido contratados con fecha anterior a una fecha dada.

  b) Ejecutar el SP para generar una tabla de empleados con fecha de contratación anterior a 01/01/1994.
c) Consultar la tabla generada y validar los resultados.
*/
DELIMITER $$
CREATE PROCEDURE sp_actualizarEmpleado (IN fecha DATETIME)
BEGIN
	SELECT
	    empleados.apellido,
	    empleados.nombre,
	    empleados.Telefono
	FROM
	    empleados
	where
	    FechaContratacion<fecha;

END $$

call sp_actualizarEmpleado('1994-01-01 00:00:00')