/**
 * convert an HTML file data into a file
 * @param file the file you want to modify
 * @param output the output file
 * @param obj an object, key = data name, value = the result of the input
 * @param encoding 
 */
export function parseHTML(file: string, output: string, obj: object, encoding: BufferEncoding): string 