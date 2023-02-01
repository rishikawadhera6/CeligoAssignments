const urlShortner = require('node-url-shortener');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'bigurl', title: 'ORIGINAL'},
        {id: 'shorturl', title: 'SHORTENED'}
    ]
});
const links = [
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"];

async function shorten(){
    links.forEach((link)=>{
        urlShortner.short(link, async (err,url)=>{
             await csvWriter.writeRecords([{bigurl:link,shorturl:url}])
        });
    });
}

shorten();