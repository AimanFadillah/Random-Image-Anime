const axios = require("axios")
const app = require("express")();

async function webImage (res,link) {
    const gambar = await axios.get(link,{ responseType: 'arraybuffer' });
    res.header('Content-Type', 'image/jpeg');
    return res.send(gambar.data);
}

app.get("/",async (req,res) => {
    try{
        const response = await axios.get("https://waifu.pics/api/sfw/waifu");
        return await webImage(res,response.data.url);
    }catch(e){
        return res.json(e);
    }
})
app.get("/neko",async (req,res) => {
    try{
        const response = await axios.get("https://nekos.best/api/v2/neko");
        return await webImage(res,response.data.results[0].url);
    }catch(e){
        return res.json(e);
    }
})
app.get("/hug",async (req,res) => {
    try{
        const response = await axios.get("https://nekos.best/api/v2/hug");
        return await webImage(res,response.data.results[0].url);
    }catch(e){
        return res.json(e);
    }
})
app.get("/waifu",async (req,res) => {
    try{
        const response = await axios.get("https://api.waifu.im/search?included_tags=waifu");
        return await webImage(res,response.data.images[0].url);
    }catch(e){
        return res.json(e);
    }
})

app.listen(5000,() => console.log("Server on"));


