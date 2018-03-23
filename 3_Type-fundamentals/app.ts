console.log("Type fundamentals");
{
    // javascript types :

    // boolean
    // number
    // string/undefined
    // object - key value pairs

    // functions are regular objects containing logics which can be executed
    // arrays and functions are enhanced with additional methods
    // prototypal inheritance we can use to relate one object to another

    var animal = { 
        name: "Fido",
        species: "Dog",
        age: 5,
        speak: function() { 
            console.log('Woof!'); 
        }
    }

    function makeTheAnimalSpeak(animal){
        animal.speak();
    }

    makeTheAnimalSpeak(animal);

}