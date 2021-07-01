import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebardata=[
    {
        title:'Dashboard',
        path:'/',
        icon:<AiIcons.AiFillDashboard/>,
        cname:'nav-text'
    },
    {
        title:'Reports',
        path:'/Reports',
        icon:<AiIcons.AiFillBook/>,
        cname:'nav-text'
    },
    {
        title:'Customer',
        path:'/Customer',
        icon:<AiIcons.AiFillCustomerService/>,
        cname:'nav-text'
    },
]
