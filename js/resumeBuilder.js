/********************
*****Bio Section*****
*********************/


var bio = {
	"name"		:"Jose Contreras",
	"role"		:"Software Engineer",
	"contacts":
	{
		"mobile"	:"55147651390",
		"email"		:"josel.ch@hotmail.com",
		"github"	:"pepness",
		"twitter"	:"+JoseChMx",
		"location"	:"Guadalajara"
	},
	"welcomMsg"	:"Duck it!",
	"bioPic":"images/perfil.jpg",
	"skills":["People skills","Work under Pressure","Logical Mathematical","Problem Solving"],
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").append(formattedName + formattedRole);

		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);

		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomMsg);
		$("#header").append(formattedMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		//var formattedgPlus = HTMLgPlus.replace("%data%", bio.contacts.gPlus);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);

		var arrayContacs = [formattedMobile, formattedEmail, formattedGitHub, formattedTwitter, formattedLoc];
		var formattedContacs = arrayContacs.join(" ");
		$("#topContacts").append(formattedContacs);
		$("#footerContacts").append(formattedContacs);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = "";
			for(skill in bio.skills) {
				formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};


/********************
*****Work Section*****
*********************/


var work = {
	"jobs":[
	{
		"employer":"CIBANCO",
		"title":"System Analyst",
		"location":"Ciudad de Mexico",
		"dates":"2010-2014",
		"description":"Analysis, design, development, supervision and control of developments in JAVA"
	},
	{
		"employer":"Freelance",
		"title":"Software Engineer",
		"location":"Ciudad de Mexico",
		"dates":"2014",
		"description":"Software Development in JAVA"
	}
	],
	display : function() {
		for(var j in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployeer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
			var formattedEmpTitl = formattedEmployeer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[j].description);
			$(".work-entry:last").append(formattedEmpTitl);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDesc);
		}
	}
};


/********************
***Projects Section***
*********************/


var projects = {
	"projects":[
	{
		"title":"WebServers",
		"dates":"2011-2014",
		"description":"Creation, deploy and maintenance of Oracle WebLogic and Tomcat",
		"images":["images/fry.jpg"]
	},
	{
		"title":"StandAlone",
		"dates":"2010-2014",
		"description":"Creation, deploy and maintenance of JAVA applications",
		"images":["images/fry.jpg"]
	}
	],
	display : function() {
		//console.log("tam: ",projects.projects[0].title);
		for(project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formtattedTittle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formtattedTittle);

			var formtattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formtattedDates);

			var formtattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formtattedDesc);

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formtattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					//console.log("protam3 : ", projects.projects[project].images.[image]]);
					$(".project-entry:last").append(formtattedImage);
				}
			}
		}
	}
};


/********************
***Education Section***
*********************/


var education = {
	"schools":[
	{
		"name":"UNITEC",
		"location":"Monterrey",
		"degree":"BA",
		"major":["Computer System Engineer"],
		"dates":"2007-2011",
		"url":"www.unitec.com.mx"
	}
	],
	"onlineCourses":[
	{
		"title":"JavaScript Basics",
		"school":"Udacity",
		"date":"2014",
		"url":"https://www.udacity.com/course/ud804"
	},
	{
		"title":"How to Use Git and GitHub",
		"school":"Udacity",
		"date":"2014",
		"url":"https://www.udacity.com/course/ud775"
	}
	],
	display : function() {
		for(school in education["schools"]) {
			(function () {
				$("#education").append(HTMLschoolStart);

				var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				//$(".education-entry:last").append(formattedName);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				//$(".education-entry:last").append(formattedDegree);

				var formatedNameDegree = formattedName + formattedDegree;
				$(".education-entry:last").append(formatedNameDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
				$(".education-entry:last").append(formattedDates);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				//console.log(education.schools[school].major.length);
				if(education.schools[school].major.length > 0) {
					for(maj in education.schools[school].major) {
						//console.log(education.schools[school].major[maj]);
						var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[maj]);
						$(".education-entry:last").append(formattedMajor);
					}
				}
			}());
		}

		$("#education").append(HTMLonlineClasses);

		for(school in education.onlineCourses) {
			(function () {
				$("#education").append(HTMLschoolStart);

				formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
				//$(".education-entry:last").append(formattedName);

				formattedDegree = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
				//$(".education-entry:last").append(formattedDegree);

				formatedNameDegree = formattedName + formattedDegree;
				$(".education-entry:last").append(formatedNameDegree);

				formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
				$(".education-entry:last").append(formattedDates);

				formattedLocation = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
				$(".education-entry:last").append(formattedLocation);
			}());
		}
	}
};


/********************
*****Map Section*****
*********************/

//Using Bracket Notation
bio["display"]();
work["display"]();

//Using Dot Notation
projects.display();
education.display();


/********************
*****Map Section*****
*********************/


$("#mapDiv").append(googleMap);
