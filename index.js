document.addEventListener("DOMContentLoaded", init);

// Function to initialize the script
function init() {
    // Get references to various HTML elements
    const generateMealButton = document.getElementById("generateMealButton"); // Button to generate meal
    const video = document.getElementById("video"); // Video element
    const headingElement = document.getElementById("heading"); // Heading to display meal name
    const areaElement = document.getElementById("area"); // Area to display meal origin
    const ingredientsList = document.getElementById("ingredients"); // List to display ingredients
    const imagesContainer = document.getElementById("recipeImagesContainer"); // Container for recipe images

    // Event listeners
    generateMealButton.addEventListener("click", fetchRandomMeal); // Click event for generating meal
    document.addEventListener("keydown", handleKeyPress); // Key press event listener

    // Function to fetch a random meal from the API
    function fetchRandomMeal() {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        fetch(url)
            .then(response => response.json())
            .then(updateMealInfo)
            .catch(handleError);
    }

    // Function to update meal information on the page
    function updateMealInfo(data) {
        const meal = data.meals[0];
        if (!meal) {
            console.error("Invalid meal data received");
            return;
        }

        // Update heading and area
        headingElement.textContent = meal.strMeal;
        areaElement.textContent = meal.strArea;

        //  ingredients list
        updateIngredientsList(meal);

        //  recipe image
        updateImage(meal);

        // recipe video
        updateVideo(meal);
    }

    // Function to update the ingredients list
    function updateIngredientsList(meal) {
        ingredientsList.innerHTML = "";
        for (let i = 1; i <= 4; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && measure) {
                createIngredientListItem(`${ingredient} - ${measure}`);
            } else if (ingredient) {
                createIngredientListItem(ingredient);
            } else {
                break;
            }
        }
    }

    // Function to create a list item for an ingredient
    function createIngredientListItem(text) {
        const listItem = document.createElement("li");
        listItem.textContent = text;
        ingredientsList.appendChild(listItem);
    }

    // Function to update the recipe image
    function updateImage(meal) {
        const image = createImageElement(meal.strMealThumb, meal.strMeal);
        imagesContainer.innerHTML = "";
        imagesContainer.appendChild(image);
    }

    // Function to create an image element
    function createImageElement(src, alt) {
        const image = document.createElement("img");
        image.src = src;
        image.alt = alt;
        image.style.width = "300px";
        image.style.height = "300px";
        image.style.borderRadius = "10px";
        return image;
    }

    // Function to update the recipe video
    function updateVideo(meal) {
        const youtubeUrl = meal.strYoutube;
        const youtubeId = extractYouTubeId(youtubeUrl);
        if (youtubeId) {
            video.dataset.youtubeId = youtubeId;
        } else {
            console.error("Invalid YouTube URL:", youtubeUrl);
            alert("Invalid YouTube URL. Please try again later.");
        }
    }

    // Function to extract YouTube video ID from URL
    function extractYouTubeId(url) {
        const regex = /[?&]v=([^&#]*)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    // Function to handle key press events
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            fetchRandomMeal();
        }
    }

    // Function to handle errors during data fetching
    function handleError(error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
    }

    // Event listener to open YouTube video when clicked
    video.addEventListener('click', openYouTubeVideo);

    // Function to open YouTube video in a new tab
    function openYouTubeVideo() {
        const youtubeVideoId = video.dataset.youtubeId;
        if (youtubeVideoId) {
            const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
            try {
                window.open(youtubeVideoUrl, '_blank');
            } catch (error) {
                console.error("Error opening YouTube video:", error);
                alert("Failed to open YouTube video. Please check your browser settings.");
            }
        } else {
            console.error("YouTube video ID not found");
            alert("YouTube video ID not found. Please try again later.");
        }
    }

    // Fetch a random meal when the page loads
    fetchRandomMeal();
}


