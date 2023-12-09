// Function to add a recipe based on user input
function addRecipe() {
    var recipeValue = document.getElementById('rec1').value;
    var instructionsValue = document.getElementById('rec2').value;
    var ingredientsValue = document.getElementById('rec3').value;

    // Update the displayed recipe details
    document.getElementById('recipe').innerText = "Recipe: " + recipeValue;
    document.getElementById('instructions').innerText = "Instructions: " + instructionsValue;
    document.getElementById('ingredients').innerText = "Ingredients: " + ingredientsValue;
}

// Function to edit a recipe based on user input
function editRecipe() {
    // Prompt the user for new values
    let newRecipeValue = prompt("Enter the new recipe:");
    let newInstructionValue = prompt("Enter the new Instruction:");
    let newIngredientValue = prompt("Enter the new Ingredient");

    // Update the displayed recipe details if new values are provided
    if (newRecipeValue !== null) {
        document.getElementById('recipe').innerText = "Recipe: " + newRecipeValue;
    }

    if (newInstructionValue !== null) {
        document.getElementById('instructions').innerText = "Instructions: " + newInstructionValue;
    }
    
    if (newIngredientValue !== null) {
        document.getElementById('ingredients').innerText = "Ingredients: " + newIngredientValue;
    }
}

// Function to delete a recipe and reset the displayed details
function deleteRecipe() {
    document.getElementById('recipe').innerText = "Recipe: ";
    document.getElementById('instructions').innerText = "Instructions: ";
    document.getElementById('ingredients').innerText = "Ingredients: ";
}
