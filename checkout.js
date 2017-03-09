$("form").submit(function(e) {
    e.preventDefault();
    let valid = true;
    if (!validateName('#ship-firstname')) {
        valid = false;
    }
    if (!validateName('#ship-firstname')) {
        valid = false;
    }
    valid = validateName('#ship-lastname')

    if (valid) {

    }

    console.log(cardExp);
});

function validateName(id) {
    let input = $(id)
    if (input.val() == '') {
        input.parent().removeClass("has-success").addClass("has-error");
        return false;
    } else {
        input.parent().addClass("has-success").removeClass("has-error");
    }
    return true;
}

////// Form Field Variables ///////

// Variables: Shipping Form
let shipFirstName = $('#ship-firstname');
let shipLastName = $('#ship-lastname');
let shipCompany = $('#ship-company');
let shipAddress1 = $('#ship-address1');
let shipAddress2 = $('#ship-address2');
let shipState = $('#ship-state');
let shipZipCode = $('#ship-zipcode');
// Variables: Billing Form
let billFirstName = $('#bill-firstname');
let billLastName = $('#bill-lastname');
let billCompany = $('#bill-company');
let billAddress1 = $('#bill-address1');
let billAddress2 = $('#bill-address2');
let billState = $('#bill-state');
let billZipCode = $('#bill-zipcode');
// Variables: Credit Card Form
let cardNumber = $('#card-number');
let cardExp = $('#card-exp');
let cardCVC = $('#card-cvc');

//// FORM VALIDATION //////////////////////////////////////

// First/Last Names & Address Can't Be Blank /////////////
//// Shipping
shipFirstName.blur(function() {
    validateName('#ship-firstname')
});

shipLastName.blur(function() {
    validateName('#ship-lastname')
});

shipAddress1.blur(function() {
    console.log('blur');
    if (shipAddress1.val() === '') {
        shipAddress1.parent().removeClass("has-success").addClass("has-error");
    } else {
        shipAddress1.parent().addClass("has-success").removeClass("has-error");
    }
});
//// Billing
billFirstName.blur(function() {
    console.log('blur');
    if (billFirstName.val() === '') {
        billFirstName.parent().removeClass("has-success").addClass("has-error");
    } else {
        billFirstName.parent().addClass("has-success").removeClass("has-error");
    }
});
billLastName.blur(function() {
    console.log('blur');
    if (billLastName.val() === '') {
        billLastName.parent().removeClass("has-success").addClass("has-error");
    } else {
        billLastName.parent().addClass("has-success").removeClass("has-error");
    }
});
billAddress1.blur(function() {
    console.log('blur');
    if (billAddress1.val() === '') {
        billAddress1.parent().removeClass("has-success").addClass("has-error");
    } else {
        billAddress1.parent().addClass("has-success").removeClass("has-error");
    }
});

// State Field Can't Be Blank /////////////////////////
//// Shipping
shipState.blur(function() {
    console.log('blur');
    if (shipState.val() === '') {
        shipState.parent().removeClass("has-success").addClass("has-error");
    } else {
        shipState.parent().addClass("has-success").removeClass("has-error");
    }
});
//// Billing
billState.blur(function() {
    console.log('blur');
    if (billState.val() === '') {
        billState.parent().removeClass("has-success").addClass("has-error");
    } else {
        billState.parent().addClass("has-success").removeClass("has-error");
    }
});

// ZIP Code Field Can't Be Blank
//// Shipping
shipZipCode.blur(function() {
    console.log('blur');
    if (shipZipCode.val() === '') {
        shipZipCode.parent().removeClass("has-success").addClass("has-error");
    } else {
        shipZipCode.parent().addClass("has-success").removeClass("has-error");
    }
});
//// Billing
billZipCode.blur(function() {
    console.log('blur');
    if (billZipCode.val() === '') {
        billZipCode.parent().removeClass("has-success").addClass("has-error");
    } else {
        billZipCode.parent().addClass("has-success").removeClass("has-error");
    }
});

// Credit Card Fields Can't Be Blank
cardNumber.blur(function() {
    console.log('blur');
    if (cardNumber.val() === '') {
        cardNumber.parent().removeClass("has-success").addClass("has-error");
    } else {
        cardNumber.parent().addClass("has-success").removeClass("has-error");
    }
});
cardExp.blur(function() {
    console.log('blur');
    if (cardExp.val() === '') {
        cardExp.parent().removeClass("has-success").addClass("has-error");
    } else {
        cardExp.parent().addClass("has-success").removeClass("has-error");
    }
});
cardCVC.blur(function() {
    console.log('blur');
    if (cardCVC.val() === '') {
        cardCVC.parent().removeClass("has-success").addClass("has-error");
    } else {
        cardCVC.parent().addClass("has-success").removeClass("has-error");
    }
});
