import React                    from 'react'
import Div                      from '../Basic/Div'
import GenericCard              from '../Cards/GenericCard'
import GenericCardAdminControls from '../Controls/GenericCardAdminControls'
import {
    adminMarketplaceInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
}                               from '../../themes/admin'

const AdminShop = ({shop}) =>
    <Div theme={adminMarketplaceInnerWrapperStyle}>
        {shop && shop.map(product => (
            <Div
                key={product.slug}
                theme={adminShopCardWrapperStyle}
            >
                <GenericCard
                    slug={`product/update/${product.slug}`}
                    name={product.name}
                    photo={product.photo}
                    theme={adminShopCardStyle}
                />
                <GenericCardAdminControls
                    edit={'/admin/product/update'}
                    destroyAction={'admin/attemptDestroyProduct'}
                    slug={product.slug}
                />
            </Div>
        ))}
    </Div>

export default AdminShop