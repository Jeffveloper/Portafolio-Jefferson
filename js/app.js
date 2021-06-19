const $form = document.getElementById('contact');
const $btnMailTo = document.getElementById('mailTo');

document.addEventListener('DOMContentLoaded', ()=>{
    $form.addEventListener('submit', handleSubmit)
});

function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(this);
    $btnMailTo.setAttribute('href', `mailto:pandresvaldiviacuzcano@gmail.com?subject=${form.get('name')} - ${form.get('mail')}&body=${form.get('message')}`)
    console.log(form.get('name'))
    $btnMailTo.click();
}