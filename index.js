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
 * replace data in the html file
 * @param {string} file 
 * @param {{}} obj 
 * @param {string|'utf-8'} encoding
 */
function parseFile(file, output, obj={}, encoding='utf-8') {
    fs.writeFileSync(output, parseData(fs.readFileSync(file, encoding), obj), encoding);
}

/**
 * replace data in the html file
 * @param {string} fileData 
 * @param {{}} obj 
 * @param {string|'utf-8'} encoding
 * @returns {string}
 */
function parseData(fileData, obj={}) {
    let endData = fileData;
    for(let data of Object.keys(obj)) {
        endData = replaceAll(endData, `{{ ${data} }}`, obj[data]);
    }
    return endData;
}

module.exports = {
    parseFile,
    parseData
    
}