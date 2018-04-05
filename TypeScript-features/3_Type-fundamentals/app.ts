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

    function totalLength(x, y) {
        // ts has no idea that .length will return a number. ts assigns 'any' to both arg and return value
        // ts is here to help so you want to avoid 'any' as much as you can
        // here ts doesnt know about typo below
        const total = x.length + y.lengt;
        return total;
    }

    function totalLengthTyped(x:string, y:string){
        // here typo will be recognised
        const total : number = x.length + y.length;
        
        return total;
    }


    function totalLengthUnion(x: any[], y: any[]): number // we add function overload to make sure both args are same type
    function totalLengthUnion(x: string, y: string): number
    function totalLengthUnion(x: string | any[], y: string | any[]): number {
        // we can use autocomplition to use string and array methods
        var total: number = x.length + y.length;

        // typeguards like below allow us to tread input x differently
        // if it's array or string

        if(x instanceof Array) {
            x.push('TypeScript') // this will not be allowed outside of this 'if'
        }
        
        if(x instanceof String) {
            x.substr(0) // and neither this!
        }

        return total;
    }

    // both types and function overloads are simply metadata to let you write a better code
    
}
