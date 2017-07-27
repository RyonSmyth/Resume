
var bio = {
	"name" : "Ryan Smith",
	"role" : "Web Developer",
	"contacts" : {
        "mobile" : "(619)729-6444",
        "email" : "ryans970@hotmail.com",
        "twitter" : "@ryonsmyth",
        "github" : "ryonsmyth",
        "location" : "Los Angeles",
    },
    "welcomeMessage" : "Experienced web developer specializing in front end web development and providing high quality results. ", 
    "skills" : ["HTML", "CSS", "Javascript", "Ruby on Rails", "jQuery", "Bootstrap", "Git", "SEO"],
    "biopic" : "images/ryan.png"

};

var education = {
	"schools" : [
		{   
      "name" : "Troy University",
      "location" : "Alabama",
      "degree" : "bachelors of science",
      "majors" : "Applied Computer Science",
      "dates" : "August 2015 - Present",
      "url" : "http://www.troy.edu/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Nanodegree",
      "school" : "Udacity",
      "location" : "California",
      "dates" : "July 2017 - Present",
      "url" : "https://www.udacity.com/"

    }

  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "CareerFoundry",
      "title" : "Full-Stack Web Development Instructor",
      "location" : "Germany",
      "dates" : "November 2015 - Present",
      "description" : "Delivered high-quality training to 15+ students to build a consumer web application. Employed my knowledge of the tech industry to provide information on best practices to students. Evaluated students code and assisted with problem-solving."
    }
  ]
};

var projects = {
  "project" : [
    {
      "title" : "Portfolio",
      "description" : "A portfolio website showcasing skills and expereince and built utilizing HTML, CSS, Javascript, jQuery, and Bootstrap. ",
      "images" : [
        "images/computer.jpg",
        "images/code.jpg"
      ],
      "url" : "https://www.udacity.com/"

    }
  ]
};


function dataReplace(oldString, newData) {
  var newString = oldString.replace("%data%", newData);

  return newString;

}
// Bio Section
bio.display = function() {
  bioName = dataReplace(HTMLheaderName, bio.name);
  bioRole = dataReplace(HTMLheaderRole, bio.role);
  $("#header").prepend(bioName, bioRole);

  contactMobile = dataReplace(HTMLmobile, bio.contacts.mobile);
  contactEmail = dataReplace(HTMLemail, bio.contacts.email);
  contactGithub = dataReplace(HTMLgithub, bio.contacts.github);
  contactLocation = dataReplace(HTMLlocation, bio.contacts.location);
  $("#header").append(contactMobile, contactEmail, contactGithub, contactLocation);

  bioPic = dataReplace(HTMLbioPic, bio.biopic);
  welcomeMsg = dataReplace(HTMLwelcomeMsg, bio.welcomeMessage);
  $("#header").append(bioPic, welcomeMsg);




  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; ++i){
      var formattedSkills = dataReplace(HTMLskills, bio.skills[i]);
      $("#skills").append(formattedSkills);

    }
  } else {
    console.log("No Skills");
  }
}
bio.display();

// Work Section

work.display = function() {

  for(var i = 0; i < work.jobs.length; ++i) {
    workEmployer = dataReplace(HTMLworkEmployer, work.jobs[i].employer);
    workTitle = dataReplace(HTMLworkTitle, work.jobs[i].title);
    workDates = dataReplace(HTMLworkDates, work.jobs[i].dates);
    workDescription = dataReplace(HTMLworkDescription, work.jobs[i].description);

    var workSection = workEmployer + workTitle + workDates + workDescription;

    workSection = dataReplace(HTMLworkStart, workSection);

    $("#workExperience").append(workSection);
  }
}
work.display();

// Project section

projects.display = function() {
  for(var i = 0; i < projects.project.length; ++i) {
    $("#projects").append(HTMLprojectStart);
    projectTitle = dataReplace(HTMLprojectTitle, projects.project[i].title);
    projectTitle = projectTitle.replace("#", projects.project[i].url);
    projectDescription = dataReplace(HTMLprojectDescription, projects.project[i].description);
    
    var projectSection = projectTitle + projectDescription;
    $(".project-entry").append(projectSection);

    for(var j = 0; j < projects.project[i].images.length; ++j) {
      projectImage = dataReplace(HTMLprojectImage, projects.project[i].images[j]);
      $(".project-entry").append(projectImage);

    }

  }
}

projects.display();

// Education section
education.display = function() {
  for(var i = 0; i < education.schools.length; ++i) {
    schoolName = dataReplace(HTMLschoolName, education.schools[i].name);
    schoolDegree = dataReplace(HTMLschoolDegree, education.schools[i].degree);
    schoolDates = dataReplace(HTMLschoolDates, education.schools[i].dates);
    schoolMajor = dataReplace(HTMLschoolMajor, education.schools[i].majors);

    var schoolSection = schoolName + schoolDegree + schoolDates + schoolMajor;
    schoolSection = dataReplace(HTMLschoolStart, schoolSection);
    $("#education").append(schoolSection);
  }

  $("#education").append(HTMLonlineClasses);

  for(var i = 0; i < education.onlineCourses.length; ++i) {
    courseTitle = dataReplace(HTMLonlineTitle, education.onlineCourses[i].title);
    courseSchool = dataReplace(HTMLonlineSchool, education.onlineCourses[i].school);
    courseDates = dataReplace(HTMLonlineDates, education.onlineCourses[i].dates);
    courseURL = dataReplace(HTMLonlineURL, education.onlineCourses[i].url);

    var courseSection = courseTitle + courseSchool + courseDates + courseURL;
    courseSection = dataReplace(HTMLschoolStart, courseSection);
    $("#education").append(courseSection);

  }
}

education.display();

// Map Section

$("#mapDiv").append(googleMap);





