-- Ejercicio 1

-- 1. Crear una vista para poder organizar los envíos de las facturas. Indicar número
-- de factura, fecha de la factura y fecha de envío, ambas en formato dd/mm/yyyy,
-- valor del transporte formateado con dos decimales, y la información del
-- domicilio del destino incluyendo dirección, ciudad, código postal y país, en una
-- columna llamada Destino.

-- CREATE VIEW envios_facturas as
-- SELECT 
-- 	facturas.FacturaID as numFactura, 
--     date_format(facturas.FechaFactura, '%d/%m/%Y') as fechaFactura,
--     date_format(facturas.FechaEnvio, '%d/%m/%Y') as fechaEnvio,
--     truncate(facturas.Transporte, 2) as valorTransporte,
--     concat(facturas.DireccionEnvio, ' ', facturas.CiudadEnvio, ' ', facturas.CodigoPostalEnvio, ' ', facturas.PaisEnvio) as destino
-- FROM facturas;

-- 2. Realizar una consulta con todos los correos y el detalle de las facturas que
-- usaron ese correo. Utilizar la vista creada.

-- SELECT 
-- 	correos.Compania,
--     envios_facturas.numFactura,
--     envios_facturas.fechaFactura,
--     envios_facturas.valorTransporte,
--     envios_facturas.destino
-- FROM envios_facturas
-- JOIN facturas on envios_facturas.numFactura = facturas.FacturaID
-- JOIN correos on facturas.EnvioVia = correos.CorreoID;

-- 3. ¿Qué dificultad o problema encontrás en esta consigna? Proponer alguna
-- alternativa o solución.
-- a la vista le falta la FK para conectar con correo
-- CREATE VIEW envios_facturas as
-- SELECT 
-- 	facturas.FacturaID as numFactura, 
--     date_format(facturas.FechaFactura, '%d/%m/%Y') as fechaFactura,
--     date_format(facturas.FechaEnvio, '%d/%m/%Y') as fechaEnvio,
--     truncate(facturas.Transporte, 2) as valorTransporte,
--     facturas.EnvioVia,
--     concat(facturas.DireccionEnvio, ' ', facturas.CiudadEnvio, ' ', facturas.CodigoPostalEnvio, ' ', facturas.PaisEnvio) as destino
-- FROM facturas;

-- SELECT * FROM envios_facturas
-- JOIN correos on envios_facturas.EnvioVia = correos.CorreoID;

-- Ejercicio 2

-- 1. Crear una vista con un detalle de los productos en stock. Indicar id, nombre del
-- producto, nombre de la categoría y precio unitario.
-- CREATE VIEW detalles_prod_stock as
-- SELECT ProductoID, ProductoNombre, categorias.CategoriaNombre , PrecioUnitario FROM productos
-- JOIN categorias on productos.CategoriaID = categorias.CategoriaID
-- WHERE UnidadesStock > 0;

-- 2. Escribir una consulta que liste el nombre y la categoría de todos los productos
-- vendidos. Utilizar la vista creada.
-- SELECT detalles_prod_stock.ProductoNombre, detalles_prod_stock.CategoriaNombre 
-- FROM detalles_prod_stock
-- JOIN facturadetalle on detalles_prod_stock.ProductoID = facturadetalle.ProductoID;

-- 3. ¿Qué dificultad o problema encontrás en esta consigna? Proponer alguna
-- alternativa o solución.
-- el problema es que se repiten los productos

-- SELECT detalles_prod_stock.ProductoNombre, detalles_prod_stock.CategoriaNombre, count(detalles_prod_stock.ProductoNombre) 
-- FROM detalles_prod_stock
-- JOIN facturadetalle on detalles_prod_stock.ProductoID = facturadetalle.ProductoID
-- GROUP BY detalles_prod_stock.ProductoNombre, detalles_prod_stock.CategoriaNombre;