function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function nameBig(){
        console.log("This is a named fucntion")
    }
}

function returnsAnAnonymousFunction(){
    return () =>console.log()
}
