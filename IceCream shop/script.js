let stocks = {
    fruits: ["strawberry","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate","peanuts"]
};

let is_shop_open = true;

function time (ms)
{
    return new Promise((resolve, reject) =>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen()
{
    try{

        await time(2000)
        console.log(`${stocks.fruits[1]} was selected`);

        await time(0000)
        console.log("start the production")

        await time(1000)
        console.log("cut the fruits")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("machine is started")

        await time(1000)
        console.log(`${stocks.holder[0]} is selected`)

        await time(1000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(1000)
        console.log("Icecream is served")
    }
    catch(error){
    console.log("customer left", error)     
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();