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

    // type inference - ts can figure out what are the types without defining them

    // animal.name = 1; - ts will not let you do this

    function calculateAge(birthYear) {
        //ts know that return type is a number!
        return Date.now() - birthYear;
    }

    const age = calculateAge(2010);


}