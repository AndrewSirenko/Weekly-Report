/* File of outputFunctions to be used in index.batchProcess()
 *
 *     Each is named to be used with matching requestBody in requestBodies.js
 *     Each takes following parameters:
 *   {report} which is the report generated by batchGet({requestBody})
 *   {section} which is the JSON object to store processed data from report
 */

const formatter = require('./formatter');

//
function defaultRequestOutput(report, section) {
    // De-structures batchGet report
    let {
        columnHeader: {
            dimensions,
            metricHeader: { metricHeaderEntries },
        },
        data,
    } = report;

    // Puts metric headers into an array
    var headers = [];
    for (var i = 0, header; (header = metricHeaderEntries[i]); i++) {
        headers.push(header.name);
    }

    // Puts result rows into an array
    var rows = [];
    for (var i = 0, row; (row = data.rows[i]); i++) {
        rows.push(row);
    }

    console.log('Dimensions: ' + dimensions);
    console.log('Metrics: ' + headers);
    console.log();

    for (i = 0; i < rows.length; i++) {
        // Values from current time frame (Ex: This week)
        let currValues = rows[i].metrics[0].values;

        // Values from last time frame (Ex: last week)
        let pastValues = rows[i].metrics[1].values;

        // Separates values arrays into discrete values
        for (i = 0; i < headers.length; i++) {
            let header = headers[i];
            let currVal = currValues[i];
            let pastVal = pastValues[i];

            // Turns raw data into formatted string to be used in weekly report
            let format = formatter.dataToText(currVal, pastVal);

            // Creates new variable in section object, to be read by DOCS API
            section[header] = format;

            // Test output
            //console.log(headers[i] + format);
        }
    }
    // Test output
    //console.log(section);
}

//
function defaultChannelGroupingOutput(report, section) {
    // De-structures batchGet report
    let {
        columnHeader: {
            dimensions,
            metricHeader: { metricHeaderEntries },
        },
        data,
    } = report;

    // Puts metric headers into an array
    var headers = [];
    for (var i = 0, header; (header = metricHeaderEntries[i]); i++) {
        headers.push('' + header.name);
    }

    // Puts result rows into an array
    var rows = [];
    for (var i = 0, row; (row = data.rows[i]); i++) {
        rows.push(row);
    }

    console.log('Dimensions: ' + dimensions);
    console.log('Metrics: ' + headers);
    console.log();

    // Puts string into section object
    section['mostPageViewsCameFrom'] = rows[0].dimensions[0];

    for (i = 0; i < rows.length; i++) {
        // Dimension Label (Ex: Facebook)
        let label = rows[i].dimensions[0];

        let pageviews = Number(rows[i].metrics[0].values[0]);

        section[label] = pageviews;
    }
}

function top10Articles(report, section) {
    // De-structures batchGet report
    let {
        columnHeader: {
            dimensions,
            metricHeader: { metricHeaderEntries },
        },
        data,
    } = report;

    // Puts metric headers into an array
    var headers = [];
    for (var i = 0, header; (header = metricHeaderEntries[i]); i++) {
        headers.push('' + header.name);
    }

    // Puts result rows into an array
    var rows = [];
    for (var i = 0, row; (row = data.rows[i]); i++) {
        rows.push(row);
    }

    console.log('Dimensions: ' + dimensions);
    console.log('Metrics: ' + headers);
    console.log();

    // String that holds formatted list of top 10 articles
    let top10ArticlesFormatted =
        '\nPage Views: Article Link\n------------------------';

    for (i = 0; i < rows.length; i++) {
        // Dimension Label (Ex: Facebook)
        let articleLink = rows[i].dimensions[0];

        // pageviews formatted to fixed number of digits
        let pageviews = Number(rows[i].metrics[0].values[0]);

        top10ArticlesFormatted += '\n' + pageviews + ': ' + articleLink;
    }

    // Puts string into section object
    section['top10Articles'] = top10ArticlesFormatted;
}

function percentUsersFromNYCOutput(report, section) {
    defaultRequestOutput(report, section);
}

function socialNetworkOutput(report, section) {
    // De-structures batchGet report
    let {
        columnHeader: {
            dimensions,
            metricHeader: { metricHeaderEntries },
        },
        data,
    } = report;

    // Puts metric headers into an array
    var headers = [];
    for (var i = 0, header; (header = metricHeaderEntries[i]); i++) {
        headers.push('' + header.name);
    }

    // Puts result rows into an array
    var rows = [];
    for (var i = 0, row; (row = data.rows[i]); i++) {
        rows.push(row);
    }

    console.log('Dimensions: ' + dimensions);
    console.log('Metrics: ' + headers);
    console.log();

    // Puts string into section object
    section['mostUsersCameFrom'] = rows[0].dimensions[0];

    for (i = 0; i < rows.length; i++) {
        // Dimension Label (Ex: Facebook)
        let label = rows[i].dimensions[0];

        let users = Number(rows[i].metrics[0].values[0]);

        section[label] = users;
    }
}

module.exports = {
    defaultRequestOutput,
    top10Articles,
    defaultChannelGroupingOutput,
    percentUsersFromNYCOutput,
    socialNetworkOutput,
};
