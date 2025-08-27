///********** EVENT ***********///

add.addEventListener('click', function () {
    contactForm.classList.toggle('hide');
})

submitButton.addEventListener('click', function () {
    dataArray.push(recupdata());
    saveData();
});
creatList()



detail.addEventListener('click', function () {
    contactDetail.classList.toggle('hide');
    this.dataset.item()
    detailTitle()
    detailPara()
})

add.addEventListener('click', function () {
    contactForm.classList.toggle('hide');
})


del.addEventListener('click', function () {
    var sup = window.localStorage.removeItem('contact');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
})
