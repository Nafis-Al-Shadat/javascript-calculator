const buttons = document.querySelectorAll('div:not(.output,.operator)');
for(const button of buttons){
    button.classList.add('text-2xl')
}
const operators = document.querySelectorAll('.operator');
for(const operator of operators){
    operator.classList.add('text-3xl')
}