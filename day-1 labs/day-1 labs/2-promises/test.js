var test =  async () => {
   const result =  await test1();
    console.log(result);
   console.log(' next exec')
};

var test1 = ()=>{
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(true)
        },10000)
    })
};
test();