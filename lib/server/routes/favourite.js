import Router from 'koa-router';
import FavouriteModel from '../models/Favourite';

const FavRouter = new Router();

FavRouter.get('favourite', '/', async function (ctx) {
  console.log(ctx.headers);
  ctx.body = {};
});

FavRouter.post('favourite', '/:recipeId', async function (ctx) {
  console.log(ctx.headers);
  ctx.body = {};
});

export default FavRouter;
