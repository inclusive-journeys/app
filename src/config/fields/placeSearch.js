import {TEXT}   from 'config'
import * as Yup from 'yup'

export const placeSearchFields = [
    {
        name: 'input',
        inputLabel: 'Search',
        type: TEXT
    }
]


/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validatePlace = Yup.object().shape({
    search: Yup
        .string()
        .max(50)
        .required('Required')
})