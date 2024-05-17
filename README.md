# Random Meal Generator

This JavaScript code fetches a random meal from [TheMealDB API](https://www.themealdb.com/api.php) and displays its details including the name, origin, ingredients, an image, and a link to a related YouTube video.


## Live Demo
[Live Demo Link](https://recipe-project-lake.vercel.app/)

## How it Works

1. When the DOM content is loaded, the `init()` function is called, setting up event listeners and fetching a random meal.
2. The `fetchRandomMeal()` function fetches a random meal from TheMealDB API.
3. Upon successful retrieval of meal data, the `updateMealInfo()` function is called to update the webpage with the meal details.
4. The meal's name and origin are displayed in the heading and area elements, respectively.
5. The ingredients list is updated using the `updateIngredientsList()` function.
6. The recipe image is displayed using the `updateImage()` function.
7. If available, a related YouTube video is linked using the `updateVideo()` function.
8. Users can click on the video to open it in a new tab.
9. Users can also press the Enter key to fetch a new random meal.

## Dependencies

This project relies on:

- **TheMealDB API**: Provides access to a vast collection of meal data including names, ingredients, images, and videos.

## Usage

To use this code:

1. Ensure you have a compatible browser environment.
2. Open the HTML file in your browser.
3. Click the "Generate Meal" button to fetch and display a random meal.
4. Optionally, click on the recipe image to watch a related YouTube video.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Technologies Used

- HTML
- CSS
- JavaScript
# Personal-Project
# PP
