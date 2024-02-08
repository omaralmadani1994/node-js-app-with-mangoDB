const express =require('express');

const User= require('./model/User');
const product= require ('./model/product')

const app = express();


app.use(express.json());
const DB =require('./config/connect');

// تجريب ال  requests
  /*app.post ('/add',(req , res)=> {
    console.log ('add work  ');

    data =req.body;

    usr = new User(data);

    usr.save()
    
    .then ((savedUser)=>{res.send(savedUser)})
    .catch ((err)=>{res.send(err)}) 

});
*/

app.post ('/create',async (req,res)=>{

    try{
       data = req.body;
      usr = new User(data);
      
      savedUser = await usr.save();
      console.log('create work')

      res.send(savedUser);
    }

    catch(error){
        res.send(error);
    }

});

/*app.get('/get',(req,res)=>{

    console.log('get work');

    User.find ()
    .then(
        (users)=>{res.send(users);

        }
        )
        .catch(
            (err)=> {
                res.send(err);

            }
        )


});
*/

app.get('/all',async (req,res)=>{

try {

     x= await User.find({age:29 });
    res.send(x);
}

catch(err){
    res.send(err);
}


})


/*app.get('/getbyid/:id',(req,res)=>{
  myid = req.params.id;
    User.findOne({ _id: myid })
    .then((users)=>{
            res.send(users);

    })
    
})
*/

// Get BY ID with async 

app.get('/getbyid2/:id',async (req,res)=>{

    try{
        myid =req.params.id;
         xid = await User.findOne({_id : myid});
        res.send (xid);

    }

    catch(error){

        res.send(error);
    }

})








app.put('/put/:id',(req,res)=>{

    id4 = req.params.id;
    newitem =req.body;

    User.findByIdAndUpdate({ _id: id4}, newitem)
    .then(

        (updated)=>{
            res.send(updated)
        }
    )
    .catch((err)=>{
        res.send(err)
    })
});



app.put('/put2/:id',async (req,res)=>{

    id5=req.params.id;
    newdata = req.body;

    xx =  await User.findByIdAndUpdate({ _id:id5 },newdata)


    try {

        res.send(xx);
    }

    catch(err) {  res.send(err); }


});




 /*app.delete('/delete/:id',(req,res)=>{ 

    myid1 =req.params.id;
    User.findOneAndDelete({ _id :myid1})
    .then((deletedusers)=>{

        res.send(deletedusers)
        console.log('delete work ');

    }) 
    
        .catch((err)=> {
                res.send(err);

        })
    }

);
*/

app.delete('delete2/:id',async(req,res)=>{

    try{

        x2=req.params.id;
        r1 =await User.findOneAndDelete({_id:x2});

        res.send(r1);
    }

    catch (err){

        res.send(err);
    }
})


////////////////////product crud //////



app.post ('/prodpost', async (req,res)=>{

    try{
        newpro = req.body ;

        prod2 =  new product(newpro);
      
         pp= await prod2.save();
         res.status(200).send(pp);

    }

    catch (err) {
        res.status(400).send(err)
    }

  

});




app.listen ( 4000 ,()=> {

    console.log ('sever is running !! ');
});

