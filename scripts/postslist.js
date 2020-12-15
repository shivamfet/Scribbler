var x;
var y;
var deleteModal;
function showDeleteModal(elem) {
    x = elem.parentElement.parentElement.parentElement.parentElement.parentElement;
    y = elem.parentElement.parentElement.parentElement.parentElement
    console.log(x);
    console.log(y);
    deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'), {
        keyboard: false
    });
    deleteModal.show();
}

function deletePost(btn) {
    var modal = document.getElementById('deleteModal');
    if (btn.textContent == 'Yes') {
        x.removeChild(y);
        console.log(modal);
        modal.style.display = 'none';
        console.log(document.getElementsByClassName('modal-backdrop'));
        
    } else {
        modal.style.display = 'none';
    }
    document.getElementsByClassName('modal-backdrop')[0].remove();

}

function showPost() {
    location.href = "../html/post.html";
}