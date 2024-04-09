import model from "./model.js";

const view=(()=>{
    let domElement={
        previous:".previous",
        next:".next",
        start:".start",
        stop:".stop",
        up:".up"
    };

    return{
        getDomElement:()=>{
            return domElement;
        },
        changePicture:(object)=>{
            let up=document.querySelector(domElement.up);
            up.innerHTML=`
            <img src="${object.src}" alt="${object.alt}" data-id="${object.id}" class="picture"/>
            `;
        }
    }





})();
export default view;