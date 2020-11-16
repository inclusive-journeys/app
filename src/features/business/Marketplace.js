import React, {useEffect}        from 'react'
import {
    useDispatch,
    useSelector
}                                from 'react-redux'
import Div                       from '../../shared/Basic/Div'
import GenericCard               from '../../shared/Cards/GenericCard'
import {marketplaceWrapperStyle} from '../../themes/business'
import {postContentStyle}        from '../../themes/layout'


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
                {marketplace && marketplace.map(business =>
                    <GenericCard
                        key={business.slug}
                        slug={`marketplace/${business.slug}`}
                        name={business.name}
                        photo={business.photo}
                        layoutId={business._id}
                    />
                )}
            </Div>
        </Div>
    )
}

export default Marketplace