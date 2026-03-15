const couponController = require('../Controllers/coupon.controllers.js');

const couponRouter = ( app ) => {
    // Create a new coupon
    app.post('/coupons', couponController.createCoupon);

    // Get all coupons
    app.get('/coupons', couponController.getAllCoupons);

    // Get a coupon by Id
    app.get('/coupons/:id', couponController.getCouponById);
    
}

module.exports = couponRouter;