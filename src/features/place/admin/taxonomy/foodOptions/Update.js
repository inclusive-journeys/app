import {foodOptionsField, validateFoodOptions} from 'features/place/admin/taxonomy/foodOptions/fields'
import React, {useEffect}                      from 'react'
import {useDispatch, useSelector}         from 'react-redux'
import DangerZone                         from 'shared/Controls/DangerZone'
import Form                               from 'shared/Fields/Form'
import ContentWrapper                     from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper              from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}            from 'shared/Layout/Dashboard/admin/styles'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {foodOptions} = useSelector(state => state.place.taxonomy)
    const {name, description, type} = foodOptions

    const initialValues = {
        name: name,
        description: description,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        dispatch({
            type: 'place/getFoodOptions',
            payload: {
                slug: slug
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={foodOptionsField}
                    validationSchema={validateFoodOptions}
                    dispatchAction={'place/updateFoodOptions'}
                    formHeading={'Update Food Options'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    type={type}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
