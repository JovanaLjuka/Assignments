import view from "./view.js";

let controller=(view,model)=>{
    let counter=0;
    let setupListener=()=>{
        document.querySelector(view.getDomElement().start).addEventListener(`click`,Start);
        document.querySelector(view.getDomElement().next).addEventListener(`click`,Next);
        document.querySelector(view.getDomElement().previous).addEventListener(`click`,Previous);
    }
    
    
    function Start(){
        let interval=setInterval(()=>{
            counter++;
            if(counter>3){
                counter=0;
            }
            let object=model.getPicture(counter);
            view.changePicture(object);
        },1000);
        document.querySelector(view.getDomElement().stop).addEventListener(`click`,Stop);
        function Stop(){
            clearInterval(interval)
        }
    }
    function Next(){
        counter++;
        if(counter>3){
            counter=0;
        }
        let object=model.getPicture(counter);
            view.changePicture(object);
    }
    function Previous(){
        counter--;
        if(counter<0){
            counter=3;
        }
        let object=model.getPicture(counter);
            view.changePicture(object);
    }
    


    return{
        init:()=>{
            setupListener();
        }
    }
}
export default controller;