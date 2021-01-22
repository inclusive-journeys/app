import React            from 'react'
import OrderCard        from 'shared/Cards/OrderCard'
import {orderCardStyle} from 'shared/Controls/styles'

const List = ({order}) => {
    return (
        <OrderCard
            o={order}
            theme={orderCardStyle}
        />
    )
}

export default List