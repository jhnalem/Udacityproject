/*This section is Bio*/
var bio ={
    "name": "Yohannes Tekie",
    "role": "Web Developer",
    "contact": {
    "mobile": "415-722-5764",
    "email": "jhnalem@gmail.com",
    "github": "jhanalem@gmail.com",
    "location": "San Francisco"
    },
    "welcomeMessage": "welcome to my resume",
    "skills": ["Javascript","Html","Css","Java","Ruby","Ruby on rails"],
    "bioPic": "images/bioPic.jpg"
}             
var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formatedMobile =HTMLmobile.replace("%data%",bio.contact.mobile);
$("#topContacts").append(formatedMobile);
var formattedEmail =HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").append(formattedEmail);
var formattedGithub =HTMLgithub.replace("%data%",bio.contact.github);
$("#topContacts").append(formattedGithub);

var formattedWelcomeMessage =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);
var formattedImg= HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedImg);


if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill =HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
     var formattedSkill1 =HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill1);
     var formattedSkill2 =HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill2);
        
}
/*==============================================*/

/* This is about my work experience */

var work ={
  "job":[
  {
    "Employer" : "SuperQA",
    "location":  "Oakland, Ca",
    "title" : "software tester",
    "Year": " january 5 - july 7",
    "description":"DOM and the DOM can change. In fact, JavaScript its ability to manipulate the DOM, which is essentially a JavaScrip object. When JavaScript makes something interesting happen on awebsite, its likely the action happened because JavaScript changedthe DOM. jQuery is fast and easyto use, but it doesnt do anything yo"
  },
       {
    "Employer" : "Segen Coorperation",
    "location":  "Asmara, Eritrea",
    "title" : "java Developer",
    "Year": " january 5 - july 7",
    "description":"DOM and the DOM can change. In fact, JavaScript its ability to manipulate the DOM, which is essentially a JavaScrip object. When JavaScript makes something interesting happen on awebsite, its likely the action happened because JavaScript changedthe DOM. jQuery is fast and easyto use, but it doesnt do anything yo"
  }
  ]
}

$("#workExperience").append(HTMLworkStart);
var formattedEmployer =HTMLworkEmployer.replace("%data%",work.job[0].Employer);
$("#workExperience h2").append(formattedEmployer);
var formattedYear=HTMLworkDates.replace("%data%",work.job[0].Year);
$("#workExperience h2").append(formattedYear);
var formattedworklocation=HTMLworkLocation.replace("%data%",work.job[0].location);
$("#workExperience h2").append(formattedworklocation);
var formattedDescription= HTMLworkDescription.replace("%data%",work.job[0].description);
$("#workExperience h2").append(formattedDescription);

var formattedEmployer =HTMLworkEmployer.replace("%data%",work.job[1].Employer);
$("#workExperience h2").append(formattedEmployer);
var formattedYear=HTMLworkDates.replace("%data%",work.job[1].Year);
$("#workExperience h2").append(formattedYear);
//var formatedTitile=HTMLworkTitle.replace("%data%",work.job[1].title);
//$("#workExperience h2").append(formatedTitile);
var formattedworklocation1=HTMLworkLocation.replace("%data%",work.job[1].location);
$("#workExperience h2").append(formattedworklocation1);
var formatteddescription=HTMLworkDescription.replace("%data%",work.job[1].description);
$("#workExperience h2").append(formatteddescription);

/*========================================================================================== */
/* THis section is about the projects that i have accomplished so far*/

var projects ={
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2016",
            "description": "DOM and the DOM can change. In fact, JavaScript its ability to manipulate the DOM, which is essentially a JavaScrip object. When JavaScript makes something interesting happen on awebsite, its likely the action happened because JavaScript changedthe DOM. jQuery is fast and easyto use, but it doesnt do anything yo",
            "image": [
                "images/fry.jpg","images/fry.jpg"
       ] }
        
    ]
}

