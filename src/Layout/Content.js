import {AnimatePresence}      from 'framer-motion'
import React, {
    useContext,
    useEffect
}                             from 'react'
import {useDispatch}          from 'react-redux'
import {
    Route,
    Switch
}                             from 'react-router'
import AddCategory   from '../Admin/AddCategory'
import CreateProduct from '../features/admin/CreateProduct'
import ManageShop    from '../features/admin/ManageShop'
import Orders     from '../Admin/Orders'
import UpdateBusiness from '../features/admin/UpdateBusiness'
import UpdateCategory from '../Admin/UpdateCategory'
import UpdateProduct          from '../Admin/UpdateProduct'
import AdminRoute             from '../auth/AdminRoute'
import PrivateRoute from '../auth/PrivateRoute'
import MotionDiv    from '../shared/Basic/MotionDiv'
import Business     from '../features/business/Business'
import Marketplace            from '../features/business/Marketplace'
import {TransitionAnimations} from '../Containers/TransitionController'
import CreateBusiness         from '../features/admin/CreateBusiness'
import ManageMarketplace      from '../features/admin/ManageMarketplace'
import NotFound               from '../features/site/NotFound'
import AdminDashboard         from '../features/user/AdminDashboard'
import Profile                from '../features/user/Profile'
import SignIn                 from '../features/user/SignIn'
import SignUp                 from '../features/user/SignUp'
import UserDashboard          from '../features/user/UserDashboard'
import Cart                   from '../Shop/Cart'
import Product from '../Shop/Product'
import Shop    from '../features/shop/Shop'

const Content = () => {
    const {contentAnimation, currentPath} = useContext(TransitionAnimations)
    const dispatch = useDispatch()
    const getSlug = path => path.substring(path.lastIndexOf('/') + 1)


    useEffect(() => {
        dispatch({type: 'site/setConfig', payload: {path: currentPath, slug: getSlug(currentPath)}})

    }, [currentPath, dispatch])

    return (
        <AnimatePresence>
            <MotionDiv animate={contentAnimation} theme={{width: '100%'}}>
                <Switch location={{pathname: currentPath}}>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/signin" exact component={SignIn}/>
                    <Route path="/marketplace" exact component={Marketplace}/>
                    <Route path="/marketplace/:slug" exact component={Business}/>
                    <Route path="/cart" exact component={Cart}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:slug" exact component={Product}/>
                    <PrivateRoute path="/settings/profile" exact component={Profile}/>
                    <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
                    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                    <AdminRoute path="/admin/products" exact component={ManageShop}/>
                    <AdminRoute path="/admin/marketplace" exact component={ManageMarketplace}/>
                    <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
                    <AdminRoute path="/admin/marketplace/update/:slug" exact component={UpdateBusiness}/>
                    <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
                    <AdminRoute path="/admin/orders" exact component={Orders}/>
                    <AdminRoute path="/create/category" exact component={AddCategory}/>
                    <AdminRoute path="/create/product" exact component={CreateProduct}/>
                    <AdminRoute path="/create/business" exact component={CreateBusiness}/>
                    <Route component={NotFound} />
                </Switch>
            </MotionDiv>
        </AnimatePresence>
    )
}

export default Content


