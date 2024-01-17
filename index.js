const server = require('./src/get-damage-summary-by-date/helpers/server');

const port = process.env.PORT || 3333;
server.listen(port, () => console.log(`Running server on port ${port}`));
