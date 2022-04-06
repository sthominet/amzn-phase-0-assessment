// 1. Write your functions here

/* line function
Input: array
Output: string containing everyone with their current place in line
*/

function line(katzDeli) {
  
    if (katzDeli.length == 0) {
        console.log(`The line is currently empty.`);
    }
    else { 
        let queue = [];
        for (const client of katzDeli) {
            queue.push(`${katzDeli.indexOf(client) +1 }. ${client}`)
        }
        console.log(`The line is currently: ${queue.join(' ')}`);
    }
}

/* takeANumber function
Input: - array for the current line of people (katzDeli)
       - string containing the name of the person joining the end of the line
Output: string containing the person's name along with their position in line
*/

function takeANumber (katzDeli, newClient) {
    console.log(`Welcome, ${newClient}. You are number ${katzDeli.length + 1} in line.`)
    katzDeli.push(newClient);
}

/* nowServing function
Input: array
Output: string containing the next person in line and then remove them from the front.
*/
function nowServing (katzDeli) {
    if (katzDeli.length == 0) {
        console.log(`There is nobody waiting to be served!`)
    }
    else {
        console.log(`Currently serving ${katzDeli[0]}.`)
        katzDeli.shift();
    }    
}


// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz" 