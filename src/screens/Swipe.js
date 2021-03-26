import { searchRecipes, QueryBuilder, RECIPE_PRICE, RECIPE_DIFFICULTY } from 'marmiton-api'
// A query builder is provided to make complex queries
const query = qb
  .withTitleContaining('soja')
  .withoutOven()
  .withPrice(RECIPE_PRICE.CHEAP)
  .takingLessThan(45)
  .withDifficulty(RECIPE_DIFFICULTY.EASY)
  .build()
  
// Fetch the recipes
const recipes: Recipe[] = await searchRecipes(query)

export default Swipe;