import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  menus: [
    {
      name: { type: String, required: true },
      items: [{ type: mongoose.types.ObjectId, ref: "Foods" }],
    },
  ],
  recomended: [{ type: mongoose.types.objectId, ref: "Foods", unique: true }],
});

export const MenuModel = mongoose.model("Menu", MenuSchema);
