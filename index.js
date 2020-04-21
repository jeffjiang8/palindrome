function palindrome(str) {
    //alt:    const reverse = str.split('').reverse().join('')
    //          if ( reverse === str ) {
    //              return true
    //          }
    //              or
    //          return reverse === str

    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
      });

    // .every() perform a boolean check on every element within an array
    // ie. ["0", "10", "14"].every((val) => val > 5) #=> false
}
