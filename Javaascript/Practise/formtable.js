const loginButton = document.getElementById('login');




loginButton.addEventListener('click', function () {

    const userNameElement = document.getElementById('fname')
    const isValidUserName = validateUsername(userNameElement.value)
    const userNamelastElement = document.getElementById('fname')
    const isValidUserlastName = validateUsername(userNameElement.value)
    if (isValidUserName && isValidUserlastName ) {
        alert('Form is valid')
    }
})


function validateUsername(userName) {
    if (userName) {
        if (userName.search(/[^a-zA-Z]+/) === -1) {
            document.getElementById('invalidUsername').style.display = 'none'
            document.getElementById('emptyUsername').style.display = 'none'
            return true
        } else {
            document.getElementById('invalidUsername').style.display = 'block'
            document.getElementById('emptyUsername').style.display = 'none'
        }
    }else {
        document.getElementById('emptyUsername').style.display = 'block'
        document.getElementById('invalidUsername').style.display = 'none'
    }
    return false
}
function validateUsername(userName) {
    if (userName) {
        if (userName.search(/[^a-zA-Z]+/) === -1) {
            document.getElementById('invalidUsername').style.display = 'none'
            document.getElementById('emptyUsername').style.display = 'none'
            return true
        } else {
            document.getElementById('invalidUsername').style.display = 'block'
            document.getElementById('emptyUsername').style.display = 'none'
        }
    }else {
        document.getElementById('emptyUsername').style.display = 'block'
        document.getElementById('invalidUsername').style.display = 'none'
    }
    return false
}


 