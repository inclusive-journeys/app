import React                 from 'react'
import Div                   from '../../shared/Basic/Div'
import H3                    from '../../shared/Basic/H3'
import Li                    from '../../shared/Basic/Li'
import Ul                    from '../../shared/Basic/Ul'
import {adminDashboardStyle} from '../../themes/admin'
import {useSelector}         from "react-redux";
import {contentWrapperStyle} from '../../themes/layout'

const AdminDashboard = () => {
    const {name, email} = useSelector(state => state.user)

    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={adminDashboardStyle}>
                <H3 theme={adminDashboardStyle.heading}>Hey, {name}</H3>
                <Ul>
                    <Li>{email}</Li>
                </Ul>
            </Div>
        </Div>

    )
}

export default AdminDashboard