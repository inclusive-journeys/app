import {placeSearchField}   from 'features/place/admin/fields/search'
import {
    placeCardStyle,
    placeContentWrapperStyle,
    placeDetailStyle,
    placesHeadingStyle,
    placesSearchFormStyle
}                           from 'features/place/views/styles'
import React, {
    useContext,
    useEffect,
    useState
}                           from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from 'shared/Basic/Div'
import GenericCard          from 'shared/Cards/GenericCard'
import {mapContext}         from 'shared/Containers/MapController'
import {searchContext}      from 'shared/Containers/SearchController'
import Form                 from 'shared/Fields/Form'
import ContentWrapper       from 'shared/Layout/ContentWrapper'
import {slugify}            from 'utils/helpers'
import {placesWrapperStyle} from './styles'

const Places = () => {
    const {boonePlaces, algoliaPlaces, places, noResults} = useSelector(state => state.place)
    const dispatch = useDispatch()
    const {coords} = useContext(mapContext)
    const {placesIndex} = useContext(searchContext)
    const [allPlaces, setAllPlaces] = useState([])

    useEffect(() => {
        setAllPlaces(!boonePlaces?.data ? [...algoliaPlaces] : [...algoliaPlaces, ...boonePlaces?.data].reduce(function (accumulator = [], currentValue) {
            if (currentValue.type === 'place') {
                accumulator.push(currentValue)
            } else if (accumulator.filter(place => !!place.booneId && (place.booneId === currentValue?.properties?.id)).length === 0) {
                accumulator.push(currentValue)
            }

            return accumulator

        }, []))


    }, [algoliaPlaces, boonePlaces])


    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Places',
                description: 'The places description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [places])

    return (
        <ContentWrapper theme={placeContentWrapperStyle}>
            <Div>
                <Div>
                    <Div theme={placesHeadingStyle}>Search Places</Div>
                    <Div theme={placeDetailStyle}>
                        By reviewing businesses, you help other members of your
                        community know where you felt safe, welcomed, and celebrated!
                        It’s a win/win way to celebrate the businesses that celebrate
                        you as well as to provide local resources to your friends and neighbors.
                    </Div>
                    <Div theme={placeDetailStyle}>
                        Use the Search field below to discover a new business or review one you’ve recently visited.
                    </Div>
                </Div>
                <Form
                    theme={placesSearchFormStyle}
                    initialValues={{input: ''}}
                    fields={placeSearchField}
                    dispatchAction={'place/searchAllPlaces'}
                    formHeading={'Search'}
                    buttonText={'Search'}
                    payload={{
                        longitude: coords.lon,
                        latitude: coords.lat,
                        radius: 10000,
                        index: placesIndex
                    }}
                />
                <Div theme={placesWrapperStyle}>
                    {allPlaces.length > 0 && allPlaces.map((place) => {
                        if (!!place.properties) {
                            const slug = `${slugify(place.properties.name)}-${slugify(place.properties.address)}-${place.properties.id}`

                            return (
                                <GenericCard
                                    key={slug}
                                    slug={`places/${slug}`}
                                    name={place.properties.name}
                                    address={place.properties.address}
                                    theme={placeCardStyle}
                                />
                            )
                        } else {
                            const address = () => {
                                if (!!place.address1 && !!place.city && !!place.state && !!place.country) {
                                    return `${!!place.address1 && place.address1} ${(!!place.address2 && place.address2 !== 'undefined') ? place.address2 : ''}, ${!!place.city && place.city} ${place.state} ${place.country}`
                                }
                            }

                            return (
                                <GenericCard
                                    key={place.slug}
                                    slug={`places/${place.slug}`}
                                    name={place.name}
                                    address={address()}
                                    theme={placeCardStyle}
                                />
                            )
                        }
                    })}
                    {noResults.boone && noResults.algolia && (
                        <Div>
                            Oops! Looks like there are no results for this search, please try searching again!
                        </Div>
                    )}
                </Div>
            </Div>
        </ContentWrapper>
    )
}

export default Places
