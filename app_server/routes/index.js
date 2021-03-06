var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');
var ctrlHod = require('../controllers/hod.controller.js');
var ctrlHostelIncharge = require('../controllers/hostel.controller.js');
var ctrlMain = require('../controllers/main.controller.js');
var ctrlModerator = require('../controllers/moderator.controller.js');
var ctrlStudent = require('../controllers/student.controller.js');
var ctrlCoc = require('../controllers/coc.controller.js');
var ctrlCounsellor = require('../controllers/counsellor.controller.js');
var ctrlFaaculty = require('../controllers/faculty.controller.js');
var mongoose =require('mongoose');
var User = mongoose.model('user');
//Home page
router.get('/', ctrlMain.Home);

//Course Coordinator
router.get('/coc',ctrlCoc.Coc);
router.get('/coc/assigntask',ctrlCoc.AssignTask);
router.get('/coc/mytask',ctrlCoc.MyTask);
router.get('/coc/openforum',ctrlCoc.OpenForum);
router.get('/coc/facultydetail',ctrlCoc.FacultyDetail);

//Counsellor
router.get('/counsellor',ctrlCounsellor.Counsellor);
router.get('/counsellor/giveappointment',ctrlCounsellor.GiveAppointment);
router.get('/counsellor/postarticle',ctrlCounsellor.PostArticle);
router.get('/counsellor/viewproblem',ctrlCounsellor.ViewProblem);
router.get('/counsellor/writeback',ctrlCounsellor.WriteBack);

//Faculty
router.get('/faculty',ctrlFaaculty.Faculty);
router.get('/faculty/assignfinal',ctrlFaaculty.AssignFinal);
router.get('/faculty/assigntostudent',ctrlFaaculty.AssignToStudent);
router.get('/faculty/postanswer',ctrlFaaculty.PostAnswer);
router.get('/faculty/stats',ctrlFaaculty.Stats);

//router.post('/faculty/postanswer',ctrlFaaculty.Fac);

//Head Of Deoartment
router.get('/hod',ctrlHod.Hod);
router.get('/hod/assigntask',ctrlHod.AssignTask);
router.get('/hod/subjects',ctrlHod.Subjects);

//Hostel Incharge
router.get('/hostelincharge',ctrlHostelIncharge.HostelIncharge);
router.get('/hostelincharge/markcomplete',ctrlHostelIncharge.MarkComplete);
router.get('/hostelincharge/viewproblem',ctrlHostelIncharge.ViewProblem);

//Moderator
router.get('/moderator',ctrlModerator.Moderator);
router.get('/moderator/mostrecent',ctrlModerator.MostRecent);
router.get('/moderator/mostrecentapprove',ctrlModerator.MostRecentApprove);
router.get('/moderator/mostrecentreject',ctrlModerator.MostRecentReject);
router.get('/moderator/mostupvoted',ctrlModerator.MostUpvoted);
router.get('/moderator/response',ctrlModerator.Response);

//Student
router.get('/student',ctrlStudent.Student);
router.get('/student/counselling',ctrlStudent.Counselling);
router.get('/student/feedback',ctrlStudent.Feedback);
router.get('/student/feedback/feedbackhostel',ctrlStudent.FeedbackHostel);
router.get('/student/feedback/subject',ctrlStudent.FeedbackSubject);
router.get('/student/ideation',ctrlStudent.Ideation);



// router.post('/student/ideation',ctrlStudent.Idea);
// router.post('/student/feedback/question',ctrlStudent.AskQuestion);

//Signup and Detail
router.get('/signup',function(req,res){
    res.render('signup',{title:'Sign Up'});
});
router.post('/signup',function(req,res){
          var newUser = new User();
          //  newUser.local.usertype= usertype;
          newUser.email = req.body.email;
          newUser.password = req.body.password
          newUser.save();
});
router.get('/signup/detail',function(req,res){
    res.render('detail',{title:'SignUp - Details'});
});

//router.post('/signup', ctrlMain.SignUp);

//Login
router.get('/login',function(req,res){
    res.render('login',{title:'login'});
});

//About And Contact
router.get('/about',function(req,res){
    res.render('aboutus',{title:'Aboutus'});
});
router.get('/contact',function(req,res){
    res.render('contact',{title:'Contact'});
});


module.exports = router;