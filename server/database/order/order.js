import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    orderDetails: [
      {
        food: { type: mongoose.Types.ObjectId, ref: "Foods" },
        quantity: { type: Number, required: true },
        paymode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          itemTotal: { type: Number, requried: true },
          promo: { type: Number, required: true },
          tax: { type: Number, required: true },
        },
      },
    ],
  },
  {
    timestamps: true, //this is set time in Database (in mongoDB)
  }
);

export const OrderModel = mongoose.model("Orders", OrderSchema);
