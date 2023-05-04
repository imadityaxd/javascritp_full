let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let is_shop_open = true;

let order = (time, work) =>{

    return new Promise((resolve, reject) =>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())},time);
        }

        else{
            reject(console.log("our shop is closed"));
        }
    });
}

order(0500, ()=>console.log(`${stocks.fruits[2]} was selected`))
.then(()=>{
    return order(0200,()=>console.log("production has started"))
})
.then(()=>{
    return order(0200,()=>console.log("Fruit has been chopped"))
})
.then(()=>{
    return order(0200,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(()=>{
    return order(0200,()=>console.log("Machine was started"))
})
.then(()=>{
    return order(0200,()=>console.log(`Ice cream was placed in ${stocks.holder[2]}`))
})
.then(()=>{
    return order(0200,()=>console.log(`${stocks.toppings[0]} was added on Ice cream`))
})
.then(()=>{
    return order(0200,()=>console.log("Ice cream is ready to serve"))
})