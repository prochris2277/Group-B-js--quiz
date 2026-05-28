// // TODO 1: Declare & assign variables pointing to the corresponding element(s)
//     // statement should be the "statement" div
//     // optionButtons should be all the elements within the "options" div
//     // explanation should be the "explanation" div
//     const statement = document.getElementById("statement")
//     const optionButtons = document.querySelectorAll("button")
//     const explanation = document.getElementById("explanation")


//     // TODO 2: Declare & assign a variable called fact
//     // Its value should be an object with a statement, true/false answer, and explanation 
    const facts = [{
        statement: "java is the same as javaSCript?",
        answer: "false" , 
        explanation:"Java is a general-purpose language primarily used for enterprise software, Android mobile apps, and massive backend systems while JavaScript is the core language of the web, used to create interactive frontend elements and modern server-side applications via Node.js."
    },
    {
        statement: "Is 14 same as '14'?",
        answer: "false" , 
        explanation:" 14 is number while '14' is a string."
    },
    {
        statement: "External javaScript files must be saved with a '.js extension'?",
        answer: "true" , 
        explanation:" Just like HTML and CSS uses .html and .css respectively, javascript source files require the .js file extension to run correctly."
    },
    {
        statement: "JavaScript was invented in 1995",
        answer: "true" , 
        explanation:"Javascript was invented in 1995 by Brendan Eich."
    },
    {
        statement: "Arrays in javascript can contain different data types?",
        answer: "true" , 
        explanation:" An array can store numbers, strings, objects, boolean and more together."
    },


 ]    
     

    
    

    
//     // TODO 3: Set the text of the statement element to the fact's statement
//     statement.textContent = facts.statement
    

        

//     // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
//     // disable(button) should set the button element's attribute "disabled" to the value ""
//     // enable(button) should remove the attribute "disabled" from the button element
//     const disable =  (buttonElement) => buttonElement.setAttribute('disabled', '')

//     const enable = (buttonElement) => buttonElement.removeAttribute('disabled');
   
    
     
     
//     // TODO 5: Declare an isCorrect function that compares a guess to the right answer
//     // isCorrect(guess) should return true if the guess matches the fact's answer
//     const isCorrect = (guess) => {
//         return guess === facts.answer;
            
//         }
 
//     // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
//             // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
//             for (const button of optionButtons) {
//                 button.addEventListener("click",  () => {
//                      (explanation.textContent = fact.explanation);
                     

//                     for(const button of optionButtons){
//                         disable(button)
//                      }

//                      const guessedValue = button.value
                     
//                      if (isCorrect(guessedValue)) {
//                         button.classList.add("correct")
//                      }else {
//                          button.classList.add("incorrect")
//                      }

                     
//                 })
//             }
             
 
//             // TODO 7: Within the event handler function, 
//             // Use a for loop to disable all the option buttons


//             // TODO 8: Within the event handler function,
//             // Get the guessed value from the clicked button
//             // Use a conditional to compare the guess to the fact's answer
//             // and add the "correct"/"incorrect" class as appropriate
// // const nextButton = document.getElementById("next-btn");

// // const currentQuestionIndex = 0;

// // const handleNextbutton =  () =>{
// //     currentQuestionIndex ++ ;
// //     if (currentQuestionIndex < facts.length){
// //         showfacts
// //     }
// // } 
// // // Start score at 0
// // let score = 0;

// // // Question 1
// // let answer1 = "false";

// // if (answer1 === "false") {
// //     score++;
// // }

// // // Question 2
// // let answer2 = "false";

// // if (answer2 === 10) {
// //     score++;
// // }

// // // Question 3
// // let answer3 = "Blue";

// // if (answer3 === "Blue") {
// //     score++;
// // }

// // // Question 4
// // let answer4 = true;

// // if (answer4 === true) {
// //     score++;
// // }

// // // Question 5
// // let answer5 = "JavaScript";

// // if (answer5 === "JavaScript") {
// //     score++;
// // }

// // // Display final score
// // console.log("Your final score is: " + score + "/5"); 







 function hide(element) {
        element.classList.add("hidden");
    }

    function show(element) {
        element.classList.remove("hidden");
    }

    function disable(button) {
        button.setAttribute("disabled", "");
    } 

    function enable(button) {
        button.removeAttribute("disabled");
    }


    let correct = 0;
    let completed = 0;
    
    let fact;


    const explanation =  document.getElementById("explanation");
    const nextButton = document.getElementById("next-question");
    const optionButtons = document.getElementById("options").children;

    function getNextFact() {
        fact = facts.shift(); // get the first fact in our array (shortening the array)

        // set the question text to the current fact's statement
        document.getElementById("statement").textContent = fact.statement;

        // hide any previous explanation
        hide(explanation);

        for (let option of optionButtons) {
            // clear any previous classes
            option.classList.remove("correct");
            option.classList.remove("incorrect");
            // make sure buttons are enabled
            enable(option);
        }

        // disable next-question button
        disable(nextButton);
        
    }

    nextButton.addEventListener("click", getNextFact);

    for (let option of optionButtons) {
        option.addEventListener("click", e => {
            // When this option is clicked...

            // disable all the option buttons
            for (let button of optionButtons) {
                disable(button); 
            }

            // enable the 'next question' button, if we still have facts left
            if (facts.length > 0) {
                enable(nextButton);
            } else {
                nextButton.textContent = "No more questions!"
            }

            const guess = e.target.value;
            if (guess === fact.answer) {
                // correct answer!
                e.target.classList.add("correct");
                correct += 1;
            } else {
                // wrong answer!
                e.target.classList.add("incorrect");
            }

            // display the explanation
            explanation.textContent = fact.explanation;
            show(explanation);
            
            // update the score
            completed += 1;
            document.getElementById("correct").textContent = correct;
            document.getElementById("completed").textContent = completed;

        })
    }

    getNextFact();

    