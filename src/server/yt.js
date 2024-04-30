var express = require('express');
var cors = require('cors');
var mongoClient = require('mongodb').MongoClient;



var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
var conString = "mongodb://127.0.0.1:27017";


app.post("/user-reg",(req,res)=>{
    var user = {
        FullName:req.body.FullName,
        UserId:req.body.UserId,
        Password:req.body.Password,
        Email:req.body.Email,
        Mobile:req.body.Mobile
    };
   mongoClient.connect(conString).then(clientObject =>{
    var database = clientObject.db("videoproject");
    database.collection("users").insertOne(user).then(()=>{
        res.redirect("/users");
    });
   });
});

app.get("/users",(req,res)=>{
   mongoClient.connect(conString).then(clientObject =>{
    var database = clientObject.db("videoproject");
    database.collection("users").find({}).toArray().then(documents=>{
        res.send(documents)
        res.end()
    })
   })
})
app.get('/get-videos',(req,res)=>{
    mongoClient.connect(conString).then(clientObject =>{
        var database = clientObject.db('videoproject');
        database.collection("videos").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})


app.get('/users',(req,res)=>{
    mongoClient.connect(conString).then(clientObject =>{
        var database =clientObject.db('projectvideo');
        database.collection("users").find({}).toArray().then(documents =>{
            res.send(documents);
            res.end();
        })
    })
})

app.get('/admin-videos',(req,res)=>{
    mongoClient.connect(conString).then(clientObject =>{
        var database = clientObject.db("videoproject");
        database.collection('videos').find({}).toArray().then(documents =>{
            res.send(documents);
            res.end();
        })

    })
})

app.post('/add-videos',(req,res)=>{
    var user = {
        VideoId:req.body.VideoId,
        Title:req.body.Title,
        Url:req.body.Url,
        Likes:req.body.Likes,
        Comments:req.body.Comments
    };
    mongoClient.connect(conString).then(clientObject =>{
        var database = clientObject.db('videoproject')
        database.collection('videos').insertOne(user).then(()=>{
            res.end();
        })
    })
})

app.put('/edit-video/:videoId',(req,res)=>{
    var videoId = parseInt(req.params.videoId);
    mongoClient.connect(conString).then(clientObj =>{
        var database = clientObj.db('videoproject');
        var video = {
            Title:req.body.Title,
            Url:req.body.Url,
            Likes:parseInt(req.body.Likes),
            Comments:parseInt(req.body.Comments)
        };
        database.collection('videos').updateOne({VideoId:videoId},{$set:video}).then(()=>{
            res.end();
        });
    });

});

app.delete('/delete-video/:videoId',(req,res)=>{
    const videoId =parseInt(req.params.videoId)

    mongoClient.connect(conString).then(clientObj =>{
        var database = clientObj.db("videoproject");
        database.collection('videos').deleteOne({VideoId:videoId}).then(()=>{
            res.end();
        })
    })
})

app.get('/get-reels',(req,res)=>{
    mongoClient.connect(conString).then(clientObject =>{
        var database = clientObject.db('videoproject');
        database.collection("reels").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})


app.get('/collect-videos',(req,res)=>{
    mongoClient.connect(conString).then(clientObj =>{
        var database = clientObj.db("videoproject")
        database.collection('cv').find({}).toArray().then(document=>{ 
            res.send(document);
        });
    });
});






// app.put('/update-video/id', (req, res)=>{

//     var videoId = parseInt(req.params.id);

//     mongoClient.connect(conStr).then(clientObj =>{
//         var database = clientObj.db("videoproject");
//         var video = {
//             VideoId: parseInt(req.body.VideoId),
//             Title: req.body.Title,
//             Url: req.body.Url,
//             Description: req.body.Description,
//             Likes: parseInt(req.body.Likes),
//             Dislikes: parseInt(req.body.Dislikes),
//             Views: parseInt(req.body.Views),
//             Comments: [req.body.Comments],
//             CategoryId: parseInt(req.body.CategoryId)
//         };
//         database.collection("videos").updateOne({VideoId:videoId},{$set:video}).then(()=>{
//              console.log("Video Updated");
//              res.end();
//         });
//    });
// });



app.listen(5000);
console.log(' Server Started : http://127.0.0.1:5000');