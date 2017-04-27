import mongoose from 'mongoose';

const MongooseSchema = mongoose.Schema;
const FavouriteSchema = new MongooseSchema({
  recipeId: { type: String, ref: 'Recipe' },
  userId: { type: String, ref: 'User' }
});
export default mongoose.model('Favourite', FavouriteSchema);
