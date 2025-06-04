const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'test-data.txt');

const replaceUsingRegx = [
    {
        "pattern": /to_timestamp\('.*?', '.*?'\)/g,
        "replacement": 'now()'
    },
    {
        "pattern": /null/g,
        "replacement": '\'TEST\''
    }
]

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    let updatedContent = data;
    replaceUsingRegx.forEach(({ pattern, replacement }) => {
        updatedContent = updatedContent.replace(pattern, replacement);
    });
    // Search and replace using regex
   // const updatedContent = data.replace(regexPattern, replacement);

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File updated successfully!');
    });
});