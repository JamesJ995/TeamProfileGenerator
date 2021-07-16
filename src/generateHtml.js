function generateHtml(data) {
    data.forEach(employee => {
        renderCard(employee);
    });
return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <title>Team Profile</title>
</head>

<body>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <h1>Team Profile</h1>
    </header>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card py-3 mb-4 mx-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${data[0].name}</h5>
                        <h5 class="card-title">${data[0].role}</h5>
                        <p class="card-text">ID: ${data[0].id}</p>
                        <p class="card-text">Office Number: ${data[0].officeNumber}</p>
                        <p class="card-text">Email:
                            <a href="#" class="card-link">${data[0].email}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 mb-4 mx-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Name</h5>
                        <h5 class="card-title">Engineer</h5>
                        <p class="card-text">ID: </p>
                        <p class="card-text">GitHub:
                            <a href="#" class="card-link">username</a>
                        </p>
                        <p class="card-text">Email:
                            <a href="#" class="card-link">Email</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card py-3 mb-4 mx-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Name</h5>
                        <h5 class="card-title">Intern</h5>
                        <p class="card-text">ID: </p>
                        <p class="card-text">School: </p>
                        <p class="card-text">Email:
                            <a href="#" class="card-link">Email</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>
</html>
`
}

function renderCard(data) {
    switch(data.getRole()) {
        case "Engineer":
return `
<div class="col">
    <div class="card py-3 mb-4 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name</h5>
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">ID: </p>
            <p class="card-text">GitHub:
                <a href="#" class="card-link">username</a>
            </p>
            <p class="card-text">Email:
                <a href="#" class="card-link">Email</a>
            </p>
        </div>
    </div>
</div>
`
        case "Intern":
return `
<div class="col">
    <div class="card py-3 mb-4 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Name</h5>
            <h5 class="card-title">Intern</h5>
            <p class="card-text">ID: </p>
            <p class="card-text">School: </p>
            <p class="card-text">Email:
                <a href="#" class="card-link">Email</a>
            </p>
        </div>
    </div>
</div>
`
        default:
            break;
    }
}
module.exports = generateHtml;