const selectElenent = (element) => document.querySelector(element);

selectElenent('.mobile-menu').addEventListener('click', () => {
    selectElenent('header').classList.toggle('active');
});
