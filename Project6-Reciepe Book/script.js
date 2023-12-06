function addRecipe(){
    var recipeValue = document.getElementById('rec1').value;
    var instructionsValue = document.getElementById('rec2').value;
    var ingredientsValue = document.getElementById('rec3').value;

    document.getElementById('recipe').innerText = "Recipe: " + recipeValue;
    document.getElementById('instructions').innerText = "Instructions: " + instructionsValue;
    document.getElementById('ingredients').innerText = "Ingredients: " + ingredientsValue;
}

function editRecipe() {
    let newRecipeValue = prompt("Enter the new recipe:");
    let newInstructionValue = prompt("Enter the new Instruction:");
    let newIngredientValue = prompt("Enter the new Ingredient");

    if (newRecipeValue !== null) {
        document.getElementById('recipe').innerText = "Recipe: " + newRecipeValue;
    }

    if (newInstructionValue !== null) {
        document.getElementById('instructions').innerText = "Instructions: " + newInstructionValue;
    }
    if(newIngredientValue !==null){
        document.getElementById('ingredients').innerText = "Ingredients: "+ newIngredientValue
    }
}
// function editInstruction(){
//     var newInstrValue = prompt("Enter the new Instruction:");
//     if (newInstrValue !== null) {
//         document.getElementById('instructions').innerText = "Instruction: " + newInstrValue;
//     }
// }

function deleteRecipe(){
    document.getElementById('recipe').innerText = "Recipe: ";
    document.getElementById('instructions').innerText = "Instructions: ";
    document.getElementById('ingredients').innerText = "Ingredients: ";
}