//--------------------------------------------------------------------------------------------------

const wait = require('../src/app.wait');

(async () => {
    let t = new Date().getTime();
    
    await wait(1000);
    console.log(new Date().getTime() - t);
    
    await wait(1000);
    console.log(new Date().getTime() - t);
    
    await wait(1000);
    console.log(new Date().getTime() - t);
    
    await wait(1000);
    console.log(new Date().getTime() - t);
    
    //=> 1004
    //=> 2012
    //=> 3014
    //=> 4015
})();

//--------------------------------------------------------------------------------------------------