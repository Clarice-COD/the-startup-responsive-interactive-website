// CLICKABLE SLIDER

    // Adding functions that can be used through-out the whole page
    let oneScrollDist;
    let sliderWidth;
    let slideIndex = 1;  // Causes it to begin at element 1

    // STEP 1 - Select the elements
    const slider = document.querySelector(".slider");  // Selects the class: slider and names it slider
    const itemList = document.querySelectorAll(".item"); // Selects the class: item and names it itemList
    const SliderCount = itemList.length; // Calculates the length of each slider

    // STEP 2 - Add a function
    function handleClick(direction) {  // handleClick checks which of the 2 button was pressed and bases the next move on that

        // STEP 3 - Add an action
        if(direction === "previous") { // Is to compare 2 values of which only one should be used in this case
            slider.scrollBy({ left: -oneScrollDist, behavior: "smooth"}); // When the button previous is pressed, the elements will be scrollen to the left
            slideIndex--; // Every slider has it's own number, this code will decrease the number by 1
        }

        else{
            slider.scrollBy({ left: oneScrollDist, behavior: "smooth"}); // When the button previous is pressed, the elements will be scrollen to the right
            slideIndex++; // Every slider has it's own number, this code will increase the number by 1
        }
    } 

    // STEP 2 - Add a function
    function sliderSize(){

        // STEP 3 - Add an action
        sliderWidth = slider.scrollWidth; // Selects the width of the class item
        oneScrollDist = sliderWidth / SliderCount; // Will calculate the width of each slider to decide the distance of the scroll
        console.log(oneScrollDist); // Test if the code works
    }

    // The sizes of the sliders can be different dependign on which device it's used, for that reason this code makes sure the automatic scroll will work on any size of the sliders
    sliderSize();
    document.body.onresize = function(){
        sliderSize();
    }

    let direction = "right";
    setInterval(directionChange, 3000); // Sets the amount of seconds the automatic scroll will take place

    // STEP 2 - Add a function
    function directionChange() {

        // STEP 3 - Add an action
        autoScroll(direction); // Adds an automatic scroll
        console.log(slideIndex); // Test if the code works
        
        // Gives 2 options which direction the scroll should go
        if(slideIndex > (SliderCount - 1)){ // If the slider takes place on slider 3 it will move down to 2
            direction = "left"; //The slider will move to the left
            slideIndex = SliderCount; //prevents bugs
        }

        else if(slideIndex <= 1){
            direction = "right"; //The slider will move to the right
            slideIndex = 1; // Sets the slider back to 1
        }
    }

     // STEP 2 - Add a function
    function autoScroll(direction){

        // STEP 3 - Add an action
        // Gives 2 options which direction the scroll should go
        if(direction == "left"){  // If the sliders direction go's to the left
            slider.scrollBy({ left: -oneScrollDist, behavior: "smooth"}); // Makes the scroll smooth
                slideIndex--; // decrease the count by 1
        }

        else{  
            slider.scrollBy({ left: oneScrollDist, behavior: "smooth"}); // Makes the scroll smooth
                slideIndex++; // increase the count by 1
        }
    }   