$(document).ready(function(){
    /* Depending on the value selected in the drop-down list,
       show the appropriate form and hide the others. */
    $('select#contact_select').change(function(){
        switch ($(this).val()) {
            case 'email':
                $('#email_opts').show();
                $('#phone_opts').hide();
                $('#sms_opts').hide();
                break;
            case 'phone':
                $('#email_opts').hide();
                $('#phone_opts').show();
                $('#sms_opts').hide();
                break;
            case 'sms':
                $('#email_opts').hide();
                $('#phone_opts').hide();
                $('#sms_opts').show();
                break;
            default:
                $('#email_opts').hide();
                $('#phone_opts').hide();
                $('#sms_opts').hide();
        }
    });
});