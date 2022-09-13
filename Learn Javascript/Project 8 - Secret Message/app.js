let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
//Exercise 1 removing end string with .pop()
secretMessage.pop()
console.log(secretMessage);

//Double checking step 2 along with line 2
console.log(secretMessage.length);

//Step 3 using .push() to add strings to end
secretMessage.push('to' , 'Program');
console.log(secretMessage);

//Step 4 Replacing an index
secretMessage[7] = 'right';
console.log(secretMessage);

//Step 5 Removing first string using .shift()
secretMessage.shift();
console.log(secretMessage);

//Step 6 Adding string to start of array .unshift()
secretMessage.unshift('Programming');
console.log(secretMessage);

//Step 7 Use array method to remove words and replace with a single one
secretMessage.splice(6, 5, "know");
console.log(secretMessage);

//Step 8 .join()
console.log(secretMessage.join(' '));