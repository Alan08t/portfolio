const btn = {

//////////////////////////////////////////////////////////

/////////////////////////BUTTONS//////////////////////////

//////////////////////////////////////////////////////////

    button: document.querySelectorAll('.button'),
    add: document.querySelector('.right-button-add'),
    rest: document.querySelector('.right-button-rest'),
    divide: document.querySelector('.right-button-divide'),
    multiple: document.querySelector('.right-button-multiple'),
    number: document.querySelectorAll('.number'),
    screenDigits: document.querySelector('.screen-digit'),
    equalButton: document.querySelector('.right-button-equal'),
    cButton: document.querySelector('.first-b-button-span')
}


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const values = {


    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////

    /////////////////// VARIABLES/////////////////////////////

    //////////////////////////////////////////////////////////

    eTextContent: '',
    total: 0,
    screenNumber: "hello",
    history: [],
    waiting: true
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////



////////////////INIT SCREEN TEXTCONTENT TO '0'///////////

btn.screenDigits.textContent = values.screenNumber


//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////


////////////////////////////////////////////////////////

// DISPLAY NUMBERS ON SCREEN //

////////////////////////////////////////////////////////



btn.number.forEach(element => {
    element.addEventListener('click', () => {
        if (values.waiting) {
            console.log('buttons first if')
            values.eTextContent = element.textContent
            values.screenNumber = ''
            values.screenNumber += values.eTextContent
            btn.screenDigits.textContent = values.screenNumber

            if(btn.screenDigits.textContent[0] = '0'){
                console.log('button nested if')
                
                btn.screenDigits.textContent.replace(btn.screenDigits.textContent[0],'')
            }

            values.waiting = false
        }

        else if (!values.waiting) {
            
            console.log('buttons second if')
            values.eTextContent = element.textContent
            values.screenNumber += values.eTextContent
            btn.screenDigits.textContent = values.screenNumber

            if(btn.screenDigits.textContent[0] == '0'){
                console.log('nested if')
                btn.screenDigits.textContent = btn.screenDigits.textContent.replace(btn.screenDigits.textContent[0],'')
                console.log(btn.screenDigits.textContent[0])
            }
        }

        values.waiting = false





    })

});



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////

////////////////////////ADD BUTTON//////////////////////////

////////////////////////////////////////////////////////////



btn.add.addEventListener('click', () => {

    if (values.waiting){
        console.log('add button')
        values.history.unshift('+')
        return null
    }


    if (values.total == 0 || values.screenNumber == '') {
        console.log('add button second if')
        values.total = parseInt(values.screenNumber)
        values.screenNumber = ''
        values.eTextContent = ''
        values.history.unshift('+')
        return null
    }
    else {
        console.log('add button else')


        values.total += parseInt(values.screenNumber)
        values.screenNumber = '0'
        values.eTextContent = '0'
        btn.screenDigits.textContent = values.total
        values.history.unshift('+')
    }

    


    values.waiting = false
    console.log('add button waiting false')

})

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////




/////////////////////////////////////////////////////

// //////////////REST BUTTON /////////////////////////

/////////////////////////////////////////////////////



btn.rest.addEventListener('click', () => {


    if (values.waiting){
        console.log('rest button')

        values.history.unshift('-')
        return values.waiting = true
    }


    if (values.total == 0 || values.screenNumber == '') {
        values.total = parseInt(values.screenNumber)
        values.history.unshift('-')
        values.screenNumber = ''
        values.eTextContent = ''
        console.log('rest button second if')

        return null
        
    }
    else {
        console.log('rest button else')

        console.log("segundo if")
        console.log(values.screenNumber)
        values.screenNumber = parseInt(values.screenNumber)
        console.log(values.total)
        values.total -= values.screenNumber
        console.log(values.total)
        console.log(values.screenNumber)
        values.screenNumber = ''
        values.eTextContent = ''
        btn.screenDigits.textContent = values.total
        values.history.unshift('-')
    }

    values.waiting = true
    console.log('rest button waiting true')

})

//////////////////////////////////////////////////////
///////////////////////////////////////////////////////




////////////////////////////////////////////////////

//////////////////DIVIDE BUTTON//////////////////////

////////////////////////////////////////////////////


btn.divide.addEventListener('click', () => {

    if (values.waiting){
        console.log('divide button')
        values.history.unshift('/')
        return null
    }


    if (values.eTextContent == '') {
        console.log('divide button second if')

        values.history.unshift('/')
        return null
    }
    else {

        if(values.total == 0){
            console.log('divide button else')



            values.screenNumber = parseInt(values.screenNumber)
            console.log(values.screenNumber)
            values.total = values.screenNumber
            console.log(values.screenNumber)
            console.log(values.total)
            values.screenNumber = ''
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            values.history.unshift('/')
            values.waiting = true
        }

        else {
            values.screenNumber = parseInt(values.screenNumber)
            console.log(values.screenNumber)
            values.total /= values.screenNumber
            console.log(values.screenNumber)
            console.log(values.total)
            values.screenNumber = ''
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            values.history.unshift('/')
            values.waiting = true
        }
    }

    


    values.waiting = false
    console.log('divide button waiting false')

})


////////////////////////////////////////////////////
////////////////////////////////////////////////////



////////////////////////////////////////////////////

//////////////////MULTIPLE BUTTON//////////////////////

////////////////////////////////////////////////////


btn.multiple.addEventListener('click', () => {

    if (values.waiting){
        console.log('multiple button')
        values.history.unshift('*')
        return null
    }


    if (values.eTextContent == '') {
        console.log('multiple button second if')

        values.history.unshift('*')
        return null
    }
    else {

        if(values.total == 0){
            console.log('multiple button else')



            values.screenNumber = parseInt(values.screenNumber)
            console.log(values.screenNumber)
            values.total = values.screenNumber
            console.log(values.screenNumber)
            console.log(values.total)
            values.screenNumber = ''
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            values.history.unshift('*')
            values.waiting = true
        }

        else {
            values.screenNumber = parseInt(values.screenNumber)
            console.log(values.screenNumber)
            values.total *= values.screenNumber
            console.log(values.screenNumber)
            console.log(values.total)
            values.screenNumber = ''
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            values.history.unshift('*')
            values.waiting = true
        }
    }

    


    values.waiting = false
    console.log('multiple button waiting false')

})


////////////////////////////////////////////////////
////////////////////////////////////////////////////




///////////////////////////////////////////////////////

/////////////////EQUAL BUTTON /////////////////////////

//////////////////////////////////////////////////////



btn.equalButton.addEventListener('click', () => {
    console.log('equal button')

    if(!values.waiting){


    let value = values.history[0];
    console.log(values.history)
    console.log(value)


    switch (value) {
        
        case '+':
            console.log('equal button case 1')

            values.total += parseInt(values.screenNumber)
            values.screenNumber = '0'
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            console.log(values.history)
            break;

        
        case '-':
           if(!values.waiting)
           { console.log('equal button case 2')

            values.total -= parseInt(values.screenNumber)
            values.screenNumber = '0'
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            console.log(values.history)
            console.log('entro aqui')
            break;
            }

            else {
                return values.waiting = true
            }
            
        case '/':
            console.log('equal button case 3')

            values.total /= parseInt(values.screenNumber)
            values.screenNumber = '0'
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            console.log(values.history)
            console.log('entro aqui divide equal')
            break;

        case '*':
            console.log('equal button case 4')

            values.total *= parseInt(values.screenNumber)
            values.screenNumber = '0'
            values.eTextContent = ''
            btn.screenDigits.textContent = values.total
            console.log(values.history)
            console.log('entro aqui multiple equal')
            break;
    
    }}
    else {
        return null
    }
})

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////

///////////////// C BUTTON /////////////////////////////

///////////////////////////////////////////////////////

btn.cButton.addEventListener('click', () => {
    console.log('c button')

    values.total = 0
    values.eTextContent = '0'
    values.screenNumber = '0'
    values.history = []
    btn.screenDigits.textContent = '0'
})




///////////////////////////////////////////////////////

///////////////////// EFFECTS /////////////////////////

///////////////////////////////////////////////////////

btn.button.forEach(element => {
    element.addEventListener('mouseover', function () {
        element.classList.add('active')

})}


,
btn.button.forEach(element => {
    element.addEventListener('mouseleave', function () {
        element.classList.remove('active')

    })}
))

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////