import Router from 'koa-router';
import user from './user';
import recipe from './recipe';
import recipeIngredients from './recipeIngredient';
import favourite from './favourite';

const root = new Router();
root.use('/api/users', user.routes(), user.allowedMethods());
root.use('/api/recipes', recipe.routes(), recipe.allowedMethods());
root.use('/api/recipe/ingredients', recipeIngredients.routes(), recipeIngredients.allowedMethods());
root.use('/api/favourite', favourite.routes(), favourite.allowedMethods());

export default root;
