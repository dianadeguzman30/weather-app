console.log('client side javascipt!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const  messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = '' 


/* Stopping the web browser from performing the default action that is associated with a particular event or user interaction.. */
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
/* Showing a message indicating that the page or content is currently loading on the web browser. */

    messageOne.textContent = 'Loading...'
    messageTwo .textContent = ''

  /* The following code retrieves data from a server and displays it in the web browse */
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error 
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    }) 
})
})