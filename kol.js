 import scrape from "vebsite-scraper";
import express from "express";

const app = express();
const port = 3000;

const domain = process.argv[2];
const options = {
    urls: ['https://${domain}'],
    directory: domain,
};
app.use(express.static('C:\Users\Public\Desktop\${domain}'));

app.get("/", (req, res) => {
    res.sendFile('C:\Users\Public\Desktop\index.html`);
});
app.listen(port, () => {
    console.log(`App started on port ${port}');
});
