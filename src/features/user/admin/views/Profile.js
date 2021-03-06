import {userDashboardMenu}        from 'config/menus/dashboard/user'
import {userFields}               from 'features/user/admin/fields'
import React, {useEffect}         from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div                        from 'shared/Basic/Div'
import Form                       from 'shared/Fields/Form'
import ContentWrapper             from 'shared/Layout/ContentWrapper'
import DashboardWrapper           from 'shared/Layout/Dashboard/DashboardWrapper'
import {globals}                  from '../../../../config/styles'
import Identity                   from './Indentity'
import {userProfileFormStyle}     from './styles'

const Profile = () => {
    const dispatch = useDispatch()
    const {slug, _id, token, user} = useSelector(state => state.user)
    const {
        description,
        avatar,
        email,
        dateOfBirth,
        ethnicHispanicOrigin,
        handle,
        nameMiddle,
        nameFirst,
        nameLast,
        tel,
        role
    } = user

    const initialValues = {
        nameFirst: nameFirst,
        nameMiddle: nameMiddle,
        nameLast: nameLast,
        description: description,
        avatar: avatar,
        avatarFile: '',
        email: email,
        dateOfBirth: dateOfBirth,
        handle: handle,
        tel: tel,
        ethnicHispanicOrigin: ethnicHispanicOrigin,
        role: role,
        slug: slug,
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
            <DashboardWrapper menu={userDashboardMenu}>
                <Form
                    initialValues={initialValues}
                    fields={userFields}
                    //validationSchema={validateProfile}
                    dispatchAction={'user/updateUserProfile'}
                    formHeading={'Update Profile'}
                    buttonText={'Update'}
                    enableReinitialize={true}
                    theme={userProfileFormStyle}
                />
                {slug && user?._id?.length > 0 && (
                    <>
                        <Div theme={{weight: 300, fontStyle: 'italic', font: globals.fonts.serif, marginTop: [30, .7, 30], marginBottom: 15, size: [18, .7, 18]}}>
                            <strong>Disclaimer</strong>: We understand many of the options below may be non-exhaustive and incomplete.
                            We are working together with users like you to work on this!
                        </Div>
                        <Identity slug={slug}/>
                    </>
                )}
            </DashboardWrapper>
        </ContentWrapper>
    )
}

export default Profile
