import {userField}                    from 'features/user/admin/fields'
import React, {useContext, useEffect} from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import {searchContext}                from 'shared/Containers/SearchController'
import DangerZone                     from 'shared/Controls/DangerZone'
import Form                           from 'shared/Fields/Form'
import ContentWrapper                 from 'shared/Layout/ContentWrapper'
import AdminDashboardWrapper          from 'shared/Layout/Dashboard/admin/AdminDashboardWrapper'
import {adminFormWrapperStyle}        from 'shared/Layout/Dashboard/admin/styles'
import Identity                       from './Indentity'

const Update = () => {
    const dispatch = useDispatch()
    const {_id, token, user} = useSelector(state => state.user)
    const {slug} = useSelector(state => state.site)
    const {usersIndex} = useContext(searchContext)
    const {
        description,
        avatar,
        email,
        ethnicHispanicOrigin,
        handle,
        nameMiddle,
        nameFirst,
        nameLast,
        tel,
        role,
        type
    } = user

    const initialValues = {
        nameFirst: nameFirst,
        nameMiddle: nameMiddle,
        nameLast: nameLast,
        description: description,
        avatar: avatar,
        avatarFile: '',
        email: email,
        handle: handle,
        tel: tel,
        ethnicHispanicOrigin: ethnicHispanicOrigin,
        role: role,
        slug,
        _id,
        token,
    }

    useEffect(() => {
        if (!!slug)
            dispatch({
                type: 'user/getUser',
                payload: {
                    slug: slug,
                    _id: _id,
                    token: token
                }
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContentWrapper>
            <AdminDashboardWrapper>
                <Form
                    initialValues={initialValues}
                    fields={userField}
                    // validationSchema={validateUser}
                    dispatchAction={'user/updateUser'}
                    formHeading={'Update User'}
                    buttonText={'Update'}
                    theme={adminFormWrapperStyle}
                    enableReinitialize={true}
                />
                <Identity/>
                <DangerZone
                    attemptDestroyAction={'site/attemptDestroyEntity'}
                    destroyAction={'site/destroyEntity'}
                    slug={slug}
                    objectID={user?.objectID}
                    index={usersIndex}
                    type={type}
                />
            </AdminDashboardWrapper>
        </ContentWrapper>
    )
}

export default Update
