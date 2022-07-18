// 1 Listar todas las categorías junto con información de sus productos. Incluir todas
las categorías aunque no tengan productos.
SELECT categorias.CategoriaID, categorias.CategoriaNombre, categorias.Descripcion
FROM categorias
LEFT JOIN productos ON productos.CategoriaID=categorias.CategoriaID
group by categorias.CategoriaID, categorias.CategoriaNombre, categorias.Descripcion

//2 Listar la información de contacto de los clientes que no hayan comprado nunca
en emarket.
SELECT clientes.ClienteID
FROM clientes
LEFT JOIN facturas ON facturas.ClienteID=clientes.ClienteID
where facturas.ClienteID is null
group by clientes.ClienteID

//3 Realizar un listado de productos. Para cada uno indicar su nombre, categoría, y
la información de contacto de su proveedor. Tener en cuenta que puede haber
productos para los cuales no se indicó quién es el proveedor.
SELECT productos.ProductoNombre, productos.CategoriaID, proveedores.Contacto
FROM productos
LEFT JOIN proveedores ON productos.ProveedorID= proveedores.ProveedorID
group by productos.ProductoNombre, productos.CategoriaID, proveedores.Contacto 

//4 Para cada categoría listar el promedio del precio unitario de sus productos.
SELECT categorias.CategoriaID, categorias.CategoriaNombre, avg(productos.PrecioUnitario) as 'Promedio de precios unitarios'
FROM categorias
JOIN productos ON productos.CategoriaID=categorias.CategoriaID
group by categorias.CategoriaID, categorias.CategoriaNombre

//5 Para cada cliente, indicar la última factura de compra. Incluir a los clientes que
nunca hayan comprado en e-market.
SELECT clientes.ClienteID, max(facturas.FechaFactura)
FROM clientes
LEFT JOIN facturas ON facturas.ClienteID=clientes.ClienteID
group by clientes.ClienteID

//6 Todas las facturas tienen una empresa de correo asociada (enviovia). Generar un
listado con todas las empresas de correo, y la cantidad de facturas
correspondientes. Realizar la consulta utilizando RIGHT JOIN.
SELECT correos.CorreoID, correos.Compania, count(facturas.FacturaID) as 'Cantidad de factura'
FROM facturas
RIGHT JOIN correos ON facturas.EnvioVia=correos.CorreoID
group by correos.CorreoID, correos.Compania
