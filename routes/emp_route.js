let express=reqiure("expres");
let router=express.Router();

router.post("/register",(req,res)=>{
    res.send("register route");
})


router.post("/login",(req,res)=>{
    res.send("login route");
})


router.get("/viewtask",(req,res)=>{
    res.send("viewtask route");
})


router.put("/updatestatus",(req,res)=>{
    res.send("updatestatus route");
})

module.export=router;