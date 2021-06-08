import {push}                from 'connected-react-router'
import {deleteBathroom}          from 'features/place/admin/taxonomy/bathroom/services'
import {deleteBusinessOwner}     from 'features/place/admin/taxonomy/businessOwner/services'
import {deleteCommunitiesServed} from 'features/place/admin/taxonomy/communitiesServed/services'
import {deleteFoodOptions}       from 'features/place/admin/taxonomy/foodOptions/services'
import {deleteLanguageSpoken}    from 'features/place/admin/taxonomy/languageSpoken/services'
import {deletePlaceCategory}     from 'features/place/admin/taxonomy/placeCategory/services'
import {deleteAdaptiveEquipment} from 'features/user/admin/taxonomy/adaptiveEquipment/services'
import {deleteBodyModification}  from 'features/user/admin/taxonomy/bodyModification/services'
import {deleteGender}            from 'features/user/admin/taxonomy/gender/services'
import {deleteLanguage}              from 'features/user/admin/taxonomy/language/services'
import {deleteMethodOfCommunication} from 'features/user/admin/taxonomy/methodOfCommunication/services'
import {deletePhysicalAppearance} from 'features/user/admin/taxonomy/physicalAppearance/services'
import {deletePronoun}       from 'features/user/admin/taxonomy/pronoun/services'
import {deleteRace}              from 'features/user/admin/taxonomy/race/services'
import {deleteServiceAnimal}     from 'features/user/admin/taxonomy/serviceAnimal/services'
import {deleteSexualOrientation} from 'features/user/admin/taxonomy/sexualOrientation/services'
import {call, put, takeLatest}   from 'redux-saga/effects'

export function* attemptDestroyEntity({payload}) {
    yield put({type: 'site/confirmDestroyEntity', payload: payload})
}

export function* destroyEntity({payload}) {
    console.log('PAYLOAD', payload)
    const deleteSwitch = () => {
        switch (payload.type) {
            case 'adaptive-equipment':
                return deleteAdaptiveEquipment
            case 'body-modification':
                return deleteBodyModification
            case 'gender':
                return deleteGender
            case 'language':
                return deleteLanguage
            case 'method-of-communication':
                return deleteMethodOfCommunication
            case 'physical-appearance':
                return deletePhysicalAppearance
            case 'pronoun':
                return deletePronoun
            case 'race':
                return deleteRace
            case 'service-animal':
                return deleteServiceAnimal
            case 'sexual-orientation':
                return deleteSexualOrientation
            case 'bathroom':
                return deleteBathroom
            case 'business-owner':
                return deleteBusinessOwner
            case 'communities-served':
                return deleteCommunitiesServed
            case 'food-options':
                return deleteFoodOptions
            case 'language-spoken':
                return deleteLanguageSpoken
            case 'place-category':
                return deletePlaceCategory
        }
    }
    const destroyed = yield call(deleteSwitch(), payload)
    const {objectID} = payload

    if (!destroyed.error) {
        yield put({type: 'site/destroyEntitySuccess'})
        yield put({
            type: 'site/setNotification',
            payload: {
                notification: 'Deleted Successfully',
                theme: 'green'
            }
        })

        // yield put({type: 'shop/destroyProductSuccess', payload: {objectID}})
        // yield put({type: 'shop/getShop'})
        yield put(push('/admin/'))
    } else {
        yield put({type: 'admin/destroyProductFailure'})
    }
}


/* WATCHERS */

export function* watchAttemptDestroyEntity() {
    yield takeLatest('site/attemptDestroyEntity', attemptDestroyEntity)
}

export function* watchDestroyEntity() {
    yield takeLatest('site/destroyEntity', destroyEntity)
}
