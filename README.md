# Columbia Daily Spectator Analytics

![CDS Weekly Report Logo](./images/../Images/CDS_Weekly_Report_Logo.png)

Automates Columbia Daily Spectator Weekly Analytics Report generation using Google Analytics Reporting and Google Docs APIs. See [CDS Weekly Report Guide](./CDS_Analytics_Overview/[CDS]%20Weekly%20Report%20Guide.pdf) for more info.

![Example](./Images/Weekly_Report_demo.png)

## Key Files

-   [index.js](./js/index.js)
    -   Main file
-   [auth.js](./js/auth.js)
    -   Handles authorization for Google APIs
-   [processData.js](./js/processData.js)

    -   Generates Columbia Daily Spectator Weekly Report Data for each journalism section through Google Analytics API v4

-   [requestBodies.js](./js/requestBodies.js)
    -   Functions to create JSON objects for Google Analytics API Queries
-   [outputFunctions.js](./js/outputFunctions.js)
    -   Handles formatting and output of corresponding Google Analytics request body
-   [googleDocs.js](./js/googleDocs.js)
    -   Functions which merge Google Analytics data with [Weekly Report Template](./CDS_Analytics_Overview/TEMPLATE%20[CDS]%20Weekly%20Report.docx).

## Built With

-   [Google Analaytics Reporting API v4](https://developers.google.com/analytics/devguides/reporting/core/v4)
-   [Google Docs API v1](https://developers.google.com/docs/api)

## Authors

-   **Andrew Sirenko** - _Initial work_ - [AndrewSirenko](https://github.com/AndrewSirenko)

## Acknowledgments

-   Thank you to Columbia Daily Spectator's Engagement Team for being the friendliest faces on campus :)
