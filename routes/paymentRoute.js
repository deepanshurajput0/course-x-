import express from "express"
import { authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js"
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js"

const router = express.Router()

/// buy subscription 
router.route('/subscribe').get(isAuthenticated,buySubscription)

// verify payment
router.route('/paymentverification').get(isAuthenticated,paymentVerification)

// get razorpay key 

router.route('/razorpaykey').get(getRazorPayKey)


router.route('/subscribe/cancel').get(isAuthenticated,authorizeSubscribers,cancelSubscription)



export default router


