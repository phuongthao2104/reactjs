
const promise = new Promise((resolve, reject) => {
    // do st
    let a = 1;
    let b = 1;
    if (a === b) {resolve()}
    else{
        reject();
    }
})
//promise
promise
 .then(function(){
    console.log('success');
})
 .catch(function(){
     console.log('fail');
 })


//promise all
const promise1 = Promise.resolve(7);
const promise2 = 54;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});