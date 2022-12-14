/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllBestFreetOfUsername(fields) {
  fetch(`/api/bestFreets?username=${fields.userId}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewAllBestFreetsOfFreetId(fields) {
  fetch(`/api/bestFreets?freetId=${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createBestFreet(fields) {
  fetch(`/api/bestFreets/${fields.freetId}`, {method: 'POST'})
    .then(showResponse)
    .catch(showResponse);
}

function deleteBestFreet(fields) {
  fetch(`/api/bestFreets/${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

// function changeUsername(fields) {
//   fetch('/api/users', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
//     .then(showResponse)
//     .catch(showResponse);
// }

// function changePassword(fields) {
//   fetch('/api/users', {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
//     .then(showResponse)
//     .catch(showResponse);
// }

// function deleteUser(fields) {
//   fetch('/api/users', {method: 'DELETE'})
//     .then(showResponse)
//     .catch(showResponse);
// }

// function signIn(fields) {
//   fetch('/api/users/session', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
//     .then(showResponse)
//     .catch(showResponse);
// }

// function signOut() {
//   fetch('/api/users/session', {method: 'DELETE'})
//     .then(showResponse)
//     .catch(showResponse);
// }
