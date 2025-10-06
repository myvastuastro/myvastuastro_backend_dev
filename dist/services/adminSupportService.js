"use strict";
// services/contactService.ts
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
exports.AdminSupportService = void 0;
const adminSupportRepository_1 = require("../repo/adminSupportRepository");
class AdminSupportService {
    static createOrUpdateSupport(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if record exists based on unique identifier
                // Assuming we identify support by "name" OR "userId"
                // You can change it based on your schema
                const existingSupport = yield adminSupportRepository_1.AdminSupportRepository.findByField({ name: data.name });
                if (existingSupport) {
                    // ✅ Update existing record
                    const updated = yield adminSupportRepository_1.AdminSupportRepository.updateSupport(existingSupport._id, data);
                    return {
                        message: "Support updated successfully",
                        status: true,
                        data: updated,
                    };
                }
                else {
                    // ✅ Create new record
                    const created = yield adminSupportRepository_1.AdminSupportRepository.createSupport(data);
                    return {
                        message: "Support created successfully",
                        status: true,
                        data: created,
                    };
                }
            }
            catch (error) {
                console.error("Error in createOrUpdateSupport:", error);
                throw new Error("Could not create or update support");
            }
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield adminSupportRepository_1.AdminSupportRepository.getSupportById(id);
            }
            catch (error) {
                throw new Error('Could not get contact');
            }
        });
    }
    static updateSupport(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield adminSupportRepository_1.AdminSupportRepository.updateSupport(id, data);
            }
            catch (error) {
                throw new Error('Could not update contact');
            }
        });
    }
    static deleteSupport(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield adminSupportRepository_1.AdminSupportRepository.deleteSupport(id);
            }
            catch (error) {
                throw new Error('Could not delete contact');
            }
        });
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield adminSupportRepository_1.AdminSupportRepository.getAllSupports();
            }
            catch (error) {
                throw new Error('Could not get contacts');
            }
        });
    }
}
exports.AdminSupportService = AdminSupportService;
