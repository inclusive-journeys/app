import {Formik}             from 'formik'
import React, {useEffect}   from 'react'
import {
    useDispatch,
    useSelector
}                           from 'react-redux'
import Div                  from '../../Basic/Div'
import H3                   from '../../Basic/H3'
import SubmitButton         from '../../Basic/SubmitButton'
import FieldSwitch          from '../../Forms/FieldSwitch'
import {history}            from '../../redux/store'
import {genericButtonStyle} from '../../themes/elements'
import {
    signInFormStyle,
    signUpFormStyle
}                           from '../../themes/signup'
import {signInFieldTypes}   from '../../variables/fieldTypes'
import {validateSignin}     from '../../variables/fieldValidation'


const SignIn = () => {
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state => state.user)

    useEffect(() => {
        if (isAuthenticated)
            history.push('/')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validateSignin}
            onSubmit={values => dispatch({type: 'user/signIn', payload: values})}
        >
            {formik => (
                <Div as="form" theme={signInFormStyle} onSubmit={formik.handleSubmit}>
                    <H3 theme={signInFormStyle.heading}>Sign In</H3>
                    {signInFieldTypes.map(f =>
                        <>
                            {console.log('f', f)}
                            <FieldSwitch
                                formik={formik}
                                fieldType={f}
                            />
                        </>
                    )}

                    <SubmitButton
                        theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                        children={'Submit'}
                    />
                </Div>
            )}
        </Formik>
    )
}

export default SignIn