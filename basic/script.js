let prom = new Promise((resolve,reject) => {
    let num = Math.random();
    console.log(num);
    if(num<.5){
        resolve("yay");
    }
    else{
        reject("oh noo");
    }
});

const handleSucccess = (resolves)=>{
    console.log(resolves);
}

const handleFailure = (resolvefail)=>{
    console.log(resolvefail);
}

prom.then(handleSucccess,handleFailure);