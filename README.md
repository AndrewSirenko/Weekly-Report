# Columbia Daily Spectator Analytics
![CDS Weekly Report Logo](./images/../Images/CDS_Weekly_Report_Logo.png)

Automates Columbia Daily Spectator Weekly Analytics Report generation using Google Analytics Reporting and Google Docs APIs. 

![Example](./Images/Weekly_Report_demo.png)


## Key Files

* [index.js](./index.js) 
  * Main file
* [auth.js](./auth.js)
  * Handles authorization for Google APIs
* [processData.js](./processData.js)
  * Generates Columbia Daily Spectator Weekly Report Data for each journalism section through Google Analytics API v4
  
* [requestBodies.js](./requestBodies.js)
  * Functions to create JSON objects for Google Analytics API Queries
* [outputFunctions.js](./outputFunctions.js)
  *  Handles formatting and output of corresponding Google Analytics request body
* [googleDocs.js](./googleDocs.js)
  * Functions which merge Google Analytics data with Weekly Report template.  
## Built With

* [Google Analaytics Reporting API v4](https://developers.google.com/analytics/devguides/reporting/core/v4) 
* [Google Docs API v1](https://developers.google.com/docs/api)


## Authors

* **Andrew Sirenko** - *Initial work* - [AndrewSirenko](https://github.com/AndrewSirenko)


## Acknowledgments

* Thank you to Columbia Daily Spectator's Engagement Team for being the friendliest faces on campus :)
