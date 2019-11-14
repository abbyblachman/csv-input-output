const csv = require('csv-parser');
const fs = require('fs');
const moment = require('moment');

fs.createReadStream('legislators.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const democrats = results.filter(function(result) {
        return result.party = 'D';
      });
      console.log(democrats);
  })