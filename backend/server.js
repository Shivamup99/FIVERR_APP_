import exprss from 'express';
const PORT = process.env.PORT || 5000;
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connection from './database/conection.js';
import user from './routes/user.route.js'
import gig from './routes/gig.route.js'
import order from './routes/order.route.js'
import message from './routes/message.route.js'
import auth from './routes/auth.route.js'
import review from './routes/review.route.js'
import conversation from './routes/conversation.route.js'
const app = exprss();
app.use(cors({origin:"http://localhost:3000",credentials:true}));
app.use(exprss.json());
app.use(cookieParser());


connection();
app.use('/api/auth',auth);
app.use('/api/users',user);
app.use('/api/gigs',gig);
app.use('/api/messages',message);
app.use('/api/conversations',conversation);
app.use('/api/reviews',review);
app.use('/api/orders',order);


app.use((err,req,res,next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong !";
    return res.status(errStatus).json({message:errMessage})
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})
