const express = require ('express')
const router = express.Router()
const Personne = require('../models/personne')

router.post('/create',(req,res)=>{
Personne.create(req.body)
.then(data=>res.json(data))
.catch(err=>res.status(500).json(err))
})

router.post('/newPersonne',(req,res)=>{
    const newPersonne = new Personne(req.body)
    newPersonne.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.get('/people',(req,res)=>{
    Personne.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.get('/personne/:name',(req,res)=>{
    Personne.findOne({name:req.params.name})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.get('/personne/:personneId',(req,res)=>{
    Personne.findById(req.params.personneId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.put('/personne/update/:personneId',(req,res)=>{
    Personne.findByIdAndUpdate(req.params.personneId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})

router.delete('/personne/delete/:personneId',(req,res)=>{
    Personne.findByIdAndRemove(req.params.personneId)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.get('/limit',(req,res)=>{
    const foodToSearch = "pizza";
    Personne.find()
    .sort({name : 1})
    .limit(2)
    .select("-age")
    .exec((err, data)=> {
        if(err){
        console.log(err)
        res.json({msg:'error'})
        }else{
            res.json(data)
        }})
    })




module.exports = router 