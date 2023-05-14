document.getElementById('btn').addEventListener
('click' , function(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value; height = height/100;
    let bmi = weight/(height*height)
    document.getElementById('num').innerHTML= bmi

    if(bmi < 18){
        document.getElementById('str').innerHTML = `لديك نحافه`
    }
    else if(bmi >= 18 && bmi <= 24.9){
        document.getElementById('str').innerHTML = `وزن مثالي`
    }
    else if(bmi >=25 && bmi <= 29.9){
        document.getElementById('str').innerHTML = `وزن زائد`
    }
    else if(bmi >=30 && bmi <= 34.9){
        document.getElementById('str').innerHTML = `ثمنه درجه اولي`
    }
    else if(bmi >=35 && bmi <= 39.9){
        document.getElementById('str').innerHTML = `ثمنه درجه ثانيه`
    }
    else if(bmi >=40){
        document.getElementById('str').innerHTML = `ثمنه خطيره`
    }
})
document.getElementById('btn2').addEventListener
('click' , function(){
    document.getElementById('weight').value= ''
    document.getElementById('height').value= ''
    document.getElementById('str').innerHTML= ''
    document.getElementById('num').innerHTML= ''

})