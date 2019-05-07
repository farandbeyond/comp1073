// STEP 2: Get the EM element and store as a variable
var EM = document.querySelector('em');
console.log(EM);

// STEP 3: Assign a click event listener to the above element, and call function
//EM.addEventListener('click', onClick);
    
// STEP 4: Creat a function that waits for click event above
function onClick(){
    //console.log('Here');
    // STEP 4a: Display a prompt asking for input, and assign the input to a variable
    input = prompt('Input a Variable');
    console.log(input);
    // STEP 4b: Grab the input from the variable and build a new string, then change the text inside the EM element
    EM.textContent = 'Prof ' + input;
};
// STEP 5: Comment out the addEventListener above, and replace it with an ONCLICK attribute typed directly into the EM element in the HTML - note that this is common, but it is considered to be bad practice - separate your HTML and your JS

EM.onclick = onClick;

// STEP 6: Move the above JavaScript into an external file and reference it with an empty SCRIPT element just before closing out the BODY
