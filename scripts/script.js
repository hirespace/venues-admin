$(document).on('click', '[data-role=add-new-user]', function (e) {
    e.preventDefault();
    $('[data-role=new-user-type]').show();
});

$(document).on('click', '[data-role=existing-radio]', function (e) {
    $('[data-role=new-user-inputs]').show();
    if ($(this).attr('data-value') === "existing") {
        $('[data-role=new-user-inputs] input').hide();
        $('[data-role=email-input]').show();
    }
    else {
        $('[data-role=new-user-inputs] input').show();
    }
});