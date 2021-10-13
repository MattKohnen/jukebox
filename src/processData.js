const fs = require('fs')
const readline = require('readline')

const removeDelimiters = (line, ...delimiters) => {

    // TODO:  Use `delimiters` argument(s)

    return line.replace(/,|\|/g, '').replace(/\s+/g, ' ').trim()
}

const readFile = (filePath) => {

}

// TODO: Break down below function into smaller functions(?)

const processData = async function processLineByLine(filePath, dataLabel) {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input:     fileStream,
        crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in file as a single line break.
    const label = dataLabel ? dataLabel : 'data'
    const dataObject = {[label]: []}

    for await (const line of rl) {
        // Each line in file will be successively available here as `line`.
        //console.log(`Line from file: ${line}`)
        //console.log(removeDelimiters(',', line))
        const cleanLine = removeDelimiters(line,',', '|')

        //console.log('cleanLine:', cleanLine)

        // Add line to stored data object
        // TODO: Parse line & divvy up into key/vals
        dataObject[label].push({'person': cleanLine})
    }

    //console.log('File processed.')
    //console.log(dataObject)
    return dataObject
}

module.exports = processData
