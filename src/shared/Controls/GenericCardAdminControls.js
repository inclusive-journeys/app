import React                                 from 'react'
import {useDispatch} from 'react-redux'
import {
    adminCardControlsButtonStyle,
    adminCardControlsButtonWrapperStyle
}                    from 'features/admin/views/styles'
import Div           from 'shared/Basic/Div'
import LinkSwitch                            from 'shared/Basic/LinkSwitch'

const GenericCardAdminControls = ({slug, _id, edit, destroyAction}) => {
    const dispatch = useDispatch()

    return (
        <Div theme={adminCardControlsButtonWrapperStyle}>
            <LinkSwitch
                theme={adminCardControlsButtonStyle}
                url={`${edit}/${slug}`}
            >
                Edit
            </LinkSwitch>
            <Div
                theme={adminCardControlsButtonStyle}
                onClick={() => dispatch({type: destroyAction, payload: {slug: (_id || slug)}})}
            >
                Delete
            </Div>
        </Div>
    )
}

export default GenericCardAdminControls
