"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenCheckMiddleware = void 0;
const api_token_payment_exceptions_1 = require("../common/exceptions/api-token-payment.exceptions");
class ApiTokenCheckMiddleware {
    use(req, res, next) {
        if (req.headers['api-token'] !== 'my-token') {
            throw new api_token_payment_exceptions_1.ApiTokenPaymentException();
        }
        console.log(req.headers);
        next();
    }
}
exports.ApiTokenCheckMiddleware = ApiTokenCheckMiddleware;
//# sourceMappingURL=api-token-check.middleware.js.map