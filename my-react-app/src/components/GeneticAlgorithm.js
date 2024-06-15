const POPULATION_SIZE = 100;

// Target in terms of Protein, Carbs, Fats
const TARGET = (225,225,50);

// Calculates length of the ingredient list
const NUM_INGREDIENTS = len(queryResults);

// Calculates the average amount of grams
const AVERAGEAMOUNT = (225 + 225 + 50)/NUM_INGREDIENTS;

// The following query results contian the macros per 100g of each ingredient
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

// Generates a randomNumber in a given range
function RandomNum(start, end) { 
    return Math.floor(Math.random() * (end - start + 1)) + start; 
} 

// Returns a value which is within the range of the max for the macro and the average.
function MutatedGenes(){
    let range = 225 - AVERAGEAMOUNT;
    let r = randomNum(0, range - 1);
    return r;
}

// Create a chromosome which contains a set of genes (ingredients)
function CreateGnome(){
    let dynamicArray = []

    for (let i = 0; i < NUM_INGREDIENTS; i++){
        dynamicArray.push(MutatedGenes());
    } 

    return dynamicArray;
}



function Main(target_protein, target_fats, target_carbohydrates){
}
