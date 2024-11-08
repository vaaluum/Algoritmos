function toggleOpen(box) {
    if (box.classList.contains('open')) {
        box.classList.remove('open');
    } else {
        document.querySelectorAll('.box').forEach(b => b.classList.remove('open'));
        box.classList.add('open');
    }
}
