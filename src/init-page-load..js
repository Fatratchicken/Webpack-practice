function pageLoad(){
    const mainDiv = document.querySelector('#content');

    // insert main background: 
    const mainBg = document.createElement('div');
    mainBg.classList.add('mainBg');


    // insert main title:
    const title = document.createElement('h1');
    title.textContent = "The Log";
    title.classList.add('mainTitle');
    

    //log image: 
    const log = document.createElement('div');
    log.classList.add('log');

    title.appendChild(log);
    mainBg.appendChild(title);

    // text description of the place: 
    const description = document.createElement('p');
    const descriptionString = "\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae exercitationem natus ea esse enim quod consequatur, unde quis, deleniti velit sint sed eius iure blanditiis non nisi error dolore! Similique\"."
    description.textContent = descriptionString.repeat(4);
    description.classList.add('description');
    mainBg.appendChild(description);

    
    // append to content:
    mainDiv.appendChild(mainBg);
}

export {pageLoad};