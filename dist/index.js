"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const databaseConfig_1 = __importDefault(require("./config/databaseConfig"));
const professionalRoutes_1 = __importDefault(require("./routes/professionalRoutes"));
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const PaymentController_1 = require("./controllers/PaymentController");
const vastuAstrologerRoutes_1 = __importDefault(require("./routes/vastuAstrologerRoutes"));
const talkToAdvisorRoutes_1 = __importDefault(require("./routes/talkToAdvisorRoutes"));
const comprehensiveRoutes_1 = __importDefault(require("./routes/comprehensiveRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const supportRoutes_1 = __importDefault(require("./routes/supportRoutes"));
const adminSupportRoutes_1 = __importDefault(require("./routes/adminSupportRoutes"));
const askQuestionRoutes_1 = __importDefault(require("./routes/askQuestionRoutes"));
const notificationRoutes_1 = __importDefault(require("./routes/notificationRoutes"));
const tokenRoutes_1 = __importDefault(require("./routes/tokenRoutes"));
const vastuTipRoutes_1 = __importDefault(require("./routes/vastuTipRoutes"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const horoscopesRoutes_1 = __importDefault(require("./routes/horoscopesRoutes"));
const cors_1 = __importDefault(require("cors"));
const kundliRoutes_1 = __importDefault(require("./routes/kundliRoutes"));
const matchMakingRoutes_1 = __importDefault(require("./routes/matchMakingRoutes"));
const luckyNumberColorRoutes_1 = __importDefault(require("./routes/luckyNumberColorRoutes"));
const remediesQARoutes_1 = __importDefault(require("./routes/remediesQARoutes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const askQuestionAstroRoutes_1 = __importDefault(require("./routes/askQuestionAstroRoutes"));
const productRoutes_2 = __importDefault(require("./routes/routes/productRoutes"));
const parentRoutes_1 = __importDefault(require("./routes/routes/parentRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/routes/cartRoutes"));
const addressRoutes_1 = __importDefault(require("./routes/routes/addressRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/routes/orderRoutes"));
const talkToAstrologerRoutes_1 = __importDefault(require("./routes/talkToAstrologerRoutes"));
const chatRoute_1 = __importDefault(require("./routes/chatRoutes/chatRoute"));
const messageRoute_1 = __importDefault(require("./routes/chatRoutes/messageRoute"));
const socket_io_1 = require("socket.io");
const socketHandler_1 = require("./utils/socketHandler");
const myVastuAstroRoutes_1 = __importDefault(require("./routes/myVastuAstroRoutes"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
// CORS Setup
const allowedOrigins = [
    'http://localhost:8081',
    'http://localhost:3000',
    'https://myvastuastro.com',
    'https://myvastuastro.com',
    'https://www.myvastuastro.com',
    'https://api.myvastuastro.com',
    'http://localhost:5173',
    'https://www.myvastuastro.com'
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
// Webhook raw body
app.use('/payment/webhook', body_parser_1.default.raw({ type: 'application/json' }));
app.post('/payment/webhook', PaymentController_1.handleWebhook);
// JSON Parser
app.use(express_1.default.json());
// Connect DB
(0, databaseConfig_1.default)();
// Test Route
app.get("/", (_req, res) => {
    res.status(200).json({
        message: "Hello from root!",
    });
});
// All Routes
app.use("/users", userRoutes_1.default);
app.use("/selfProducts", productRoutes_1.default);
app.use("/professional", professionalRoutes_1.default);
app.use("/payment", paymentRoutes_1.default);
app.use("/astrologers", vastuAstrologerRoutes_1.default);
app.use("/talktoadvisor", talkToAdvisorRoutes_1.default);
app.use("/appointment", appointmentRoutes_1.default);
app.use("/comprehensive", comprehensiveRoutes_1.default);
app.use("/askQuestion", askQuestionRoutes_1.default);
app.use("/support", supportRoutes_1.default);
app.use("/adminSupport", adminSupportRoutes_1.default);
app.use("/notification", notificationRoutes_1.default);
app.use("/token", tokenRoutes_1.default);
app.use("/vastutip", vastuTipRoutes_1.default);
app.use("/dashboard", dashboardRoutes_1.default);
app.use("/horoscope", horoscopesRoutes_1.default);
app.use("/kundli", kundliRoutes_1.default);
app.use("/match", matchMakingRoutes_1.default);
app.use("/luckyNumberColor", luckyNumberColorRoutes_1.default);
app.use("/remedies", remediesQARoutes_1.default);
app.use("/wallet", walletRoutes_1.default);
app.use("/askquestionastro", askQuestionAstroRoutes_1.default);
app.use("/astroProduct", productRoutes_2.default);
app.use("/astroParent", parentRoutes_1.default);
app.use("/cart", cartRoutes_1.default);
app.use("/address", addressRoutes_1.default);
app.use("/order", orderRoutes_1.default);
app.use("/talktoastrologer", talkToAstrologerRoutes_1.default);
app.use("/chats", chatRoute_1.default);
app.use("/messages", messageRoute_1.default);
app.use("/company", myVastuAstroRoutes_1.default);
// 404 Handler
app.use((_req, res) => {
    res.status(404).json({ error: "Not Found" });
});
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, { cors: { origin: "*" } });
exports.io = io;
app.set("io", io);
(0, socketHandler_1.registerSocket)(io);
// Start Server
server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
