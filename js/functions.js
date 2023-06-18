const isFormValidation = (str, num) => str.lenght <= num;

isFormValidation('bourbon', 7);

const isPalindrome = (str) => str.toUpperCase() === str.toUpperCase().split('').reverse().join('');

isPalindrome('довод');
