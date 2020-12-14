function displaySignUpForm() {
    document.getElementById("signInModal").style.display='none';
    document.getElementById("signUpModal").style.display='flex';
}

function displaySignInForm() {
    document.getElementById("signUpModal").style.display='none';
    document.getElementById("signInModal").style.display='flex';
}

function closeSignUpForm() {
    document.getElementById("signUpModal").style.display='none';
}

function closeSignInForm() {
    document.getElementById("signInModal").style.display='none';
}

function showCreatePostModal() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
      });
    myModal.show();
}

function showAllPosts() {
    location.href = "./html/postslist.html";
}


function signIn() {

}

function signUp() {

}