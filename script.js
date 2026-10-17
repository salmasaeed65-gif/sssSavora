var recipes = [
    {
        name: "Fluffy Pancakes",
        category: "Breakfast",
        time: "15 min",
        calories: 230,
        image: "https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/06/fluffy-pancakes-feature.jpg",
        ingredients: [
            "1 cup all-purpose flour (125 g) ",
            "1 tablespoon sugar ",
            "1 teaspoon baking powder",
            "1/4 teaspoon salt",
            "3/4 cup milk (180 ml)",
            "1 large egg",
            "2 tablespoons melted butter"
        ],
        instructions: "Mix the flour, sugar, baking powder and salt. Whisk the milk, egg and melted butter separately. Combine the mixtures. Cook small portions in a lightly greased pan. Flip when bubbles appear and cook the other side."
    },
    {
        name: "Cheese Omelette",
        category: "Breakfast",
        time: "10 min",
        calories: 280,
        image: "https://www.garlicandzest.com/wp-content/uploads/2021/04/puffy-cheese-omelette.jpg",
        ingredients: [
            "2 large eggs",
            "2 tablespoons milk",
            "1/4 cup shredded cheddar cheese (25 g)",
            "1 teaspoon butter",
            "1/8 teaspoon salt",
            "1/8 teaspoon black pepper"
        ],
        instructions: "Beat the eggs with milk, salt and pepper. Melt the butter in a pan and pour in the eggs. When the edges begin to set, add the cheese, fold the omelette and cook until the eggs are fully set."
    },
    {
        name: "French Toast",
        category: "Breakfast",
        time: "10 min",
        calories: 240,
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/08/french-toast-recipe-1024x1024.jpg",
        ingredients: [
            "2 slices bread",
            "1 large egg",
            "1/4 cup milk (60 ml)",
            "1/4 teaspoon ground cinnamon",
            "1 teaspoon sugar",
            "1 teaspoon butter"
        ],
        instructions: "Whisk the egg, milk, cinnamon and sugar. Dip both bread slices in the mixture. Melt the butter in a pan and cook the bread for 2–3 minutes per side until golden and fully cooked."
    },
    {
        name: "Creamy Garlic Pasta",
        category: "Lunch",
        time: "20 min",
        calories: 520,
        image: "https://i.etsystatic.com/57934827/r/il/febae7/6840027508/il_fullxfull.6840027508_l2dd.jpg",
        ingredients: [
            "150 g pasta",
            "1 tablespoon olive oil",
            "2 garlic cloves, minced",
            "1 tablespoon butter",
            "1/2 cup cooking cream (120 ml)",
            "1/4 cup grated Parmesan (25 g)",
            "1/4 teaspoon salt",
            "1/8 teaspoon black pepper"
        ],
        instructions: "Boil the pasta according to the package instructions. Warm the oil and butter, cook the garlic briefly, then add the cream and seasoning. Stir in the Parmesan and drained pasta. Add a little pasta water if needed."
    },
    {
        name: "Tomato Pasta",
        category: "Lunch",
        time: "25 min",
        calories: 390,
        image: "https://i.pinimg.com/originals/8e/fc/79/8efc795e53a2e26f40c7d49c71547c14.jpg",
        ingredients: [
            "150 g pasta",
            "2 medium tomatoes, chopped (250 g)",
            "1 tablespoon olive oil",
            "2 garlic cloves, minced",
            "1 tablespoon tomato paste",
            "1/2 teaspoon dried oregano",
            "1/4 teaspoon salt",
            "1/8 teaspoon black pepper"
        ],
        instructions: "Boil the pasta. Heat the oil and cook the garlic briefly. Add the tomatoes, tomato paste, oregano, salt and pepper. Simmer for 10–12 minutes, then mix with the drained pasta."
    },
    {
        name: "Chicken Quesadilla",
        category: "Lunch",
        time: "20 min",
        calories: 420,
        image: "https://i.pinimg.com/originals/da/85/5b/da855b1b5220ed840125ce616af2635a.jpg",
        ingredients: [
            "1 medium flour tortilla",
            "100 g cooked chicken breast, shredded",
            "1/3 cup shredded mozzarella (35 g)",
            "2 tablespoons chopped bell pepper",
            "1 tablespoon chopped onion",
            "1 teaspoon olive oil"
        ],
        instructions: "Mix the chicken, cheese, pepper and onion. Put the mixture on half the tortilla and fold it. Heat the oil in a pan and cook for 2–3 minutes per side until golden and the filling is hot."
    },
    {
        name: "Crispy Potato Wedges",
        category: "Snacks",
        time: "35 min",
        calories: 220,
        image: "https://savorylush.com/wp-content/uploads/2026/01/Crispy_Garlic_Parmesan_Potato_Wedges_A_Flavor_Explosion_First_Image_dnxhqn.webp",
        ingredients: [
            "2 medium potatoes (400 g)",
            "1 tablespoon olive oil",
            "1/2 teaspoon paprika",
            "1/4 teaspoon garlic powder",
            "1/2 teaspoon salt",
            "1/8 teaspoon black pepper"
        ],
        instructions: "Preheat the oven to 220°C. Cut the potatoes into wedges and pat dry. Toss with oil and seasonings. Arrange in one layer and bake for 30–35 minutes, turning halfway through, until golden and tender."
    },
    {
        name: "Cheese Garlic Bread",
        category: "Snacks",
        time: "12 min",
        calories: 260,
        image: "https://www.arabellarecipes.com/wp-content/uploads/2026/01/r6n11cel0kospfipeypl.webp",
        ingredients: [
            "2 slices bread",
            "1 tablespoon softened butter",
            "1 garlic clove, minced",
            "1/4 cup shredded mozzarella (25 g)",
            "1 teaspoon chopped parsley"
        ],
        instructions: "Mix the butter and garlic and spread over the bread. Add mozzarella and parsley. Bake at 200°C for about 7–10 minutes until the cheese melts and the edges are crisp."
    },
    {
        name: "Chocolate Mug Cake",
        category: "Dessert",
        time: "5 min",
        calories: 350,
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEive-0VTnCR0pLO6lL0d6gNfqDEPV4P1czexu23QmTRfm02-5qgyCsTg79X-LgSwEKnEfnnc1CH_r7DqgQbr_t3z9An8E4mQfncYysG8H33OdJ8oxT7C4RCc9RK-rvh1OaUfY1rjB8m8dWQvmgzchgPefHmTa9gNoHQQ-OU0SyINyneNTveg-Emna97CgXR/s736/1000186422.jpg",
        ingredients: [
            "4 tablespoons all-purpose flour (32 g)",
            "2 tablespoons sugar (25 g)",
            "1 tablespoon cocoa powder (6 g)",
            "1/4 teaspoon baking powder",
            "3 tablespoons milk (45 ml)",
            "1 tablespoon vegetable oil",
            "1 tablespoon chocolate chips"
        ],
        instructions: "Mix the flour, sugar, cocoa and baking powder in a microwave-safe mug. Stir in the milk and oil, then add chocolate chips. Microwave for 60–90 seconds, checking that the center is cooked. Let it cool briefly."
    },
    {
        name: "Banana Oat Pancakes",
        category: "Breakfast",
        time: "15 min",
        calories: 290,
        image: "https://www.spoonfulofflavor.com/wp-content/uploads/2023/01/vegan-banana-oat-pancakes.jpg",
        ingredients: [
            "1 medium ripe banana",
            "1 large egg",
            "1/2 cup rolled oats (45 g)",
            "1/4 teaspoon baking powder",
            "1/4 teaspoon ground cinnamon",
            "1 teaspoon oil for the pan"
        ],
        instructions: "Mash the banana and mix with the egg, oats, baking powder and cinnamon. Heat a lightly oiled pan and cook small pancakes for 2–3 minutes per side until cooked through."
    },
    {
        name: "Strawberry Yogurt Bowl",
        category: "Dessert",
        time: "5 min",
        calories: 210,
        image: "https://dishtide.com/uploads/recipes/pink-raspberry-smoothie-bowl-masterpiece-1770980742874-1208-1770980743038.webp",
        ingredients: [
            "150 g plain yogurt",
            "100 g fresh strawberries, sliced",
            "2 tablespoons rolled oats (10 g)",
            "1 teaspoon honey",
            "1 tablespoon chopped almonds (optional)"
        ],
        instructions: "Put the yogurt in a bowl. Add the sliced strawberries, oats, honey and almonds. Serve immediately."
    },
    {
        name: "Tuna Sandwich",
        category: "Lunch",
        time: "10 min",
        calories: 360,
        image: "https://feastrecipe.com/wp-content/uploads/2025/07/a-photograph-of-a-perfectly-crafted-tuna_28bYiqj4R2uBjTLxtj_uyw_v3YfOfJWTWeS4emz6jZylg-1120x694.jpeg",
        ingredients: [
            "1 can tuna in water, drained (about 120 g)",
            "2 tablespoons mayonnaise",
            "1 teaspoon lemon juice",
            "2 lettuce leaves",
            "2 slices bread",
            "1 small tomato, sliced",
            "1/8 teaspoon black pepper"
        ],
        instructions: "Mix the drained tuna with mayonnaise, lemon juice and pepper. Place the lettuce and tomato on one slice of bread, add the tuna mixture and top with the second slice."
    },
    {
        name: "Cheesecake",
        category: "Dessert",
        time: "60 min + chilling",
        calories: 400,
        image: "https://static.vecteezy.com/system/resources/previews/042/368/528/original/ai-generated-cheesecake-close-up-of-delicious-looking-cheesecake-free-png.png",
        ingredients: [
            "200 g cream cheese",
            "100 g digestive biscuits",
            "40 g melted butter",
            "50 g sugar",
            "1 large egg",
            "1/2 teaspoon vanilla extract"
        ],
        instructions: "Crush the biscuits and mix with melted butter. Press into a small cake tin. Beat the cream cheese, sugar, egg and vanilla until smooth. Pour over the base and bake at 160°C until mostly set. Cool completely and chill before serving."
    },
    {
        name: "Chocolate Chip Cookies",
        category: "Dessert",
        time: "25 min",
        calories: 160,
        image: "https://www.spendwithpennies.com/wp-content/uploads/2022/04/Chocolate-Chip-Cookies-SpendWithPennies-2.jpg",
        ingredients: [
            "150 g all-purpose flour",
            "80 g softened butter",
            "75 g brown sugar",
            "1 large egg",
            "1/2 teaspoon baking soda",
            "80 g chocolate chips",
            "1/2 teaspoon vanilla extract"
        ],
        instructions: "Mix the butter and sugar until creamy. Beat in the egg and vanilla. Add flour and baking soda, then fold in the chocolate chips. Shape into small balls and bake at 180°C for 10–12 minutes. Let cool before serving."
    },
    {
        name: "Lemon Cake",
        category: "Dessert",
        time: "40 min",
        calories: 280,
        image: "https://tse4.mm.bing.net/th/id/OIP.ygAD_AvDoL32cqzgQ9ZdcAHaJ4?r=0&w=768&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
        ingredients: [
            "150 g all-purpose flour",
            "100 g sugar",
            "2 large eggs",
            "80 g butter",
            "1 lemon, zest and juice",
            "1 teaspoon baking powder",
            "2 tablespoons milk"
        ],
        instructions: "Cream the butter and sugar. Beat in the eggs, lemon zest and lemon juice. Fold in the flour and baking powder, adding milk to loosen the batter. Bake in a lined tin at 180°C for 25–30 minutes or until a toothpick comes out clean."
    },
    {
        name: "Chocolate Brownies",
        category: "Dessert",
        time: "35 min",
        calories: 240,
        image: "https://lilicooks.com/assets/images/1741740446504-1xvlea3c.webp",
        ingredients: [
            "100 g dark chocolate",
            "80 g butter",
            "120 g sugar",
            "2 large eggs",
            "60 g all-purpose flour",
            "2 tablespoons cocoa powder",
            "1/2 teaspoon vanilla extract"
        ],
        instructions: "Melt the chocolate and butter together and let cool slightly. Whisk in sugar, eggs and vanilla. Fold in flour and cocoa. Spread in a lined tin and bake at 175°C for 20–25 minutes. Cool before cutting."
    },
    {
        name: "Cheese Salad",
        category: "Breakfast",
        time: "10 min",
        calories: 220,
        image: "https://cookingchew.com/wp-content/uploads/2023/01/Light-and-Refreshing-Blue-Cheese-Salads.jpg",
        ingredients: [
            "100 g feta cheese",
            "1 medium tomato",
            "1 medium cucumber",
            "1/2 green bell pepper",
            "1 tablespoon olive oil",
            "1 teaspoon lemon juice",
            "Fresh parsley"
        ],
        instructions: "Chop the tomato, cucumber and bell pepper. Crumble the feta cheese over the vegetables. Add olive oil, lemon juice and chopped parsley, then toss gently and serve."
    },
    {
        name: "Shakshuka",
        category: "Breakfast",
        time: "20 min",
        calories: 260,
        image: "https://tse1.mm.bing.net/th/id/OIP.wQoiNbAGCXuA4Pbpj3nlZgHaM9?r=0&w=1000&h=1750&rs=1&pid=ImgDetMain&o=7&rm=3",
        ingredients: [
            "2 large eggs",
            "2 medium tomatoes, chopped",
            "1/2 onion, chopped",
            "1/2 green bell pepper",
            "1 tablespoon olive oil",
            "1/2 teaspoon paprika",
            "Salt and black pepper"
        ],
        instructions: "Heat the olive oil in a pan. Cook the onion and pepper until softened. Add tomatoes, paprika, salt and pepper, then simmer until thick. Make two spaces in the sauce, add the eggs, cover and cook until the eggs are fully set."
    },
    {
        name: "Beef Piccata",
        category: "Lunch",
        time: "35 min",
        calories: 430,
        image: "https://i.pinimg.com/736x/ae/14/8b/ae148b505f554361bd79a1cc61efa83b.jpg",
        ingredients: [
            "300 g thin beef slices",
            "150 g mushrooms, sliced",
            "1 small onion, chopped",
            "2 garlic cloves, minced",
            "1 tablespoon butter",
            "1 tablespoon olive oil",
            "150 ml beef broth",
            "Salt and black pepper"
        ],
        instructions: "Season the beef with salt and pepper. Heat the oil and brown the beef on both sides, then set aside. Cook the onion, garlic and mushrooms in the same pan. Add the broth and simmer. Return the beef and cook until tender and safely cooked through."
    },
    {
        name: "Crispy Chicken",
        category: "Lunch",
        time: "35 min",
        calories: 420,
        image: "https://fitandhealthier.org/wp-content/uploads/2025/04/Crispy_Chicken_Tenders_.webp",
        ingredients: [
            "300 g chicken breast strips",
            "1 large egg",
            "1/2 cup all-purpose flour",
            "1/2 cup breadcrumbs",
            "1/2 teaspoon paprika",
            "1/2 teaspoon garlic powder",
            "Salt and black pepper",
            "Oil for cooking"
        ],
        instructions: "Season the chicken. Put flour in one bowl, beaten egg in another and breadcrumbs mixed with seasonings in a third. Coat each chicken strip in flour, egg and breadcrumbs. Cook in a hot oven or air fryer with a little oil until golden and the center reaches 74°C."
    },
    {
        name: "Cold Beef Roast",
        category: "Lunch",
        time: "90 min",
        calories: 280,
        image: "https://img.freepik.com/premium-photo/delicious-roast-beef-restaurant-steak-house_974629-123024.jpg",
        ingredients: [
            "500 g beef roast",
            "3 garlic cloves",
            "1 tablespoon olive oil",
            "1 teaspoon black pepper",
            "1 teaspoon paprika",
            "1/2 teaspoon salt",
            "1 teaspoon dried rosemary"
        ],
        instructions: "Rub the beef with olive oil, garlic and seasonings. Roast in a preheated oven until it reaches a safe internal temperature. Rest the meat, refrigerate promptly and slice thinly when cold."
    },
    {
        name: "Mini Pizza Bites",
        category: "Snacks",
        time: "20 min",
        calories: 230,
        image: "https://tse4.mm.bing.net/th/id/OIP.4mFhyhTdU-UYXPMSIvb_0wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        ingredients: [
            "2 small bread rolls or English muffins",
            "3 tablespoons tomato sauce",
            "1/2 cup shredded mozzarella",
            "1/4 green bell pepper, chopped",
            "2 tablespoons sliced olives",
            "1/2 teaspoon dried oregano"
        ],
        instructions: "Cut the bread rolls in half. Spread tomato sauce over each piece. Add mozzarella, pepper, olives and oregano. Bake at 200°C for 8–10 minutes until the cheese melts and the edges are crisp."
    },
    {
        name: "Grilled Cheese Sandwich",
        category: "Snacks",
        time: "10 min",
        calories: 320,
        image: "https://i.pinimg.com/736x/10/ef/cc/10efccfa258fd264ad04c3ea1a39456f.jpg",
        ingredients: [
            "2 slices bread",
            "2 slices cheddar cheese",
            "1 tablespoon butter"
        ],
        instructions: "Place the cheese between the bread slices. Spread butter on the outside of the bread. Cook in a pan over medium-low heat, turning once, until the bread is golden and the cheese has melted."
    },
    {
        name: "Seasoned Popcorn",
        category: "Snacks",
        time: "10 min",
        calories: 150,
        image: "https://www.bessiebakes.com/wp-content/uploads/2023/02/Garlic-Parmesan-Popcorn-Square-13.jpg",
        ingredients: [
            "50 g popcorn kernels",
            "1 tablespoon oil",
            "1/4 teaspoon salt",
            "1/2 teaspoon paprika, optional"
        ],
        instructions: "Heat the oil in a covered pot and add the kernels. Shake the pot occasionally while the kernels pop. Remove from the heat when popping slows. Add salt and paprika and toss."
    }
];




