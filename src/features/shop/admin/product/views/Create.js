import {
    productFields,
    validateProduct
}                              from 'features/shop/admin/product/fields/product'
import AdminDashboardWrapper   from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle} from 'shared/Layout/Dashboard/admin/styles'
import React, {useEffect}      from 'react'
import {
    useDispatch,
    useSelector
}                              from 'react-redux'
import Form                    from 'shared/Fields/Form'
import ContentWrapper          from 'shared/Layout/ContentWrapper'

const Create = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {productCategories} = useSelector(state => state.shop)
    const initialValues = {
        _id: _id,
        token: token,
        name: '',
        description: '',
        photo: '',
        photoFile: '',
        quantity: 0,
        price: 0,
        sold: 0,
        category: '',
        isPublished: false
    }

    const options = [
        {
            name: 'category',
            options: productCategories
        }
    ]

    useEffect(() => {
        dispatch({type: 'shop/getProductCategories'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={productFields}
                    options={options}
                    validationSchema={validateProduct}
                    dispatchAction={'shop/createProduct'}
                    formHeading={'Create.js Product'}
                    buttonText={'Create'}
                    theme={adminFormWrapperStyle}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Create
