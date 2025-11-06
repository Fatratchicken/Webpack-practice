function menuLoad(){
    const mainDiv = document.querySelector('#content');
    
    // insert main background: 
    const mainBg = document.createElement('div');
    mainBg.classList.add('mainBg');

    // menu title:
    const title = document.createElement('h1');
    title.classList.add('mainTitle');
    title.textContent = "Our Menu";

    mainBg.appendChild(title);

    
    // text description of the place: 
    const description = document.createElement('p');
    const descriptionString = "\"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae exercitationem natus ea esse enim quod consequatur, unde quis, deleniti velit sint sed eius iure blanditiis non nisi error dolore! Similique\"."
    description.textContent = descriptionString.repeat(4);
    description.classList.add('description');
    mainBg.appendChild(description);



    mainDiv.appendChild(mainBg);



}

export {menuLoad};