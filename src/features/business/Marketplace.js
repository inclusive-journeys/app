import React, {useEffect}        from 'react'
import {
    useDispatch,
    useSelector
}                                from 'react-redux'
import Div                       from '../../shared/Basic/Div'
import {marketplaceWrapperStyle} from '../../themes/business'
import {postContentStyle}        from '../../themes/layout'
import BusinessCard              from './BusinessCard'


const Marketplace = () => {
    const {slug} = useSelector(state => state.site)
    const {marketplace} = useSelector(state => state.business)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={marketplaceWrapperStyle}>
                {marketplace && marketplace.map(business => (
                    <BusinessCard
                        key={business.slug}
                        slug={business.slug}
                        name={business.name}
                        photo={business.photo}
                    />
                ))}
            </Div>
        </Div>
    )
}


export default Marketplace