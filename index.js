const axios = require("axios")
const app = require("express")();

app.get("/",async (req,res) => {
    const response = await axios.get("https://nekos.best/api/v2/neko");
    const gambar = await axios.get(response.data.results[0].url,{ responseType: 'arraybuffer' });
    res.header('Content-Type', 'image/jpeg');
    return res.send(gambar.data);
})

app.listen(5000,() => console.log("Server on"));


