import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

// payment verification and save reference in db
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// Get Razorpay Key s
router.route("/razorpaykey").get(getRazorPayKey);

// Cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
