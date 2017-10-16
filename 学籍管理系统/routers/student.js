// 处理学生的增删改查请求

var express = require("express");
var router = express.Router();
var Student = require("../modules/mongoose");

router.post("/add",function(req,res){
	// 自行补充添加时间
	req.body.createTime = new Date();
	// 存入数据库
	var stu = new Student(req.body);
	stu.save(function(err){
		if (!err) {
			res.redirect("/");
		}else{
			res.status(200).send('<script>location.href="/";alert("存储数据失败");</script>');
		}
	});
});

module.exports = router;
