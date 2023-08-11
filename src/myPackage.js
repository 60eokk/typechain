


// Let's pretend that this js module/package is a code somebody posted on GitHub and I am ready to npm push it

// From line 8 to 14 is jusrt writing comments down but it actually is writing the code down
// ts will read my comment and is going to check for me and browser will execute my code
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
    return true;
}

// This also is just writing down comments but will make it work by lettig ts read my comment and understand what I want to do
/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code) {
    return code +1;
}