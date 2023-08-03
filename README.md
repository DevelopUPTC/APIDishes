# API RESTFull - Gestión de Platos

API que permite la gestión de platos. 

## Herramientas

- "express": "^4.18.2"
- "mongoose": "^7.4.1"
- "cors": "^2.8.5",

## Estructura del Objeto JSON

```json
{
  "idDish":String,
  "name":String,
  "calories":Number,
  "isVegetarian":Boolean,
  "value":Number,
  "comments":String
}
```

## Puerto por defecto
3000

## Métodos

- __GET__ Retorna una colección con los documentos de la base de datos. Si el estado (state) del objeto de respuesta es `true` los datos se obtienen del arreglo `data`, si es `false` ocurrió un error descrito en el campo `error`

- __GET/:id__ Retorna el objeto especificado en el _ObjectId. Si el estado (state) del objeto de respuesta es `true` los datos se obtienen del campo `data`, si es `false` ocurrió un error descrito en el campo `error`

- __POST__ Permite enviar un objeto en formato JSON para agregar a la base de datos, si el estado es `true` la respuesta se obtiene del campo `data`, si es false y el `codigo de estado (status)` es 208, el valor del campo `idDish` ya existe, si el `codigo de estado (status)` es 500 ocurrió un error del servidor, descrito en el campo `error`

-__PUT__ Perimite actualizar un objeto, se envía el objeto en un documento JSON y el `ObjectId` del objeto a modificar como parámetro. Si el estado (state) del objeto de respuesta es `true` los datos se obtienen del campo `data`, si es `false` ocurrió un error descrito en el campo `error` 

-__DELETE__ Perimite eliminar un objeto, se envía el `ObjectId` del objeto a eliminar como parámetro. Si el estado (state) del objeto de respuesta es `true` los datos se obtienen del campo `data`, si es `false` ocurrió un error descrito en el campo `error` 

