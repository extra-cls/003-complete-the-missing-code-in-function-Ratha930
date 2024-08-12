function sum(value1, value2){
    /*
    Write the code here to sum of two values from the
    parameters then return the result
    */
    // YOUR CODE HERE ....
    function addValues(a, b) {
        return a + b;
    }
    
    // Example usage:
    const result = addValues(5, 3);
    console.log(result); // Output: 8
    
    
}


const greeting = (name) => {
    /*
    Complete this function to get the greeting message

    EX: 
        Calling: greeting('natt')
        Return: Hello natt!

    NOTE: it's the return function.
    */

    // YOUR CODE HERE ...
    const greeting = (name) => {
        return `Hello ${name}!`;
    };
    
    // Example usage:
    const result = greeting('natt');
    console.log(result); // Output: Hello natt!
    
}



// DO NOT REMOVE THIS LINE OF CODE
export {sum, greeting};