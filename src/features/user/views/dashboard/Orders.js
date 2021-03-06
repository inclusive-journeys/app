import {userDashboardMenu} from 'config/menus/dashboard/user'
import PurchaseHistory     from 'features/user/views/PurchaseHistory'
import React               from 'react'
import ContentWrapper      from 'shared/Layout/ContentWrapper'
import DashboardInfo       from 'shared/Layout/Dashboard/DashboardInfo'
import DashboardWrapper    from 'shared/Layout/Dashboard/DashboardWrapper'

const Orders = () => {
    return (
        <ContentWrapper>
            <DashboardWrapper menu={userDashboardMenu}>
                <DashboardInfo
                    heading={'Your Orders'}
                    description={'Thanks for the support.'}
                />
                <PurchaseHistory/>
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Orders
