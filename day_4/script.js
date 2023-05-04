let stocks = {
    fruits:["Apple","Banana","Carrot","Dick","Egg","Fig"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};

let order = (Fruit_name, call_production) =>{
    setTimeout(() =>{
        console.log(`${stocks.fruits[Fruit_name]} was selected`);
        call_production();
    }, 1000);
};

let production = () =>{
    setTimeout(()=>{
        console.log("production has started");

        setTimeout(() =>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("The machine has been started");

                    setTimeout(()=>{
                        console.log(`Iceccream was placed on ${stocks.holder[0]}`);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} is sprinkled on Icecream`);

                            setTimeout(()=>{
                                console.log("Ice cream is served.");
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
};

order(0,production);