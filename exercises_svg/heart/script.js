window.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');

    const likeUnlikePost = function() {
        if(heart.classList.contains('like')) {
            heart.classList.remove('like');
            heart.classList.add('unlike');
        } else {
            heart.classList.remove('unlike');
            heart.classList.add('like');
        }
    }

    heart.addEventListener('click', likeUnlikePost)
})
