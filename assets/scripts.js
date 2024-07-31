const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
let result = document.getElementById('result');

// console.log(input, checkBtn, result)


// check if text has been entered into input field
checkBtn.addEventListener('click', checkInput);

function checkInput () {
    const inputValue = input.value;

    if(inputValue === '') {
        alert('Please input a value')
    } else {
        if(isPalindrome(inputValue)) {
            result.textContent = `"${inputValue}" is a palindrome`;
            result.className = 'answer-bolded';
        } else {
            result.textContent = `"${inputValue}" is not a palindrome`;
            result.className = 'answer-bolded';
        }
    } 
}

//verify word is a palindrome
function isPalindrome (word) {
    //convert to lowercase and remove spaces & punctuation
    const cleanedWord = word.toLowerCase().replace(/[\W_]/g, '');
    console.log("clean word:", cleanedWord);
    
    //reverse the cleaned word
    const reversedWord = cleanedWord.split('').reverse().join('');
    console.log('reversed word:', reversedWord)
    // console.log('split word:', word.split(''))
    // console.log('split word:', word.split('').reverse())
    // console.log('split word:', word.split('').reverse().join(''))

    //check if matches cleaned word matches reversed word
    const isPalindrome = cleanedWord === reversedWord;
    console.log('Is palindrome:', isPalindrome);
    return isPalindrome;
}

console.log(isPalindrome("not a palindrome"));

