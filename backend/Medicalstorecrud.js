const express =require('express');
const mongooes=require('mongoose');
const bodyParser=require('body-parser');
const Medicalstore=require('./Medicalstore');
const  cors=require('cors');
const connectingstring="mongodb+srv://Neema:neema1234@cluster116.c7ok1.mongodb.net/"
mongooes.connect(connectingstring).then(()=>{
   
    const app=express();
    app.use(bodyParser.urlencoded());
    app.use(cors());
    app.use(express.json());
    console.log("ready ready !!");
     
    //get all 
    app.get('/Medicalstore',async (req,res)=>{
        const ans=await Medicalstore.find();
        res.json(ans);
    })

    //get by id
    app.get('/Medicalstore/:id',async(req,res)=>{
        const ans=await Medicalstore.findOne({id:req.params.id});
        res.json(ans);
    })

    //creat
    app.post('/Medicalstore',async(req,res)=>{
        stu=new Medicalstore({...req.body});
        const ans=await stu.save({id:req.params.id});
        res.json(ans);
    })
    
    //delete 
    app.delete('/Medicalstore/:id',async(req,res)=>{
        const ans=await Medicalstore.deleteOne({id:req.params.id});
        res.json(ans);
    })

    //update
    app.patch('/Medicalstore/:id',async(req,res)=>{
        const stu=await Medicalstore.findOneAndUpdate({id:req.params.id},req.body);
        // stu.name=req.body.name;
        // stu.id=req.body.id;
        // stu.price=req.body.name;
        // stu.pharmaCompanie=req.body.id;
        // stu.information=req.body.id;
        // const ans=await stu.save({id:req.params.id});
        res.json(stu); 
    })

    app.listen(3000,()=>{
        console.log("server staarted at 3000 ");
    })
})
