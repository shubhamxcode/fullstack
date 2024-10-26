import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send("hello this is server")
})
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          setup: "Why did the scarecrow win an award?",
          punchline: "Because he was outstanding in his field!"
        },
        {
          id: 2,
          setup: "What do you call fake spaghetti?",
          punchline: "An impasta!"
        },
        {
          id: 3,
          setup: "Why don't scientists trust atoms?",
          punchline: "Because they make up everything!"
        },
        {
          id: 4,
          setup: "Why did the math book look sad?",
          punchline: "Because it had too many problems!"
        },
        {
          id: 5,
          setup: "How does a penguin build its house?",
          punchline: "Igloos it together!"
        }
      ];
      res.send(jokes)
      
})
const Port=process.env.PORT || 5000

app.listen(Port,()=>{
    console.log(`serve at Http://localhost:${Port}`);
})