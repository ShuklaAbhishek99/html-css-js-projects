# Important Note

A [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) promise _does not_ reject on HTTP errors (`404`, etc.). Instead, a `then()` handler must check the [`Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) and/or [`Response.status`](https://developer.mozilla.org/en-US/docs/Web/API/Response/status) properties.

![image](./Flow.png)

# javascript and classes

## OOP

## Object

-   collection of properties and methods
-   toLowerCase

## why use OOP

## parts of OOP

Object literal

-   Constructor function
-   Prototypes
-   Classes
-   Instances (new, this)

## 4 pillars

-   Abstraction
-   Encapsulation
-   Inheritance
-   Polymorphism

### _Prototype_

-   Prototype is the reason we can use access the "new" keyword
-   Classes, "this" keyword
-   Prototypal inheritance, or Simply Js interitance are also present due to this

## Everything goes to Object (it is the superior in object)

![image](./ObjectEvery.png)

# 4 Pillars of OOPs

Sure! Let's dive into the four fundamental principles of Object-Oriented Programming (OOP) in the context of JavaScript:

### 1. Abstraction

**Abstraction** is the concept of hiding the complex implementation details and showing only the essential features of an object. It helps in reducing programming complexity and effort.

In JavaScript, abstraction can be achieved using classes and objects. Consider a simple example of a `Car` class:

```javascript
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log("Car started");
    }

    drive() {
        console.log("Car is driving");
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Output: Car started
myCar.drive(); // Output: Car is driving
```

In this example, the internal workings of how a car starts or drives are abstracted away from the user. The user only needs to know how to interact with the `Car` class through its methods (`start` and `drive`).

### 2. Encapsulation

**Encapsulation** is the technique of keeping the data (properties) and the methods (functions) that manipulate the data together in a single unit, or class. It also involves restricting access to some of the object's components, which means that some of the properties or methods are kept private and cannot be accessed from outside the class.

In JavaScript, encapsulation is typically implemented using classes and the `#` syntax for private fields (introduced in ES2022).

```javascript
class Car {
    #fuelLevel; // Private property

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#fuelLevel = 100; // Private property initialization
    }

    #consumeFuel(amount) {
        // Private method
        this.#fuelLevel -= amount;
    }

    drive() {
        if (this.#fuelLevel > 0) {
            this.#consumeFuel(10);
            console.log("Car is driving");
        } else {
            console.log("Out of fuel");
        }
    }

    getFuelLevel() {
        return this.#fuelLevel;
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.drive(); // Output: Car is driving
console.log(myCar.getFuelLevel()); // Output: 90
console.log(myCar.#fuelLevel); // Error: Private field '#fuelLevel' must be declared in an enclosing class
```

In this example, `#fuelLevel` and `#consumeFuel` are private and cannot be accessed from outside the `Car` class. This ensures that the internal state and behavior of the car are protected from outside interference.

### 3. Inheritance

**Inheritance** is a mechanism where a new class (child class) is derived from an existing class (parent class). The child class inherits the properties and methods of the parent class and can have additional properties and methods or override existing ones.

In JavaScript, inheritance is achieved using the `extends` keyword.

```javascript
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model); // Call the parent class constructor
        this.year = year;
    }

    drive() {
        console.log("Car is driving");
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Output: Vehicle started
myCar.drive(); // Output: Car is driving
```

In this example, the `Car` class inherits from the `Vehicle` class, allowing `Car` to use the `start` method defined in `Vehicle`.

### 4. Polymorphism

**Polymorphism** allows methods to do different things based on the object it is acting upon, even though they share the same name. This can be achieved through method overriding and method overloading (although JavaScript does not support method overloading natively).

In JavaScript, polymorphism is typically seen with method overriding.

```javascript
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}

const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach((animal) => animal.makeSound());
```

In this example, the `makeSound` method is overridden in both the `Dog` and `Cat` classes. When the `makeSound` method is called on each object in the `animals` array, it behaves differently depending on the actual type of the object.

Output:

```
Some generic animal sound
Bark
Meow
```

### Summary

-   **Abstraction**: Hides complex implementation details and exposes only essential features.
-   **Encapsulation**: Combines data and methods in a class, restricting access to some of the components.
-   **Inheritance**: Allows a class to inherit properties and methods from another class.
-   **Polymorphism**: Enables methods to perform different functions based on the object they are called on.
