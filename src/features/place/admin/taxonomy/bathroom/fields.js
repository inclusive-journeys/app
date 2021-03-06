import {TEXT, TOGGLE} from 'config/variables'
import * as Yup       from 'yup'

export const bathroomField = [
    {
        name: 'name',
        inputLabel: 'Bathroom Type Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Description of Type',
        type: TEXT
    },
    {
        name: 'gender',
        inputLabel: 'Gender',
        type: TEXT
    },
    {
        name: 'multiStall',
        inputLabel: 'Multi Stall',
        type: TOGGLE
    },
    {
        name: 'toilets',
        inputLabel: 'Toilets',
        type: TOGGLE
    },
    {
        name: 'urinals',
        inputLabel: 'Urinal',
        type: TOGGLE
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateBathroom = Yup.object().shape({
    description: Yup
        .string()
})
