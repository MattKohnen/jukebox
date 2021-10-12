const { createReadStream } = require('fs')
const { createInterface } = require('readline')
const { once } = require('events')

const removeDelimiters = (line, ...delimiters) => {

    // TODO:  Use `delimiters` argument(s)

    return line.replace(/,|\|/g, '').replace(/\s+/g, ' ').trim()
}

// TODO: Break down below function into smaller functions

const processData = async function processLineByLine(filePath) {try {
        const rl = createInterface({
            crlfDelay: Infinity,
            input:     createReadStream(filePath),
        })
        const dataObject = {'people': []}

        rl.on('line', (line) => {
            // Process the line.
            //console.log(`Line from file: ${line}`)
            //console.log(removeDelimiters(',', line))
            const cleanLine = removeDelimiters(line,',', '|')

            //console.log('cleanLine:', cleanLine)

            // Add line to stored data object
            // TODO: Parse line & divvy up into key/vals
            dataObject.people.push({'person': cleanLine})
        });

        await once(rl, 'close')

        console.log('File processed.')

        console.log(dataObject)
        return dataObject
    } catch (err) {
        console.error(err)
    }
}

module.exports = processData
