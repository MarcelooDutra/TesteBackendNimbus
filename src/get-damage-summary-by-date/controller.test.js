const controller = require("./controller");

test("should return average, maximum and minimum events daily in date range", async function () {
  const dateStart = "2023-12-22";
  const dateEnd = "2024-01-05";

  const result = await controller.execute(dateStart, dateEnd);

  expect(result).toBeDefined();
  expect(Array.isArray(result)).toBe(true);
});
