var e,o;console.log("✅ Fulfilled promise in ms"),(e=2,o=1500,new Promise(((i,s)=>{const l=Math.random()>.3;setTimeout((()=>{l?i(`✅ Fulfilled promise ${e} in ${o}ms`):s(`❌ Rejected promise ${e} in ${o}ms`)}),o)}))).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.792664b8.js.map
