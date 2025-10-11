import express from "express";
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import connectDB from "./config/databaseConfig";
import professionalRoutes from "./routes/professionalRoutes";
import paymentRoutes from './routes/paymentRoutes';
import bodyParser from 'body-parser';
import http from "http";
import { handleWebhook } from "./controllers/PaymentController";
import vastuRoutes from './routes/vastuAstrologerRoutes';
import talkToAdvisorRoutes from './routes/talkToAdvisorRoutes';
import comprehensiveRoutes from './routes/comprehensiveFreeCallRoutes';
import appointmentRoutes from './routes/appointmentImportantCallRoutes';
import supportRoutes from './routes/supportRoutes';
import adminSupportRoutes from './routes/adminSupportRoutes';
import askQuestionVastuRoutes from './routes/askQuestionVastuRoutes';
import notificationRoutes from './routes/notificationRoutes';
import tokenRoutes from './routes/tokenRoutes';
import vastuTipRoutes from './routes/vastuTipRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import horoscopeRoutes from "./routes/horoscopesRoutes";
import cors from 'cors';
import kundliRoutes from './routes/kundliRoutes';
import matchRoutes from './routes/matchMakingRoutes';
import luckyNumberColorRoutes from './routes/luckyNumberColorRoutes'
import remediesRoutes from './routes/remediesQARoutes'
import walletRoutes from './routes/walletRoutes'
import askQuestionAstroRoutes from './routes/askQuestionAstroRoutes'
import astroProductRoutes from './routes/routes/productRoutes'
import astroParentRoutes from './routes/routes/parentRoutes'
import astroCartRoutes from './routes/routes/cartRoutes'
import astroAddressRoutes from './routes/routes/addressRoutes'
import astroOrderRoutes from './routes/routes/orderRoutes'
import talkToAstrologerRoutes from './routes/talkToAstrologerRoutes'
import chatRoutes from './routes/chatRoutes/chatRoute'
import messageRoutes from './routes/chatRoutes/messageRoute'
import { Server, Socket } from "socket.io";
import { registerSocket } from "./utils/socketHandler";
import companyRoutes from './routes/myVastuAstroRoutes';
const app = express();
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

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Webhook raw body
app.use('/payment/webhook', bodyParser.raw({ type: 'application/json' }));
app.post('/payment/webhook', handleWebhook);

// JSON Parser
app.use(express.json());

// Connect DB
connectDB();

// Test Route
app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Hello from root!",
  });
});

// All Routes
app.use("/users", userRoutes);
app.use("/selfProducts", productRoutes);
app.use("/professional", professionalRoutes);
app.use("/payment", paymentRoutes);
app.use("/astrologers", vastuRoutes);
app.use("/talktoadvisor", talkToAdvisorRoutes);
app.use("/appointment", appointmentRoutes);
app.use("/comprehensive", comprehensiveRoutes);
app.use("/askQuestionvastu", askQuestionVastuRoutes);
app.use("/support", supportRoutes);
app.use("/adminSupport", adminSupportRoutes);
app.use("/notification", notificationRoutes);
app.use("/token", tokenRoutes);
app.use("/vastutip", vastuTipRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/horoscope", horoscopeRoutes);
app.use("/kundli", kundliRoutes);
app.use("/match", matchRoutes);
app.use("/luckyNumberColor", luckyNumberColorRoutes);
app.use("/remedies", remediesRoutes);
app.use("/wallet", walletRoutes);
app.use("/askquestionastro", askQuestionAstroRoutes);
app.use("/astroProduct", astroProductRoutes);
app.use("/astroParent", astroParentRoutes);
app.use("/cart", astroCartRoutes);
app.use("/address", astroAddressRoutes);
app.use("/order", astroOrderRoutes);
app.use("/talktoastrologer", talkToAstrologerRoutes);
app.use("/chats", chatRoutes);
app.use("/messages", messageRoutes);
app.use("/company", companyRoutes);
// 404 Handler
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });
app.set("io", io);
registerSocket(io);
export { io };
// Start Server
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});


