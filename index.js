const csv = require('csv-parser');
const fs = require('fs');
const moment = require('moment');
const results = [];
const finalResults = [];
const finalResultsTwo = [];
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './democrats-age.csv',
    header: [
        {id: 'title', title: 'title'},
        {id: 'firstname', title: 'firstname'},
        {id: 'middlename', title: 'middlename'},
        {id: 'lastname', title: 'lastname'},
        {id: 'name_suffix', title: 'name_suffix'},
        {id: 'nickname', title: 'nickname'},
        {id: 'party', title: 'party'},
        {id: 'state', title: 'state'},
        {id: 'district', title: 'district'},
        {id: 'in_office', title: 'in_office'},
        {id: 'gender', title: 'gender'},
        {id: 'phone', title: 'phone'},
        {id: 'fax', title: 'fax'},
        {id: 'website', title: 'website'},
        {id: 'webform', title: 'webform'},
        {id: 'congress_office', title: 'congress_office'},
        {id: 'bioguide_id', title: 'bioguide_id'},
        {id: 'votesmart_id', title: 'votesmart_id'},
        {id: 'fec_id', title: 'fec_id'},
        {id: 'govtrack_id', title: 'govtrack_id'},
        {id: 'crp_id', title: 'crp_id'},
        {id: 'twitter_id', title: 'twitter_id'},
        {id: 'congresspedia_url', title: 'congresspedia_url'},
        {id: 'youtube_url', title: 'youtube_url'},
        {id: 'facebook_id', title: 'facebook_id'},
        {id: 'official_rss', title: 'official_rss'},
        {id: 'senate_class', title: 'senate_class'},
        {id: 'birthdate', title: 'birthdate'},
        {id: 'birthdate', title: 'birthdate'},
        {id: 'oc_email', title: 'oc_email'}
    ]
});
const csvWriterTwo = createCsvWriter({
    path: './republicans-social.csv',
    header: [
        {id: 'title', title: 'title'},
        {id: 'firstname', title: 'firstname'},
        {id: 'middlename', title: 'middlename'},
        {id: 'lastname', title: 'lastname'},
        {id: 'name_suffix', title: 'name_suffix'},
        {id: 'nickname', title: 'nickname'},
        {id: 'party', title: 'party'},
        {id: 'state', title: 'state'},
        {id: 'district', title: 'district'},
        {id: 'in_office', title: 'in_office'},
        {id: 'gender', title: 'gender'},
        {id: 'phone', title: 'phone'},
        {id: 'fax', title: 'fax'},
        {id: 'website', title: 'website'},
        {id: 'webform', title: 'webform'},
        {id: 'congress_office', title: 'congress_office'},
        {id: 'bioguide_id', title: 'bioguide_id'},
        {id: 'votesmart_id', title: 'votesmart_id'},
        {id: 'fec_id', title: 'fec_id'},
        {id: 'govtrack_id', title: 'govtrack_id'},
        {id: 'crp_id', title: 'crp_id'},
        {id: 'twitter_id', title: 'twitter_id'},
        {id: 'congresspedia_url', title: 'congresspedia_url'},
        {id: 'youtube_url', title: 'youtube_url'},
        {id: 'facebook_id', title: 'facebook_id'},
        {id: 'official_rss', title: 'official_rss'},
        {id: 'senate_class', title: 'senate_class'},
        {id: 'birthdate', title: 'birthdate'},
        {id: 'birthdate', title: 'birthdate'},
        {id: 'oc_email', title: 'oc_email'}
    ]
});

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
csvWriter.writeRecords(finalResults)       
    .then(() => {
        console.log('Done');
    })

const republicans = results.filter(function(result) {
    return result.party = 'R';
  });
  const filteredRepublicans = function(elements) {
    elements.forEach(element => { 
      if (element.twitter_id !== '' && element.youtube_url !== '') {
      finalResultsTwo.push(element);
      } else 
      return; 
    })
    
}
filteredRepublicans(republicans);
csvWriterTwo.writeRecords(finalResultsTwo)       
.then(() => {
    console.log('Done Two');
})
});