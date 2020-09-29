import React, {useMemo} from 'react'
import {Route, Switch} from 'react-router'
import AddBusiness from '../Admin/AddBusiness'
import AddCategory from '../Admin/AddCategory'
import AddProduct from '../Admin/AddProduct'
import ManageBusinesses from '../Admin/ManageBusinesses'
import ManageProducts from '../Admin/ManageProducts'
import Orders from '../Admin/Orders'
import UpdateBusiness from '../Admin/UpdateBusiness'
import UpdateCategory from '../Admin/UpdateCategory'
import UpdateProduct from '../Admin/UpdateProduct'
import AdminRoute from '../auth/AdminRoute'
import PrivateRoute from '../auth/PrivateRoute'
import Business from '../Business/Business'
import Businesses from '../Business/Businessess'
import Cart from '../Shop/Cart'
import Product from '../Shop/Product'
import Shop from '../Shop/Shop'
import AdminDashboard from '../features/user/AdminDashboard'
import Profile from '../features/user/Profile'
import SignIn from '../features/user/SignIn'
import SignUp from '../features/user/SignUp'
import UserDashboard from '../features/user/UserDashboard'

const Content = () => {
    return (
        <Switch>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/businesses" exact component={Businesses}/>
            <Route path="/businesses/:slug" exact component={Business}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/shop/:slug" exact component={Product}/>
            <PrivateRoute path="/settings/profile" exact component={Profile}/>
            <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoute path="/admin/products" exact component={ManageProducts}/>
            <AdminRoute path="/admin/businesses" exact component={ManageBusinesses}/>
            <AdminRoute path="/admin/product/update/:slug" exact component={UpdateProduct}/>
            <AdminRoute path="/admin/business/update/:slug" exact component={UpdateBusiness}/>
            <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory}/>
            <AdminRoute path="/admin/orders" exact component={Orders}/>
            <AdminRoute path="/create/category" exact component={AddCategory}/>
            <AdminRoute path="/create/product" exact component={AddProduct}/>
            <AdminRoute path="/create/business" exact component={AddBusiness}/>
        </Switch>
    )
}

export default Content