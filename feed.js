// Define a Cat class
class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.isHungry = true;
    }

    // Method to feed the cat
    feed() {
        if (this.isHungry) {
            console.log(`${this.name} is eating.`);
            this.isHungry = false;
        } else {
            console.log(`${this.name} is not hungry right now.`);
        }
    }

    // Method to play with the cat
    play() {
        console.log(`${this.name} is playing.`);
    }

    // Method to sleep
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    // Method to meow
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}

// Create an instance of Cat
const myCat = new Cat('Whiskers', 'Tabby', 3);

// Interact with the cat
myCat.meow();
myCat.feed();
myCat.play();
myCat.sleep();
