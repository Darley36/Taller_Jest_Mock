import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // A la variable originalAdd se asigna la funcion add del componente math
  //el cual es el encargado de sumar
  const originalAdd = math.add;
  // con la propiedad jest simulamos la funcion
  math.add = jest.fn(originalAdd);
  //verificamos la funcion doAdd psando dos parametros 1 y 2
  //y validando que la suma sea 3
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // Se utiliza la funcion add como implementacion y se nombra mock
  // se compara si el metodo doAdd realiza el mismo procedimiento que la implementacion mock
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // se vuelve todo a la normalidad devolviendo la implementacion
  // y comparando que los valores 1 y 2 sean iguales a 3
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});