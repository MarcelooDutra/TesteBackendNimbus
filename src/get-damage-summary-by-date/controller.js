const repository = require("./repository");

module.exports = {
  async execute(dateStart, dateEnd) {
    const dbAlerts = await repository.execute(dateStart, dateEnd);

    let alertas = []
    for await (let item of dbAlerts) {
      const check = alertas.filter(alert => alert.date === item.date).length
      if (!check) {
        const alert = dbAlerts.filter(r => r.date === item.date)
        const minDamageEvent = alert.sort(function (a, b) {
          return a.damage - b.damage;
        })[0];
        const maxDamageEvent = alert.sort(function (a, b) {
          return b.damage - a.damage;
        })[0];
        function sum(obj) {
          var sum = 0;

          for (const [key, value] of Object.entries(obj)) {
            sum += value.damage;
          }

          return sum / obj.length;
        }
        alertas.push({
          "date": item.date,
          "avgDamage": sum(alert),
          "maxDamageEvent": {
            "event": maxDamageEvent.event,
            "damage": maxDamageEvent.damage
          },
          "minDamageEvent": {
            "event": minDamageEvent.event,
            "damage": minDamageEvent.damage
          }
        })
      }
    }
    return { data: alertas }
  },

};