$("#projects").append(HTMLprojectStart);

var formattedtitleproject=HTMLprojectTitle.replace("%data%",projects.projects[0].title);
$("#projects h2").append(formattedtitleproject);
var formateddatedproject=HTMLprojectDates.replace("%data%",projects.projects[0].dates);
$("#projects h2").append(formateddatedproject);
var formatedDescriptionproject = HTMLprojectDescription.replace("%data%",projects.projects[0].description);
$("#projects h2").append(formatedDescriptionproject);
var formattedimageproject =HTMLprojectImage.replace("%data%",projects.projects[0].image[0]);
$("#projects h2").append(formattedimageproject);
var formattedimageproject1 =HTMLprojectImage.replace("%data%",projects.projects[0].image[1]);
$("#projects h2").append(formattedimageproject1);

/*================================================================================*/
  
/*This section is about Education*/

var education ={
	"schools": [{
		"name": "Eritrean Institute of technology",
		"city": "Asmara, Eritrea",
		"Degree": "BA",
		"Major": "Computer Science",
		"Year": "2004 -2008",
		"url": "http://example.com"
	}, {
		"name": "laney College",
		"city": "Oakland, Ca",
		"Degree": "AA",
		"Major": "Computer Science",
		"Year": "20014 -2016",
		"url": "http://example.com"
	}],
	"OnlineCourses": [
        {
        "name": "Online Courses",
		"Major": "JavaScript Crash Course - Udacity",
		"school": "Udacity",
		"Year": "2016",
		"url": "http://www.udacity.com/course/ud804"
	}
    ]
}
$("#education").append(HTMLschoolStart);
var formattedschoolname=HTMLschoolName.replace("%data%",education.schools[0].name);
$("#education h2").append(formattedschoolname);
var formatedschoolyear=HTMLschoolDates.replace("%data%",education.schools[0].Year);
$("#education h2").append(formatedschoolyear);
var formattedlocationschool=HTMLschoolLocation.replace("%data%",education.schools[0].city);
$("#education h2").append(formattedlocationschool);
var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[0].Major);
$("#education h2").append(formattedMajor);
var formatteddgree= HTMLschoolDegree.replace("%data%",education.schools[0].Degree);
$("#education h2").append(formatteddgree);

var formattedschoolname1=HTMLschoolName.replace("%data%",education.schools[1].name);
$("#education h2").append(formattedschoolname1);
var formatedschoolyear1=HTMLschoolDates.replace("%data%",education.schools[1].Year);
$("#education h2").append(formatedschoolyear1);
var formattedlocationschool1=HTMLschoolLocation.replace("%data%",education.schools[1].city);
$("#education h2").append(formattedlocationschool1);
var formattedMajor1=HTMLschoolMajor.replace("%data%",education.schools[1].Major);
$("#education h2").append(formattedMajor1);
//var formatteddgree1= HTMLschoolDegree.replace("%data%",education.schools[1].Degree);
//$("#education h2").append(formatteddgree1);

var formattedOnlinename=HTMLonlineClasses.replace("%data%",education.OnlineCourses[0].name);
$("#education h2").append(formattedOnlinename);
var formattedMajor2=HTMLonlineTitle.replace("%data%",education.OnlineCourses[0].Major);
$("#education h2").append(formattedMajor2);

//var formatedschool2=HTMLonlineTitle-.replace("%data%",education.OnlineCourses[0].school);
//$("#education h2").append(formatedschool2);

var formattedyearschool2=HTMLonlineDates.replace("%data%",education.OnlineCourses[0].Year);
$("#education h2").append(formattedyearschool2);

var formattedonlineUrl= HTMLonlineURL.replace("%data%",education.schools[0].url);
$("#education h2").append(formattedonlineUrl);




/*================================================================================*/
//  
// $("#mapdiv h2").append("Where i have worked");
//googleMap.append(<img scr='images/bioPic.jpg'/>);
//
//
//























