/*
Manipulate your array using various methods, such as pop(), push(), shift(), 
and unshift(), and transform it into the following:

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

You can take the following steps, or adopt your own approach:

Remove the first item and the last item.
Add FIRST to the start of the array.
Assign hello World to the fourth item value.
Assign MIDDLE to the third index value.
Add LAST to the last position in the array.
Output it to the console. 
*/

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

/*
theList.pop();
theList.shift();
//console.log(theList);
theList.splice(0,6, "FIRST", "Svekis", "MIDDLE", "hello world", "LAST");
console.log(theList);
*/

theList.shift();
theList.pop();
theList.unshift("FIRST");
theList.splice(2, 5, "MIDDLE", "hello world");
theList.push("LAST");
console.log(theList);