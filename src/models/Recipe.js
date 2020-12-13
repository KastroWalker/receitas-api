import mongoose, { Schema } from "mongoose";
import slug from "mongoose-url-slugs";

const RecipeSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: { type: String, slug: "title" },
    time: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

RecipeSchema.plugin(slug("title"), { field: "slug" });

export default mongoose.model("Recipes", RecipeSchema);
