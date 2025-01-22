// CLICKABLE SLIDER
    // STEP 1 - Select the elements
    const slider = document.querySelector(".slider");  // Selects the class: slider and names it slider
    const item = document.querySelector(".slider"); // Selects the class: slider and names it item
    const itemWidth = item.offsetWidth; // Selects the width of the class item

    // STEP 2 - Add a function
    function handleClick(direction) {  // handleClick checks which of the 2 button was pressed and bases the next move on that
        
            // STEP 3 - Add an action
            if(direction === "previous") { // Is to compare 2 values of which only one should be used in this case
                slider.scrollBy({ left: -itemWidth, behavior: "smooth"}); // When the button previous is pressed, the elements will be scrollen to the left
            }
            else{
                slider.scrollBy({ left: itemWidth, behavior: "smooth"}); // When the button previous is pressed, the elements will be scrollen to the right
            }
    } 