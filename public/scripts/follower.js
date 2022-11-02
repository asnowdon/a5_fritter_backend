/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */
function viewAllFollowers(fields) {
  fetch('/api/followers')
    .then(showResponse)
    .catch(showResponse);
}

function viewAllFollowersOfUsername(fields) {
  fetch(`/api/followers?username=${fields.username}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewOneFollowerOfUserId(fields) {
  fetch(`/api/followers?userId=${fields.userId}&followersUserId=${fields.followersUserId}`)
    .then(showResponse)
    .catch(showResponse);
}

function createFollower(fields) {
  fetch(`/api/followers?username=${fields.username}`, {method: 'POST'})
    .then(showResponse)
    .catch(showResponse);
}

function deleteFollower(fields) {
  fetch(`/api/followers/${fields.id}`, {method: 'DELETE'})
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
