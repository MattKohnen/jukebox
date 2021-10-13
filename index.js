const program = require('commander')
const Option = program.Option
const chalk = require('chalk')
const log = console.log
const path = require('path')
const processData = require('./src/processData')

program
    .addOption(new Option('-sb, --sort-by <sort>', 'Sort by')
        .choices(['color', 'birthdate', 'name'])
        .default('name'))
    .parse()

const options = program.opts()

log(options)

// Input: Set of records in 1 of 3 formats
// Output: Set of records sorted in 1 of 3 ways

// TODO: Add prompt at command line asking for filepath(s)
// TODO:    Is it possible to have a filepicker ?

const filePath = path.join(__dirname, 'mock_data', 'comma_delimited.txt')
processData(filePath, 'people')
