"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
const stock_1 = require("./stock");
exports.default = {
    getStockList() {
    },
    async getStock(code) {
        return new stock_1.default(await lib_1.default.getData(code));
    },
    /**
     *
     */
    getIndex() {
    },
};
