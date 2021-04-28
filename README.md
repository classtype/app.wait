## Что это?

**App.wait** — это [npm-пакет](https://www.npmjs.com/package/app.wait) с помощью которого
вы можете создавать искусственные задержки через await.


## Установка

```
$ npm i app.wait
```

#### Пример

```js
const wait = require('app.wait');

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
```

#### Исходный код

```js
module.exports = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
```

Как мы видим это просто promise обернутый в setTimeout.