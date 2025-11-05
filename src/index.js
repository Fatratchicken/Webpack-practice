import  "./styles.css";

import { pageLoad } from "./init-page-load.";
import { menuLoad } from "./menu-page";
import { aboutLoad } from "./about-page";


// init load:
pageLoad();

const TABS = {
    HOME: "home",
    MENU: "menu",
    ABOUT: "about",
}   

function tabSelect(tab){
    // clear the dom:
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    switch (tab){
        case TABS.HOME:
            pageLoad();
            break;
        
        case TABS.MENU:
            menuLoad();
            break;

        case TABS.ABOUT:
            aboutLoad();
    }
}

// events:
const tabList = document.querySelector('#tabs');

tabList.addEventListener('click', (event) => {
    const targetId = event.target.id;

    if (targetId != ""){
        tabSelect(targetId);
    }
})
