import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({
        status:"ok",
        timestamp:new Date().toISOString()
    })
})

app.get('/api',(req,res)=>{
    res.json({
        message:'Welcome to my backend apinjdj'
    })
})


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on ${PORT}`)
});