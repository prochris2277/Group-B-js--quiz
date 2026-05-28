// TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    // optionButtons should be all the elements within the "options" div
    // explanation should be the "explanation" div
    const statement = document.getElementById("statement")
    const optionButtons = document.querySelectorAll("button")
    const explanation = document.getElementById("explanation")


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    const fact = {
        statement: "java is the same as javaSCript?",
        answer: "false" , 
        explanation:"Java is a general-purpose language primarily used for enterprise software, Android mobile apps, and massive backend systems while JavaScript is the core language of the web, used to create interactive frontend elements and modern server-side applications via Node.js."
    }     
     

    
    

    
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement
    

        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    // enable(button) should remove the attribute "disabled" from the button element
    const disable =  (buttonElement) => buttonElement.setAttribute('disabled', '')

    const enable = (buttonElement) => buttonElement.removeAttribute('disabled');
    //  const disable1 = () => {
    //     optionButtons[0].disabled = true;
    // }

    // const disable2 = () => {
    //     optionButtons[1].disabled = true;
    // }

    // const disable = () => {
    //     disable1();
    //     disable2()
    // }


    // const enable1 = () => {
    //     optionButtons[0].disabled = false;
    // }

    // const enable2 = () => {
    //     optionButtons[1].disabled = false;
    // }
    // const enable = () => {
    //     enable1();
    //     enable2()
    // }
     
     
    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    const isCorrect = (guess) => {
        return guess === fact.answer;
            
        }
 
    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
            for (const button of optionButtons) {
                button.addEventListener("click",  () => {
                     (explanation.textContent = fact.explanation);
                     

                    for(const button of optionButtons){
                        disable(button)
                     }

                     const guessedValue = button.value
                     
                     if (isCorrect(guessedValue)) {
                        button.classList.add("correct")
                     }else {
                         button.classList.add("incorrect")
                     }

                     
                })
            }
             
 
            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons


            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate

    