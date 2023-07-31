const fs = require('fs')

/**
 * Replace All instance of a string with another one
 * @param {string} base_string 
 * @param {string} to_replace 
 * @param {string} replace_by 
 */
let replaceAll = (base_string, to_replace, replace_by) => {
    // we work on a copy of the string
    let copy = base_string;
    while(copy.includes(to_replace)) {
        copy = copy.replace(to_replace, replace_by);
    }
    return copy;
}

/**
 * 
 * @param {string} file 
 * @param {{}} obj 
 * @param {string|'utf-8'} encoding
 */
let parseHTML = (file, output, obj={}, encoding='utf-8') => {
    let file_data = fs.readFileSync(file, encoding);
    for(let data of Object.keys(obj)) {
        file_data = replaceAll(file_data, `{{ ${data} }}`, obj[data]);
    }
    fs.writeFileSync(output, file_data, encoding);
}

module.exports = {
    parseHTML: parseHTML
}