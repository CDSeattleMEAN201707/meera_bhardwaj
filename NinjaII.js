function Ninja(name){
    var self = this;
    var privateVariable = "This variable is private";
    var privateMethod = function(){
        console.log(this);
    }
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function(){
        console.log("My Ninja name is "+self.name);
    }
    this.showStats = function(){
        console.log("Name: "+ self.name+", Health: "+self.health+", Speed: "+self.speed+", Strength: "+self.strength);
    }
    this.drinkSake = function() {
        this.health+=10;
    }
    this.punch = function(obj){
        if(obj instanceof Ninja){
            obj.health-=5;
            console.log(obj.name+" was punched by "+self.name+" and lost 5 Health!");
        }
        else {
            console.log("You can't punch something that isn't a Ninja!");
        }
    }
    this.kick = function(obj){
        if(obj instanceof Ninja){
            obj.strength-=5;
            console.log(obj.name+" was kicked by "+self.name+" and lost 5 Strength!");
        }
        else {
            console.log("You can't punch something that isn't a Ninja!");
        }
    }

}

var brucelee = new Ninja("Bruce");
var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
var not_ninja = "Elaine"
red_ninja.showStats();
blue_ninja.showStats();
red_ninja.punch(not_ninja);
blue_ninja.showStats();
