// creating the cadi car object first
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    fuel: 0,
    start: function()
    {
        this.started = true;
    },
    stop: function()
    {
        this.started = false;
    },
    drive: function()
    {
        if(this.started)
        {
            if(this.fuel>0){
            alert(this.make +" "+ this .model+" goes zoom zoom! ");
            this.fuel = this.fuel - 1;
            }else{
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        }
        else
        {
            alert("You need to start the engine first.")
        }
    },
    addFuel: function(amount)
    {
        this.fuel = this.fuel + amount;
    }
};

cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.stop();
cadi.start();
cadi.drive();
cadi.stop();
cadi.start();
cadi.drive();
cadi.stop();