var container = document.getElementById("recipe-container");
var searchInput = document.getElementById("ingredient-input");
var searchButton = document.getElementById("search-button");
var resultsMessage = document.getElementById("results-message");
var showAllButton = document.getElementById("show-all-button");

var currentCategory = "All";
var currentIngredients = [];

function ingredientIsAvailable(ingredient) {
    var i;
    for (i = 0; i < currentIngredients.length; i++){
        if (ingredient.toLowerCase().indexOf(currentIngredients[i]) !== -1) {
            return true;
      }
 }
    return false;
}
function displayRecipes(recipeList){
    var cardsHTML = "";
    if (recipeList.length === 0){
        container.innerHTML = "";
        resultsMessage.innerHTML = "No matching recipes found.";
        return;
 }

 resultsMessage.innerHTML = recipeList.length + " recipes found.";
 var i;
 for (i = 0; i < recipeList.length; i++){
     var recipe = recipeList[i];
     var available = [];
     var missing = [];
        var j;

        for (j = 0; j < recipe.ingredients.length; j++) {
            var ingredient = recipe.ingredients[j];

            if (
                currentIngredients.length === 0 ||
                ingredientIsAvailable(ingredient)
            ) {
                available.push(ingredient);
            } else {
                missing.push(ingredient);
            }
        }

        var details = "";

        if (currentIngredients.length > 0) {
            details += "<h4>You have:</h4>";
            details += "<p>" + available.join(", ") + "</p>";
            details += "<h4>You're missing:</h4>";
            details += "<p>" + missing.join(", ") + "</p>";
        } else {
            details += "<h4>Ingredients:</h4>";
            details += "<p>" + recipe.ingredients.join(", ") + "</p>";
        }

        cardsHTML +=
            '<div class="recipe-card">' +
                '<img src="' + recipe.image + '" alt="' + recipe.name + '">' +
                '<div class="recipe-card-content">' +
                    "<h3>" + recipe.name + "</h3>" +
                    "<p>Category: " + recipe.category + "</p>" +
                    "<p>Cooking time: " + recipe.time + "</p>" +
                    "<p>Calories: " + recipe.calories + " per serving</p>" +
                    details +
                    "<details>" +
                        "<summary>How to make it</summary>" +
                        "<p>" + recipe.instructions + "</p>" +
                    "</details>" +
                "</div>" +
            "</div>";
    }

    container.innerHTML = cardsHTML;
}

