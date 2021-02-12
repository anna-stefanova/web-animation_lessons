(function () {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {
        if (btn.classList.contains('btn-active')) {
            btn.classList.remove('btn-active');
        } else btn.classList.add('btn-active');

    });

}());