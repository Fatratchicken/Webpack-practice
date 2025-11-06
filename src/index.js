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
            break;
    }
}

// events:
const tabList = document.querySelector('#tabs');

tabList.addEventListener('click', (event) => {
    const targetId = event.target.id;

    // make sure its one of the buttons
    if (Object.values(TABS).includes(targetId)){
        tabSelect(targetId);
    }
})
