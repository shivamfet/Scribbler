function edit_save(elem) {
    var blogTitle = document.getElementById('blog_title');
    var blogContents = document.getElementById('blog_content');
    var editSaveButton = elem;

    console.log(editSaveButton.textContent);
    console.log(editSaveButton);
    if (editSaveButton.textContent == 'Edit ') {
        console.log(blogTitle);
        console.log(blogContents);
        console.log(editSaveButton);

        blogTitle.contentEditable = true;
        blogTitle.style.borderWidth = '1px';
        blogTitle.style.borderStyle = 'solid';
        blogTitle.style.borderColor = 'red';

        blogContents.contentEditable = true;
        blogContents.style.borderWidth = '1px';
        blogContents.style.borderStyle = 'solid';
        blogContents.style.borderColor = 'red';

        editSaveButton.innerHTML = 'Save <i class="fa fa-save"></i>';
    } else {
        blogTitle.contentEditable = false;
        blogTitle.style.borderWidth = '';
        blogTitle.style.borderStyle = '';
        blogTitle.style.borderColor = '';

        blogContents.contentEditable = false;
        blogContents.style.borderWidth = '';
        blogContents.style.borderStyle = '';
        blogContents.style.borderColor = '';

        editSaveButton.innerHTML = 'Edit <i class="fa fa-edit"></i>';
    }
}

var blogLikes = {
    "1" : 0 , 
    "2" : 0 , 
    "3" : 0 , 
    "4" : 0 , 
    "5" : 0 , 
    "6" : 0
};

function postLike(likeButton , blogId) {
    console.log(blogId);
    blogLikes[blogId]++;
    likeButton.innerHTML = ' Liked'
    var likes = document.getElementById('likes');
    likes.innerHTML = blogLikes[blogId] + ' person liked this!';
}

function postComment() {
    var commentText = document.getElementById('commentValue').value;
    if (commentText == '') {
        return;
    }
    var comments = document.getElementById('display_comments');
    var comment = document.createElement('div');
    comment.id = 'display_comment';
    comment.textContent = commentText;
    comments.prepend(comment);

    document.getElementById('commentValue').value = '';
}

function numOfLikes() {

}