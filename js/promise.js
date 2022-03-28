const promise = new Promise((resolve, reject) => {
    // do st
    let a = 1;
    let b = 1;
    if (a === b) {resolve()}
    else{
        reject();
    }
})
promise
 .then(function(){
    console.log('success');
})
 .catch(function(){
     console.log('fail');
 })