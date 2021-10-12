const path = require('path')
const processData = require('./processData')

const filePath = path.join(__dirname, '..', 'mock_data', 'comma_delimited.txt')
const expected = {
    people: [
        {
            person: 'Stickles Bryan b.stickles@fakeemailaddress.com Green 08/11/2017'
        },
        {
            person: 'Graeber Tim t.graeber@fakeemailaddress.com Blue 03/08/1997'
        },
        {
            person: 'Balicki Ahmad a.balicki@fakeemailaddress.com Indigo 07/16/1970'
        },
        {
            person: 'Nazario Anderson a.nazario@fakeemailaddress.com Violet 02/16/1960'
        },
        {
            person: 'Desimone Alayna a.desimone@fakeemailaddress.com Red 10/23/2017'
        },
        {
            person: 'Woodford Wyatt w.woodford@fakeemailaddress.com Orange 12/16/1991'
        },
        {
            person: 'Hegland Helena h.hegland@fakeemailaddress.com Yellow 01/05/1993'
        },
        {
            person: 'Goulette Regenia r.goulette@fakeemailaddress.com Green 03/03/2020'
        },
        {
            person: 'Vinyard Tabetha t.vinyard@fakeemailaddress.com Blue 12/04/2016'
        },
        {
            person: 'Pinnell Caryl c.pinnell@fakeemailaddress.com Indigo 01/22/1943'
        }
    ]
}

// TODO: Fix to work with async

test('reads in & processes a file', () => {
    expect(processData(filePath)).toStrictEqual(expected)
})
