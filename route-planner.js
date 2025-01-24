// CLICKABLE SLIDER
    // STEP 1 - Select the elements
    const slider = document.querySelector(".slider");  // Selects the class: slider and names it slider
    const item = document.querySelector(".slider li"); // Selects the li
    const btnPrev = document.querySelector(".button--previous") // Selects the class of the button that go's to the previous slide
    const btnNext = document.querySelector(".button--next") // Selects the class of the button that go's to the next slide

    const itemWidth = item.offsetWidth; // Selects the width of the class item, which is the width of the li

    // STEP 2 - Add a function
    btnPrev.addEventListener('click', () =>  { // Click event aan de button previous toegevoegd
        // STEP 3 - Add an action
        slider.scrollBy({ left: -itemWidth, behavior: "smooth"}); // scr
    });

    btnNext.addEventListener('click', () =>  { // Click event aan de button next toegevoegd
        // STEP 3 - Add an action
        slider.scrollBy({ left: itemWidth, behavior: "smooth"});
    });