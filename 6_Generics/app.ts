console.log("Generics");
{
    function clone<T>(value: T): T {
        // we define that both arg and return value will be a type of T. T will be defined
        // each time the method is called
    
        let serialized= JSON.stringify(value);
        return JSON.parse(serialized);
    }
    
    clone("something");
    
    // So whenever you see a place in your application that you seem to be copying the same code
    // over and over again, and all you're doing differently in each version is simply changing
    // which type you're using, then that might be a great opportunity to reduce that duplicated
    // code into a single generic function.
    
    // both below are the same types!
    const array: number[] = [1, 2, 3];
    const array2: Array<number>= [1, 2, 3];

    class KeyValuePair<TKey, TValue> {
    
        constructor(
            public key: TKey,
            public value: TValue
        ) {
        }
        
    }
    
    let pair1 = new KeyValuePair<number, string>(1, 'First');
    let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
    let pair3 = new KeyValuePair<number, string>(3, 'Third');

    class KeyValuePairPrinter<T, U> {
    
        constructor(private pairs: KeyValuePair<T, U>[]) {
        }
        
        print() {
            
            for ( let p of this.pairs ) {
                console.log(`${p.key}: ${p.value}`)
            }
        }
        
    }

    const printer = new KeyValuePairPrinter([ pair1, pair3 ])
    printer.print();
}
