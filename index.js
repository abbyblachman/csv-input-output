const csv = require('csv-parser');
const fs = require('fs');
const moment = require('moment');
const results = [];
const finalResults = [];

fs.createReadStream('legislators.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const democrats = results.filter(function(result) {
        return result.party = 'D';
      });
    
    const filteredAge = function(elements) {
      elements.forEach(element => {
        var bday = element.birthdate;
        var bdayDate = moment(bday).format("L"); 
        if (moment(bdayDate).isBetween('1974-11-01', '2019-11-01', 'year') === true) {
        finalResults.push(element);
        } else 
        return; 
      })
      
}
filteredAge(democrats);

const republicans = results.filter(function(result) {
    return result.party = 'R';
  });
  console.log(republicans);
});