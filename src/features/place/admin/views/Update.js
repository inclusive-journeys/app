import {placeFields, validatePlace}   from 'features/place/admin/fields'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import DangerZone                     from 'shared/Controls/DangerZone'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper          from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {place, taxonomy} = useSelector(state => state.place)
    const {
        accessibleDoorway,
        audioAvailable,
        address1,
        address2,
        city,
        zip,
        country,
        state,
        latitude,
        longitude,
        bathrooms,
        businessOwner,
        braille,
        brickAndMortar,
        categories,
        communitiesServed,
        description,
        foodOptions,
        isPublished,
        isRestaurant,
        languageSpoken,
        largeAdaptiveEquipment,
        name,
        onlyAccessibleByStairs,
        photo,
        publicTransportation,
        signLanguageAccessible,
        website,
        wheelchairElevator,
        wheelchairParking,
        wheelchairRamps,
        wheelchairRestroom,
        type
    } = place
    const {placesIndex} = useContext(searchContext)

    const initialValues = {
        accessibleDoorway: accessibleDoorway,
        audioAvailable: audioAvailable,
        address1: address1,
        address2: address2,
        city: city,
        zip: zip,
        country: country,
        state: state,
        latitude: latitude,
        longitude: longitude,
        bathrooms: bathrooms,
        businessOwner: businessOwner,
        braille: braille,
        brickAndMortar: brickAndMortar,
        categories: categories,
        communitiesServed: communitiesServed,
        description: description,
        foodOptions: foodOptions,
        isPublished: isPublished,
        isRestaurant: isRestaurant,
        languageSpoken: languageSpoken,
        largeAdaptiveEquipment: largeAdaptiveEquipment,
        name: name,
        onlyAccessibleByStairs: onlyAccessibleByStairs,
        photo: photo,
        photoFile: '',
        publicTransportation: publicTransportation,
        signLanguageAccessible: signLanguageAccessible,
        website: website,
        wheelchairElevator: wheelchairElevator,
        wheelchairParking: wheelchairParking,
        wheelchairRamps: wheelchairRamps,
        wheelchairRestroom: wheelchairRestroom,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'place/getPlace',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const options = [
        {
            name: 'bathrooms',
            options: taxonomy.bathrooms
        },
        {
            name: 'businessOwner',
            options: taxonomy.businessOwner
        },
        {
            name: 'communitiesServed',
            options: taxonomy.communitiesServed
        },
        {
            name: 'foodOptions',
            options: taxonomy.foodOptions
        },
        {
            name: 'languageSpoken',
            options: taxonomy.languageSpoken
        },
        {
            name: 'categories',
            options: taxonomy.placeCategory
        }
    ]


    useEffect(() => {
        dispatch({type: 'place/listBathroom'})
        dispatch({type: 'place/listBusinessOwner'})
        dispatch({type: 'place/listCommunitiesServed'})
        dispatch({type: 'place/listFoodOptions'})
        dispatch({type: 'place/listLanguageSpoken'})
        dispatch({type: 'place/listPlaceCategory'})


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={placeFields}
                    validationSchema={validatePlace}
                    dispatchAction={'place/updatePlace'}
                    formHeading={'Update Place'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                    options={options}
                />
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    type={type}
                    objectID={place.objectID}
                    index={placesIndex}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
