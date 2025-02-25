import 'node:buffer';

/**
 * replace data in an html file and output that into a new or existing file.
 * @param file the file you want to modify
 * @param output the output file
 * @param obj data to replace
 * @param encoding default encoding to utf8
 */
export function parseFile(file: string, output: string, obj: { [x: string]: string }, encoding?: BufferEncoding): string

/**
 * replace data in an html file and output the data
 * @param file the file you want to modify
 * @param obj data to replace
 */
export function parseData(file: string, obj: { [x: string]: string }): string 