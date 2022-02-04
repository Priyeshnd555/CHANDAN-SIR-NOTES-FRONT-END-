
// Order of Excecution 

function First(){

    setTimeout(function(){
        console.log('1. this is a timeout ');// this excecutes at last 
         // because it is a web api related to browser 
         // only after all normal function excecution it excecutes 
         //i,e say after event loop removes all the normal functions in    CALL STACK 
    },0);
    console.log('first function outside settimeout');

};

function Two(){
    console.log('second function ');
}


function Three(){
    console.log("Third function ");
}

First();
Two();
Three();

