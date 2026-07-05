// Practicar con Node.js
// Daily scrum
// Ctrl + D to end OR Ctrl+Z

// DEMO
process.stdout.write('welcome. ¿En que te puedo ayudar?');
process.stdin.on('data', (input)=>{
    const answer = input.toString();
    console.log(answer);
    //process.exit();
});

// Ctrl D o Ctrl Z
process.stdin.on('end', () => {
    console.log('Thank you. Have a great day');
    process.exit();
});


/* 
console.log("Bienvenidos al daily scrum.");
process.stdout.write("¿Qué hiciste ayer? ");

// Listen for user input
process.stdin.on('data', (input) => {
    const answer = input.toString().trim(); // Get the answer and trim whitespace
    console.log(`Respuesta: ${answer}`);
    
    // End the program after the response
    console.log("Gracias. ¡Que tengas un gran día!");
    process.exit(); // Terminate the program
});

// Handle the end event
process.stdin.on('end', () => {
    console.log('Thank you. Have a great day');
    process.exit();
});




// Respuesta de Daily SCRUM ------------------

console.log("Bienvenidos al daily scrum. ");
process.stdout.write("¿Qué hiciste ayer? ");

// input is variable to callback function

process.stdin.on('data', (input) => {
    let answer1 = input.toString();
    console.log(`Answer is ${answer1}`);
    process.stdout.write("¿Qué vas a hacer hoy? ");
    
    process.stdin.on('data', (input) => {
        let answer2 = input.toString();
        console.log(`Answer is ${answer2}`);
        process.stdout.write("¿Qué impedimentos hay? ");
        

        process.stdin.once('data', (input) => {
            let answer3 = input.toString();
            console.log(`Answer is ${answer3}`);
            process.exit();  // terminar
        });

    });

});

process.stdin.on('end', ()=> {
    console.log('Thank you. Have a great day');
    process.exit();
})

 */