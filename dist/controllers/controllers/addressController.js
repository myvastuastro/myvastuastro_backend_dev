"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddress = createAddress;
exports.getAddressById = getAddressById;
exports.updateAddress = updateAddress;
exports.deleteAddress = deleteAddress;
exports.getAllAddresss = getAllAddresss;
exports.getAddressByUserId = getAddressByUserId;
const addressService_1 = require("../../services/services/addressService");
function createAddress(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const address = yield addressService_1.AddressService.createAddress(req.body);
            if (address) {
                res.status(200).json({ message: 'Submit successful', data: address, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAddressById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const address = yield addressService_1.AddressService.getById(id);
            if (address) {
                res.status(200).json({ message: 'Find successful', data: address, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateAddress(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const address = yield addressService_1.AddressService.updateAddress(id, req.body);
            if (address) {
                res.status(200).json({ message: 'Update successful', data: address, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteAddress(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const address = yield addressService_1.AddressService.deleteAddress(id);
            if (address) {
                res.status(200).json({ message: 'Delete successful', data: address, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAllAddresss(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const address = yield addressService_1.AddressService.getAll();
            if (address) {
                res.status(200).json({ message: 'Find successful', data: address, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getAddressByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const address = yield addressService_1.AddressService.getByUserId(userId);
            if (address) {
                res.status(200).json({ message: 'Find successful', data: address, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: address });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Address not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
