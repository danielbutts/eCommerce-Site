$("form").submit(function(e) {
    e.preventDefault();
    let valid = true;

    if (!validatePresence('#ship-firstname') &&
        !validatePresence('#ship-firstname') &&
        !validatePresence('#ship-lastname') &&
        !validatePresence('#ship-address1') &&
        !validatePresence('#bill-firstname') &&
        !validatePresence('#bill-lastname') &&
        !validatePresence('#bill-address1') &&
        !validatePresence('#ship-state') &&
        !validatePresence('#bill-state') &&
        !validateZIP('#ship-zipcode') &&
        !validateZIP('#bill-zipcode') &&
        !validateCardNumber('#card-number') &&
        !validateCardExp('#card-exp') &&
        !validateCardCVC('#card-cvc')) {
        valid = false;
        console.log("valid is false");
    } else {
        console.log("valid is true");
        valid = true;
    }


    if (valid) {
      $("#submit-success").fadeIn(300).delay(3000).fadeOut(300);
      $('.form-class-set').parent().removeClass("has-success").removeClass("has-error");
      $('form')[0].reset()
    } else {
      $("#submit-fail").fadeIn(300).delay(3000).fadeOut(300);
    }
});
///////////////////////////////////////////////////////////
////// FORM FIELD VARIABLES //////////////////////////////

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

///////////////////////////////////////////////////////////
//// FUNCTIONS -- FORM VALIDATION /////////////////////////

// FUNCTION -- Presence Validation
function validatePresence(id) {
    let input = $(id)
    if (input.val() == '') {
        input.parent().removeClass("has-success").addClass("has-error");
        return false;
    } else {
        input.parent().addClass("has-success").removeClass("has-error");
    }
    return true;
}
// FUNCTION -- ZIP Code Validation
function validateZIP(id) {
    let inputID = $(id)
    let inputTest = $(id).val()
    let isValid = /^\d{5}-?(\d{4})?$/.test(inputTest);
    if (!isValid) {
        inputID.parent().removeClass("has-success").addClass("has-error");
        return false;
    } else {
        inputID.parent().addClass("has-success").removeClass("has-error");
    }
    return true;
}

// FUNCTION -- Card Number Validation
function validateCardNumber(id) {
    let inputID = $(id)
    let inputTest = $(id).val()
    let isValid = /\d{4}-?\d{4}-?\d{4}-?\d{4}?$/.test(inputTest);
    if (!isValid) {
        inputID.parent().removeClass("has-success").addClass("has-error");
        return false;
    } else {
        inputID.parent().addClass("has-success").removeClass("has-error");
    }
    return true;
}

// FUNCTION -- Card Expiration Validation
function validateCardExp(id) {
    let inputID = $(id)
    let inputTest = $(id).val()
    let isValid = /^\d{2}\/?\d{2}?$/.test(inputTest);
    if (!isValid) {
        inputID.parent().removeClass("has-success").addClass("has-error");
        return false;
    } else {
        inputID.parent().addClass("has-success").removeClass("has-error");
    }
    return true;
}

// FUNCTION -- Card CVC Validation
function validateCardCVC(id) {
    let inputID = $(id)
    let inputTest = $(id).val()
    let isValid = /^\d{3}$/.test(inputTest);
    if (!isValid) {
        inputID.parent().removeClass("has-success").addClass("has-error");
        return false;
    } else {
        inputID.parent().addClass("has-success").removeClass("has-error");
    }
    return true;
}

///////////////////////////////////////////////////////////
//// VALIDATION -- CHECKS /////////////////////////////////

// First/Last Names & Address Can't Be Blank /////////////
//// Shipping
shipFirstName.blur(function() {
    validatePresence('#ship-firstname')
});

shipLastName.blur(function() {
    validatePresence('#ship-lastname')
});

shipAddress1.blur(function() {
    validatePresence('#ship-address1')
});
//// Billing
billFirstName.blur(function() {
    validatePresence('#bill-firstname')
});
billLastName.blur(function() {
    validatePresence('#bill-lastname')
});
billAddress1.blur(function() {
    validatePresence('#bill-address1')
});

// State Field Can't Be Blank /////////////////////////
//// Shipping
shipState.blur(function() {
    validatePresence('#ship-state')
});
//// Billing
billState.blur(function() {
    validatePresence('#bill-state')
});

// ZIP Code Field Validation
//// Shipping ZIP
shipZipCode.blur(function() {
    validateZIP('#ship-zipcode')
});

//// Billing ZIP
billZipCode.blur(function() {
    validateZIP('#bill-zipcode')
});

// Credit Card Fields

//// Card Number Validate
cardNumber.blur(function() {
    validateCardNumber('#card-number')
});

//// Card Expiration -- Format
cardExp.ready(function() {
    $("#card-exp").keyup(function(e) {
        if (e.keyCode != 8) {
            if ($(this).val().length == 2) {
                $(this).val($(this).val() + "/");
            }
        }
    });
});
//// Card Expiration Validate
cardExp.blur(function() {
  validateCardExp('#card-exp')
});

//// Card CVC Code Validate
cardCVC.blur(function() {
  validateCardCVC('#card-cvc')
});

///////////////////////////////////////////////////////////
//// COPY SHIPPING to BILLING /////////////////////////////////
$("#ship-bill").on("change", function() {
    if (this.checked) {
        billFirstName.val(shipFirstName.val())
        billLastName.val(shipLastName.val())
        billCompany.val(shipCompany.val())
        billAddress1.val(shipAddress1.val())
        billAddress2.val(shipAddress2.val())
        billState.val(shipState.val())
        billZipCode.val(shipZipCode.val())
    }
});
