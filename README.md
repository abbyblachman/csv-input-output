# DataMade Code Challenge

Hello!  👋 👋 👋

My name is Abby Blachman, and I decided to complete this coding challenge using node.js. 

### Instructions for use 📋

In order to run this code, please make sure you have node installed. 

In order to install node, you can run `brew install node` or install it using your preferred package manager. 

Once you have installed node, you can clone this repository. 

When you have cloned, navigate to the  `datamade-code-challenge` directory. 

In your terminal, run: `node index.js`. 

You will see two output files: `republicans-social.csv` and `democrats-age.csv`.

### How I did this ✅ 

My goal was to read the  `legislators.csv` input and create the two output csvs using one line of code. This is why I elected to use node. 

I used several packages: 
csv-parser: https://www.npmjs.com/package/csv-parser, used to read the `legislator.csv` file. 
csv-writer: https://www.npmjs.com/package/csv-writer, used to write my filtered results to the output csv files. 
moment: https://www.npmjs.com/package/moment, used to work with dates so I could accurately filter by age.

