const fs = require('fs');
const colors = require('./colors');
const createColors = require('./createColors');
const createTokenColors = require('./createTokenColors');

const theme = {
    name: 'Glint',
    colors: createColors(colors),
    tokenColors: createTokenColors(colors),
};

fs.writeFile('themes/glint.json', JSON.stringify(theme), (err) => {
    const log = err
        ? {
              method: 'error',
              message: err,
          }
        : {
              method: 'log',
              message: `Successfuly created ${theme.name} theme`,
          };
    console[log.method](log.message);
});
