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

function deletePost() {
    x.removeChild(y);
    var modal = document.getElementById('deleteModal');
    console.log(modal);
    modal.style.display = 'none';
    console.log(document.getElementsByClassName('modal-backdrop'));
   document.getElementsByClassName('modal-backdrop')[0].remove();
}