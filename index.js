// Code your solutions in this file


const names = ['Dan', 'Mark', 'Anthony', 'Michelle']
let messages = []
function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}


function countDown(num) {
    let counter = num
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

//countDown(5)