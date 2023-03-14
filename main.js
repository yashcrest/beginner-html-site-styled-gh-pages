const image = document.querySelector('img');

image.onclick = () => {
    const src = image.getAttribute('src');
    if (src === 'images/firefox-icon.png') {
        image.setAttribute("src" , "images/safari.png");
    } 
    else {
        image.setAttribute("src" , "images/firefox-icon.png");
    }
}

let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function setUsername(){
    const name = prompt("Please enter your Name:");
    if(!name){
        setUsername();
    }else{
            localStorage.setItem("name", name);
            heading.textContent = `Mozilla is fucking Awesome ${name}`;
    }
}

function getUsername(){
    const namevalue = localStorage.getItem('name');
    return namevalue;
}

if (!localStorage.getItem('name')) {
    setUsername();  
} else {
    const storedName = localStorage.getItem('name');
    heading.textContent = `Mozilla is fucking awesome ${storedName}`;
}

btn.onclick = () => {
    setUsername();
}

