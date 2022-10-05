// const http=require('http');

const express=require('express');

const app=express();



app.post('/add',(req,res,next)=>{
    res.send(
        {
            name:"bahu ",
            age:10,
        }
    )
})

app.use('/movies',(req,res,next)=>{
    res.send([
        {
            "id":1,
            "name":"Theerppu",
            "image":"https://upload.wikimedia.org/wikipedia/en/b/b3/Theerppu.jpg",
            "url":"https://www.youtube.com/watch?v=ySthZwUGgrQ"
          },
          {
            "id":2,
            "name":"LIGER ",
            "image":"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/5594/1355594-h-c71aa114a5e4",
            "url":"https://www.youtube.com/watch?v=EqXnD5eUbIA"
          },
          {
            "id":4,
            "name":"RRR",
            "image":"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7635/1307635-h-2954983323ae",
            "url":"https://www.youtube.com/watch?v=aG26HsQ0sqY"
          },
          {
            "id":5,
            "name":"Thor Love And Thunder",
            "image":"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/8295/1328295-h-b05c8156e59a",
            "url":"https://www.youtube.com/watch?v=bCOc7EhUxz0"
          },
          {
            "id":6,
            "name":"Doctor Strange in the Multiverse of Madness",
            "image":"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b",
            "url":"https://www.youtube.com/watch?v=vBrMOhNcezI"
          },
          {
            "id":7,
            "name":"The Sandman",
            "image":"https://www.themoviedb.org/t/p/w440_and_h660_face/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
            "url":"https://www.youtube.com/watch?v=83ClbRPRDXU"
          },
          {
            "id":8,
            "name":"House of the Dragon",
            "image":"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
            "url":"https://www.youtube.com/watch?v=DotnJ7tTA34"
          },
          {
            "id":9,
            "name":"Minnal Murali",
            "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTvH7Uwf7HzMSpiHvcRZEEL-jooRiEXmtxP6QjNgJwjjIdsJ7jd",
            "url":"https://www.youtube.com/watch?v=zAUAliz1TKA"
          },
    
          {
            "id":10,
            "name":"Malayankunju",
            "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPPpTVOLmLXhF2e_Zbz54si78r3L2r5Uy9YQh0TatrM5UfJNxM",
            "url":"https://www.youtube.com/watch?v=jXPIYzm87WM"
          },
          {
            "id":11,
            "name":"Kaduva",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhRpdbwOWtFCqXHQbZiiLEzvTXHCCfAHhr6qRwDa3A3AOdT2t",
            "url":"https://www.youtube.com/watch?v=KN2HFjW3eTk"
          },
          {
            "id":12,
            "name":"Kurup",
            "image":"https://m.media-amazon.com/images/M/MV5BMDVlMjg4ZDAtYzI4Yi00NzA3LTk0N2YtYTMwODBlYTY2YmI1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            "url":"https://www.youtube.com/watch?v=-Q__mXqYo7Y"
          },
          {
            "id":13,
            "name":"Vaashi",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjAj0OFLiQ2T8w1eSpe_xRycKKW1kQ8IMaGW1B_aClxb6m9Z9",
            "url":"https://www.youtube.com/watch?v=6vuXYVYJX4k"
          },
          {
            "id":14,
            "name":"Home",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9CHannr6pNNU-9-VhPlgmX2L7duBSXD-bNEQXKsSFM5v3ump8",
            "url":"https://www.youtube.com/watch?v=pr8E7D4tYuM"
          },
          {
            "id":15,
            "name":"CBI 5",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPCzfa0vnMQXZYBf7gIqggYgCAKJD7Hcx7cy5Hw5udwclojOoC",
            "url":"https://www.youtube.com/watch?v=PKbL-427wms"
          },
          {
            "id":16,
            "name":"Marakkar: Lion of the Arabian Sea",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJG-iXxc4LVperFAs-uDhp9scQKO_VkBLLaSNzdTNyQ86UrbM0",
            "url":"https://www.youtube.com/watch?v=P8m6uQZb3i8"
          },
          {
            "id":17,
            "name":"12th Man",
            "image":"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/6352/1246352-v-a0293f1acbbf",
            "url":"https://www.youtube.com/watch?v=V81jMFrawAk"
          },
          {
            "id":18,
            "name":"Jo and Jo",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyav8lDJQxgxBpo_zZYBm99Wr5dsvB4b_7g20yafntGo7_2bWz",
            "url":"https://www.youtube.com/watch?v=K8SLH8uexMo"
          },
          {
            "id":19,
            "name":"Jana Gana Mana",
            "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0FLdExWlB9yeN4JQdJxQ0PQp6_xKZxTG9GpvGWuRxCoDeaL1X",
            "url":"https://www.youtube.com/watch?v=oN3tz-UetKw"
          },
          {
            "id":20,
            "name":"Paappan",
            "image":"https://upload.wikimedia.org/wikipedia/en/e/e4/Paappan_%282022_movie_poster%29.jpg",
            "url":"https://www.youtube.com/watch?v=_iVx4aJEKKA"
          },
          {
            "id":21,
            "name":"The Priest",
            "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFcQ0dkqM09qjvqmiqwM7IJUwKRpKy6BQU-G-1xRLxhGGOT5nB",
            "url":"https://www.youtube.com/watch?v=IYfdQOGqL1o"
          },
          {
            "id":22,
            "name":"Joji",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX7s6PH1qBUMe4yoOOtkDOCxmdSqfHf4beMGLTue2cfAHhjj2",
            "url":"https://www.youtube.com/watch?v=9yULZ8y1J-s"
          },
          {
            "id":23,
            "name":"Pada",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEQr-3BhNL__67f7yS638zL1JaqEPLoRyGuFF5xkTDBR-leBXU",
            "url":"https://www.youtube.com/watch?v=h1ehTAaK0os"
          },
          {
            "id":24,
            "name":"Prakashan Parakkatte",
            "image":"https://upload.wikimedia.org/wikipedia/en/1/16/Prakashan_Parakkatte.jpg",
            "url":"https://www.youtube.com/watch?v=2tabJL8jri0"
          },
          {
            "id":25,
            "name":"Ajagajantharam",
            "image":"https://m.media-amazon.com/images/M/MV5BZmJkMjc0NGUtMzAxYi00N2I4LWI2YzQtNjMxNWFiOGU0MDM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            "url":"https://www.youtube.com/watch?v=Yv9tYU4JpRI"
          },
          {
            "id":26,
            "name":"Nna, Thaan Case Kodu",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwiBm08h-v2Eaj52KdOclqaWRbwsZJDFiLKTQip_jby5rPtIgJ",
            "url":"https://www.youtube.com/watch?v=nv6B6VPzGoM"
          },
          {
            "id":27,
            "name":"Drishyam 2",
            "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvBg_dBlbSyRGSemKUcd6RxbUrwhHZr-y9wvslQauuyatVQo2e",
            "url":"https://www.youtube.com/watch?v=4SiqPO5CZzk"
          },
          {
            "id":28,
            "name":"Puzhu",
            "image":"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Puzhu_FL.jpeg/220px-Puzhu_FL.jpeg",
            "url":"https://www.youtube.com/watch?v=d64ck4nkE_M"
          },
          {
            "id":29,
            "name":"Cold Case",
            "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTz8WzG3nY2dK86_BgVWopXoNfpNtkuc8LluIII6AWGevvtNzLb",
            "url":"https://www.youtube.com/watch?v=-AdA29doI90"
          },
          {
            "id":30,
            "name":"Hridayam",
            "image":"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hridayam-et00317916-18-11-2021-07-42-12.jpg",
            "url":"https://www.youtube.com/watch?v=urLG6jU4y9Y"
          }
        
    
    ])

})

app.use('/',(req,res,next)=>{
    res.send('HOme')

})

// app.use((req,res,next)=>{
//     console.log('2th');
//     next();
    
// })

// app.use((req,res,next)=>{
//     console.log('3th');
//     res.send('<video controls autoplay name="media"><source src="https://devshamseer.github.io/videoApi/video1.mp4" type="video/mp4"></video>');


// })

app.listen(7870);

// http.createServer((req,res)=>{

// })