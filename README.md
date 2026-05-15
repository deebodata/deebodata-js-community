**DeeboData JavaScript Community Data Grid**

To get started with this data grid, follow the instructions below or visit https://deebodata.com/javascript-docs

**HTML Requirement**
1. Add a div tag with an id="deeboDataGridSection"

**To initialize the data grid**
- add the script for deebo-js-grid-community.js
- in another script after it, invoke deebo.methods.initDeeboData(local: boolean)
- By default, the initialization function passes a boolean true, which tells deebodata to load a local dataset. You can either set a new local data using setLocalDataSet described below, or remove the boolean true altogether and call setInitApiUrl to set you api endpoint and load that data. More api customizations are described below.

**Programmable API for Customization**
Call the functions listed below as needed **BEFORE** you invoke initDeeboData

**To load your own local data set**
- deebo.methods.setLocalDataSet(data: array of objects)
- If you have local data you want to display in the grid, simply call this function and pass that data as an argument. It should be an array of objects.

**FROM A BACKEND API**
**To set the http method for your api**
- deebo.methods.setInitMethod(method: string)
- To set the http method for your backend api, call this function and pass GET, POST, PUT, etc. It defaults to GET.

**To set the url of your api**
- deebo.methods.setInitApiUrl(url: string)
- To set your api endpoint url, call this method and pass the url as a string.

**To set the property name from your api response where the array of objects is**
- deebo.methods.setInitResProp(prop: string)
- When your api returns, the code checks if the response is just an array, or if it's some object and your array is a property of that object. If your response is indeed just an array, call setInitResProp and pass an empty string. If your array of objects is part of a larger response object, pass the attribute name of the array. The default is result since that's the property where the array is within the response of the sample api.

**STYLING**
**To set up to 2 theme colors**
- deebo.methods.setThemeColors(color1: string|null, color2: string|null)
- Pass any 2 css colors or hex colors as strings.

**To set alternating row background color**
- deebo.methods.setAltRows()
- Simply invoke the function to get alternating row backgrounds. To set your own alternate color, you need find this method's declaration in the code, download the default, alt url that this function sets, open that css file, find and update this css rule - .data-table-row:not(.data-row-selected):nth-of-type(even) with the desired alternate color.

**To set the default row height**
- deebo.methods.setDfltRowHgt(rowHght: string)
- Set the default row height. Pass a "string" with some css units like "150px". The default is "50px"

**To set the default row height**
- deebo.methods.setDfltGridHgt(gridHght: number)
- Set the default grid height. Pass a number like 600. The default is 500


**Editing**
- To block cell editing
- deebo.methods.setEditable(canEdit: boolean)
- Call this function with false to block cell editing. Cell edits are allowed by default.


**Performance**
- To set a primary key for better virtual scroll performance
- deebo.methods.setPrimaryKeyInit(key: string)
- Pass a true primary key attribute from your array of objects

