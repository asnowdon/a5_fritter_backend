/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllLikesOfUsername(fields) {
  fetch(`/api/likes?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewAllLikesOfFreetId(fields) {
  fetch(`/api/likes?freetId=${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createLike(fields) {
  fetch(`/api/likes/${fields.freetId}`, {method: 'POST'})
    .then(showResponse)
    .catch(showResponse);
}

function deleteLike(fields) {
  fetch(`/api/likes/${fields.freetId}`, {method: 'DELETE'})
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
