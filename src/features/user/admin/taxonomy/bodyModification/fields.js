import {TEXT}   from 'config/variables'
import * as Yup from 'yup'

export const bodyModificationField = [
    {
        name: 'name',
        inputLabel: 'Name',
        type: TEXT
    },
    {
        name: 'description',
        inputLabel: 'Description',
        type: TEXT
    }
]

/**
 *
 * Validation Objects written with Yup
 * https://github.com/jquense/yup#api
 *
 */

export const validateBodyModification = Yup.object().shape({
    name: Yup
        .string()
        .max(50)
        .required('Required'),
    description: Yup
        .string()
})
