import express from "express";
import crypto from "crypto";
import Razorpay from "razorpay";

const router = express.Router();

router.post("/orders", (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_ID_KEY,
            key_secret: process.env.RAZORPAY_SECRET_KEY,
        });

        const options = {
            amount: req.body.amount,
            currency: "USD",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).send("Internal Server Error");
            }
            return res.status(200).json({ data: order });
        });
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});

// payment verfiy

router.post("/verify", (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
            .update(sign.toString())
            .digest("hex");

        if(expectedSign === razorpay_signature) {
            return res.status(200).json({ message: "Payment verified successful" });
        } 
        else {
            return res.status(400).json({ message: "Payment verification failed" });
        }
    } catch (e) {
        console.log(e);
    }
});

export default router;
