const program = require('commander')
const Option = program.Option
const chalk = require('chalk')
const log = console.log

program
    .addOption(new Option('-sb, --sort-by <sort>', 'Sort by')
        .choices(['color', 'birthdate', 'name'])
        .default('name'))
    .parse()

const options = program.opts()

log(options)

// Input: Set of records in 1 of 3 formats
// Output: Set of records sorted in 1 of 3 ways
