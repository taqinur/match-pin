function generatePin(){
    return 1000+Math.round(Math.random()*9000);
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = generatePin();
    document.getElementById('display-pin').value = pin;
})

document.getElementById('buttons').addEventListener('click',function(event){
    const typedNumber = document.getElementById('typed-numbers');
    const prevTypedNumber = typedNumber.value;
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumber.value = '';
        }
        else if(number === "<"){
            const deleteLastDigit = prevTypedNumber.split('');
            deleteLastDigit.pop();
            const remainingDigits = deleteLastDigit.join('');
            typedNumber.value = remainingDigits;
        }
    }
    else{
        const prevTypedNumber = typedNumber.value;
        const newTypedNumber = prevTypedNumber + number;
        typedNumber.value = newTypedNumber; 
    }
})

document.getElementById('btn-verify').addEventListener('click', function(){
    const currentPin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    
    const pinSuccessMsg = document.getElementById('pin-success');
    const pinWrongMsg = document.getElementById('pin-wrong');
    if( typedNumber === currentPin){
        pinSuccessMsg.style.display = 'block';
        pinWrongMsg.style.display = 'none';
    }
    else{
        pinWrongMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
})