const controller = require("./controller");

describe("Controller Test", () => {
  test("should return average, maximum and minimum events daily in date range", async () => {
    const dateStart = "2023-12-22";
    const dateEnd = "2024-01-05";

    const result = await controller.execute(dateStart, dateEnd);

    expect(result).toBeDefined();
    expect(result.data).toBeDefined(); // Verifica se a propriedade 'data' está presente
    expect(Array.isArray(result.data)).toBe(true);

    // Verifica se cada item no array possui a estrutura esperada
    result.data.forEach((item) => {
      expect(item).toHaveProperty("date");
      expect(item).toHaveProperty("avgDamage");
      expect(item).toHaveProperty("maxDamageEvent");
      expect(item).toHaveProperty("minDamageEvent");

      expect(typeof item.date).toBe("string");
      expect(typeof item.avgDamage).toBe("number");
      expect(typeof item.maxDamageEvent).toBe("object");
      expect(typeof item.minDamageEvent).toBe("object");

      expect(item.maxDamageEvent).toHaveProperty("event");
      expect(item.maxDamageEvent).toHaveProperty("damage");
      expect(item.minDamageEvent).toHaveProperty("event");
      expect(item.minDamageEvent).toHaveProperty("damage");

      expect(typeof item.maxDamageEvent.event).toBe("string");
      expect(typeof item.maxDamageEvent.damage).toBe("number");
      expect(typeof item.minDamageEvent.event).toBe("string");
      expect(typeof item.minDamageEvent.damage).toBe("number");
    });
  });
});

