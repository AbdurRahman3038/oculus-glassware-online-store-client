import React from 'react';
import './Dashboard.css';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProducts from '../AddProducts/AddProducts';
import AddReview from '../AddReview/AddReview';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../LoginRegistration/AdminRoute/AdminRoute';


const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div class="container-fluid">
            <div class="row dashboard-container">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light ">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">

                            <li class="nav-item">
                                <Link className="nav-link active" aria-current="page" to={`${url}`}> Dashboard </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${url}/payment`}> Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${url}/my-order`}> My Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${url}/add-review`}> Review </Link>
                            </li>

                            {admin && <>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${url}/manage-products`}> Manage Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${url}/manage-orders`}> Manage Orders </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${url}/add-product`}> Add Product </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${url}/make-admin`}> Make Admin </Link>
                                </li>
                            </>
                            }

                        </ul>
                    </div>
                </nav>

                <div className="col-md-9 col-lg-10">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/my-order`}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/add-review`}>
                            <AddReview></AddReview>
                        </Route>

                        <AdminRoute path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-orders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/add-product`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>


                    </Switch>
                </div>

            </div>


        </div>
    );
};

export default Dashboard;