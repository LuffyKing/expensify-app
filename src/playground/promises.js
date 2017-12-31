const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      name:'Andrew',
      age:30
    });

    //resolve('this is my other resolved data')
    // reject('Something went wrong');
  }, 5000)

});
console.log('before');
promise.then((data)=>{
  console.log('1',data);
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{


      resolve('this is my other promise')
      // reject('Something went wrong');
    }, 5000)

  });
}).then((ans) => {
  console.log('does this run?',ans);
}).catch((e) => {
  console.log('error: ', e)
});


console.log('after');
