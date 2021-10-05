import * as app from "../components/app";
import * as math from "../components/math";
// Set all module functions to jest.fn
jest.mock("../components/math.js");
test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});