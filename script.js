// python -m http.server
let animalPopulation=0;
let allAnimals=[];
document.getElementById("newAnimal").addEventListener("click", createAnimal);
function run() {
    let tigger=new Tiger("Tigger");
    let pooh=new Bear("Pooh");
    let rarity=new Unicorn("Rarity");
    let gemma=new Giraffe("Gemma");
    let stinger=new Bee("Stinger");
    allAnimals.push(tigger,pooh,rarity,gemma,stinger);
    
    
    

}


class Animal {

    constructor(name,favoriteFood) {
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }
    
    static getPopulation() {
        return animalPopulation;
    }
    
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name+" eats "+food);
        if(food==this.favoriteFood) {
            console.log("YUM!!! "+this.name+" wants more "+food);
        } else {
            this.sleep(this.name);
        }
    }
}

class Tiger extends Animal {

    constructor(name) {
        super(name,"meat");
    }

    
}

class Bear extends Animal {
    constructor(name) {
        super(name,"fish");
    }
    
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
    
}

class Unicorn extends Animal {
    constructor(name) {
        super(name,"marshmallows");
    }
    
    sleep() {
        console.log(this.name+" sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name,"leaves");
    }
    
    eat(food) {
        if (food==this.favoriteFood) {
            super.eat(food);
            super.sleep();
        } else {
            console.log("YUCK!!! "+this.name +" will not eat "+food);
        }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name,"pollen");
    }
    
    eat(food) {
        if (food==this.favoriteFood) {
            super.eat(food);
            this.sleep();
        } else {
            console.log("YUCK!!! "+this.name +" will not eat "+food);
        }
    }
    
    sleep() {
        console.log(this.name+" never sleeps");
    }
}




function createAnimal() {
    let sub=animal(document.getElementById("animal").getValue);
}



class Zookeeper {
    constructor(name) {
        this.name=name;
    }
    
    feedAnimals(animals,food) {
        console.log(this.name+" is feeding "+food+" to "+animals.length+" of "+animalPopulation+" total animals");
        for (let i=0; i<animals.length; i++) {
            animals[i].eat(food);
        }
    }
}
