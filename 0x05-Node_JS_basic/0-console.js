/**
 * Outputs a given message to the console.
 * @param {string} message - The text to be logged.
 * @returns {void}
 */
// Arrow function for logging the message
const displayMessage = (message) => console.log(message);

/**
 * Makes the displayMessage function available for import in other modules.
 * @module displayMessage
 * @function
 */
// Export the displayMessage function as the default module export.
module.exports = displayMessage;
