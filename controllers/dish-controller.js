const Dish = require('../models/Dish')

module.exports = {
  index : async(req,res) =>{
    try{
        const result = await Dish.find({})

        return res.status(200).json({'state':true,'data':result})
    }catch(err){
        return res.status(500).json({'state':false,'error':err})
    }
  },
  findById :async(req,res)=>{
    const {id} = req.params
    try{
      const result = await Dish.findById(id)

      return res.status(200).json({'state':true,'data':result})
    }catch(err){
      res.status(500).json({'state':false,'error':err})
    }
  },
  save : async(req,res)=>{
    const dish = new Dish(req.body)
    try{
      const dishFind = await Dish.findOne({'idDish':dish.idDish})
      if( dishFind == null ){
        const result = await dish.save()

        return res.status(200).json({'state':true,'data':result}) 
      }else{
        return res.status(208).json({'state':false,'data':"Plato ya Existe"})
      }
    }catch(err){
      return res.status(500).json({'state':false,'error':err})
    }  
  },
  update : async(req,res)=>{
    const dish = req.body

    const {id} = req.params
    try{
      const result = await Dish.findByIdAndUpdate(id,dish)

      return res.status(200).json({'state':200,'data':result})
    }catch(err){
      return res.status(500).json({'state':false,'error':err})
    }
  },
  erase : async(req,res)=>{
    const {id} = req.params
    try{
      const result = await Dish.findByIdAndDelete(id)

      return res.status(200).json({'state':200,'data':result})
    }catch(err){
      return res.status(500).json({'state':false,'error':err})
    }
  }
}