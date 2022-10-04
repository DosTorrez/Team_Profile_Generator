const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./team/engineer");
const Intern = require("./team/intern");
const Manager = require("./team/manager");
const { rejects } = require("assert");
const { resolve } = require("path");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}
function addMember() {
    inquirer.prompt([{
        message: "Enter team members name",
        name:"name",
    },
        {
            type: "list",
            message: "Assign team members role",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
            name: "role"
        },
        {
            message: "Enter team members id",
            name: "id"
        },
        {
            message: "Enter team members work email address",
            name: "email"
        


    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role == "Engineer") {
            roleInfo = "GitHub Username";
        } else if (role === "Intern") {
            roleInfo = "School Name"; 
        } else {
            roleInfo = "Office Phone Number";
        }
        inquirer.prompt([{
            message: 'Enter team members ${roleInfo}',
            name: "roleInfo"
        },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])
            .then(function({roleInfo, moreMembers}) {
                let newMember;
                if (role === "Engineer") {
                    newMember = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    newMember = new Intern(name, id, email, roleInfo);
                } else {
                    newMember = new Manager(name, id, email, roleInfo);
                }
                employees.push(newMember);
                addHtml(newMember)
                    .then(function() {
                        if (moreMembers === "yes") {
                            addMember();
                        } else {
                            finishHtml();
                        }
                    });
            });

    });
};
function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en"
    <head> 
        <meta charset="UTF-8"></meta>
        <meta name= "viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta http-equiv="X-UA-Compatible content=ie=edge"></meta>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
        <title>Team Profile</title>
    </head>

<body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
    </nav>
    <div class="container"></div>
        <div class="row"></div>; 

        fs.writeFile("../output/team.html", html, functionz(err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("start");

}
function addHtml (member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const GitHub = member.getEmail();
            data = '<div class="col-6">
            <h5 class="card-header">${name}<br></br>Intern</h5>
            <ul class="list-group-item list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>';
        } else {

        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}
function finishHtml(){
    const html = '</div>
    </div>
    
</body>

</html>`;

    fs.appendFile("./output/team.html", html, funtion (err) ,{
        if (err) {
            console.log(err);
        }
    });
    console.log("end");
}
initApp();