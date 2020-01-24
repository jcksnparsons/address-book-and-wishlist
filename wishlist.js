// Some starter code
const wishlistContainer = document.querySelector("#wishlist")

document.querySelector("#wishlistButton").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    let thingName = document.querySelector("#aThing").value
    let store = document.querySelector("#store").value
    

    // Once you have collected all the values, update the DOM
    // with some HTML
    wishlistContainer.innerHTML += `
        <section>
            <p>I can purchase ${thingName} at ${store}.</p>
        </section>
    `
})