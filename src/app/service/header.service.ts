import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class HeaderService{

    menuItems : any;

constructor(){
    const menuItems = {
        "title" : "DaVinci",
        "menus" : [
                    {
                        "title"         : "Home",
                        "key"           : "1",
                        "displayName"   : "Home",
                        "isChild"       :  false,
                        "subMenu"       : [],
                        "url"           : "home"
                    },
                    {
                        "title"         : "Dashboard",
                        "key"           : "2",
                        "displayName"   : "Dashboard",
                        "isChild"       :  true,
                        "url"           : "dashboard",
                        "subMenu"       : [
                                                {
                                                    "title"         : "Dashboard1",
                                                    "key"           : "d1",
                                                    "displayName"   : "Dashboard1",
                                                    "url"           : "dashboard"
                                                },
                                                {
                                                    "title"         : "Dashboard2",
                                                    "key"           : "d2",
                                                    "displayName"   : "Dashboard2",
                                                    "url"           : "dashboard"
                                                }
                                            ]
                    },
                    {
                        "title"         : "Reports",
                        "key"           : "3",
                        "displayName"   : "Reports",
                        "isChild"       :  true,
                        "url"           : "report",
                        "subMenu"       : [
                                                {
                                                    "title"         : "Report1",
                                                    "key"           : "r1",
                                                    "displayName"   : "Report1",
                                                    "url"           : "report",
                                                },
                                                {
                                                    "title"         : "Report2",
                                                    "key"           : "d2",
                                                    "displayName"   : "Report2",
                                                    "url"           : "report",
                                                }
                                            ]
                    },
                    {
                        "title"         : "About Us",
                        "key"           : "4",
                        "displayName"   : "About Us",
                        "isChild"       :  false,
                        "url"           : "about-us",
                        "subMenu"       : []
                    }

                ]
    };

    this.menuItems = menuItems;
}


getMenuItems(){
    return this.menuItems;
}
}

