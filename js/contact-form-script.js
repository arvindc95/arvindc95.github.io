$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();
    try {
        writeToFile("name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message)
        formSuccess()
    } catch (e) {
        // console.log(e)
        formError()
    }

}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);

}

function writeToFile(msg) {
    // console.log(msg)
    var data = new FormData();
    data.append("data" , msg);
    var xhr = new XMLHttpRequest();
    xhr.open( 'post', '../save.php', true );
    xhr.send(data);
    // console.log(xhr.getResponseHeader(data))
}
