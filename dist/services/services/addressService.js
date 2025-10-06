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
exports.AddressService = void 0;
const addressRepo_1 = require("../../repo/repositories/addressRepo");
class AddressService {
    static createAddress(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const create = yield addressRepo_1.AddressRepository.createAddress(data);
                return create;
            }
            catch (error) {
                throw new Error('Could not create quote');
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield addressRepo_1.AddressRepository.getAddressById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static getByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield addressRepo_1.AddressRepository.getAddressByUserId(userId);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateAddress(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield addressRepo_1.AddressRepository.updateAddress(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteAddress(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield addressRepo_1.AddressRepository.deleteAddress(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield addressRepo_1.AddressRepository.getAllAddress();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.AddressService = AddressService;