function searchRecipes() {
    var input = searchInput.value.toLowerCase().trim();
    var words = input.split(",");
    var i;

    currentIngredients = [];

    for (i = 0; i < words.length; i++) {
        var word = words[i].trim();

        if (word !== "") {
            currentIngredients.push(word);
        }
    }

    var matchingRecipes = [];

    for (i = 0; i < recipes.length; i++) {
        var recipe = recipes[i];

        var categoryMatches =
            currentCategory === "All" ||
            recipe.category === currentCategory;

        var ingredientMatches = false;
        var j;

        for (j = 0; j < recipe.ingredients.length; j++) {
            if (ingredientIsAvailable(recipe.ingredients[j])) {
                ingredientMatches = true;
            }
        }

        if (
            categoryMatches &&
            (currentIngredients.length === 0 || ingredientMatches)
        ) {
            matchingRecipes.push(recipe);
        }
    }

    displayRecipes(matchingRecipes);
}

function searchByCategory(category) {
    currentCategory = category;
    searchRecipes();
}

searchButton.addEventListener("click", searchRecipes);

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchRecipes();
    }
});

showAllButton.addEventListener("click", function() {
    searchInput.value = "";
    currentIngredients = [];
    currentCategory = "All";

    displayRecipes(recipes);
});

displayRecipes(recipes);
