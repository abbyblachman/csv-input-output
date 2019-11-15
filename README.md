# CSV input, filter, csv output

Hello!  👋 👋 👋 Please reach out to me with any questions you might have about this code. 

### Instructions for use 📋

In order to run this code, please make sure you have node installed. 

In order to install node, you can run `brew install node` or install it using your preferred package manager. 

Once you have installed node, you can clone into this repository by running `git clone <ssh/https link>` in your terminal. 

When you have cloned into the repo, navigate to the `csv-input-output` directory. 

In your terminal, run: `node index.js`. 

You will see two output files: `republicans-social.csv` and `democrats-age.csv`.

### How I did this ✅ 

My goal was to read the  `legislators.csv` input and create the two output csvs using one line of code. This is why I elected to use node. 

I used several packages: 
- csv-parser: https://www.npmjs.com/package/csv-parser, used to read the `legislator.csv` file. 
- csv-writer: https://www.npmjs.com/package/csv-writer, used to write my filtered results to the output csv files. 
- moment: https://www.npmjs.com/package/moment, used to work with dates so I could accurately filter by age.

### Limitations ⚠️

Two limitations I am identifying: 

- The headers for the output CSVs are currently hard-coded, which is something I would eventually like to change. 
- The filter for Democrats under age 45 is hard-coded to be anyone born between November 16, 1974 and November 15, 2019. I would eventually like to change this to update as time goes on based on the current date. 

