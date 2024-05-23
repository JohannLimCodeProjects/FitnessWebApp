const POPULATION_SIZE = 100;


// Add all the ingredients to the dynamic ingredients list array
// When generating a new gnome, use each macro in the ingredientslist and add or subtract from the current ingredient total to alter the values

let ingedientList = [] 

const queryResults = [
    {
        "name": "beef",
        "calories": 291.9,
        "serving_size_g": 100,
        "fat_total_g": 19.7,
        "fat_saturated_g": 7.8,
        "protein_g": 26.6,
        "sodium_mg": 63,
        "potassium_mg": 206,
        "cholesterol_mg": 87,
        "carbohydrates_total_g": 0,
        "fiber_g": 0,
        "sugar_g": 0
    },
    {
        "name": "chicken",
        "calories": 222.6,
        "serving_size_g": 100,
        "fat_total_g": 12.9,
        "fat_saturated_g": 3.7,
        "protein_g": 23.7,
        "sodium_mg": 72,
        "potassium_mg": 179,
        "cholesterol_mg": 92,
        "carbohydrates_total_g": 0,
        "fiber_g": 0,
        "sugar_g": 0
    },
    {
        "name": "lettuce",
        "calories": 17,
        "serving_size_g": 100,
        "fat_total_g": 0.3,
        "fat_saturated_g": 0,
        "protein_g": 1.2,
        "sodium_mg": 7,
        "potassium_mg": 30,
        "cholesterol_mg": 0,
        "carbohydrates_total_g": 3.3,
        "fiber_g": 2.1,
        "sugar_g": 1.2
    }
]

class Ingredient(ingredientName,protein,carbs,fat){
    this.ingredientName;
    this.protein;
    this.carbs;
    this.fat;
}

class insertIngredients(queryResults){

}


function Main(target_protein, target_fats, target_carbohydrates){
}
