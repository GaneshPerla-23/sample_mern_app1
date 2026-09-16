let express=reqiure("expres");
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("view employees route");
})
router.post("/assign-task",(req,res)=>{
    res.send("assign task route");
})
router.get("/view-task",(req,res)=>{
    res.send("view task route");
})
router.delete("/delete-emp",(req,res)=>{
    res.send("adelete emp route");
})
// localhost:3000/api/hr/assign-task =>POST
// localhost:3000/api/hr/viewtasks =>GET