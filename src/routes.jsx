import React from 'react';
import Admin from "./pages/admin.jsx";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE, APARTMENT_ROUTE,
    BLOG_ROUTE, HOME_ROUTE,
    LOGIN_ROUTE, PROFILE_ROUTE,
    PROPERTIES_ROUTE,
    SERVICES_ROUTE, SIGN_ROUTE
} from "./utils/consts.js";
import Login from "./pages/login.jsx";
import sign from "./pages/sign.jsx";
import blog from "./pages/blog.jsx";
import about from "./pages/about.jsx";
import services from "./pages/services.jsx";
import properties from "./pages/properties.jsx";
import home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import apartment from "./pages/apartment.jsx";
export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]
export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: SIGN_ROUTE,
        Component: sign
    },
    {
        path: BLOG_ROUTE,
        Component: blog
    },
    {
        path: ABOUT_ROUTE,
        Component: about
    },
    {
        path: SERVICES_ROUTE,
        Component: services
    },
    {
        path: PROPERTIES_ROUTE,
        Component: properties
    },
    {
        path: HOME_ROUTE,
        Component: home
    },
    {
        path: APARTMENT_ROUTE,
        Component: apartment
    },

]