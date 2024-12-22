import  'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';

const app = express();

const PORT = process.env.PORT || 5001;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));   // to parse the form data

app.get("/",(req,res)=>{
    res.render('index');
})

//https://api.openai.com/v1/chat/completions

//Main login route 
app.post("/correct",async(req,res)=>{
    const text = req.body.text.trim();
    if(!text){
        res.render('index',{
            corrected:'please enter some text',
            originalText:text
        })
    }
       
        try{
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${process.env.OPENAI_API_KEY}`
                },
                body:JSON.stringify({
                    model:'gpt-3.5-turbo',
                    messages:[
                        {
                            role:'user',
                            content:`Correct this to standard English: ${text}`
                        }
                    ],
                    max_tokens:100
        })
    })
        if(!response.ok){
            res.render('index',{
                corrected:'Something went wrong, please try again',
                originalText:text
            })
        }
        const data = await response.json();
        const correctedText = data.choices[0].message.content;
        res.render('index',{
            corrected:correctedText,
            originalText:text
        })}catch(error){
           res.render('index',{
            corrected:'Something went wrong, please try again',
            originalText:text
        })
        }
        

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})