var myModal = document.getElementById('exampleModal');


$("#emailSubmit").on("click", function () {
    console.log("email has been sent")
    fetch("https://radhard.herokuapp.com/send-email", {
        method: 'POST',
        body: JSON.stringify({
            email: {
                recipient: 'the.radhard@gmail.com',
                sender: 'saronnhong@gmail.com',
                from: $("#emailInput").val(),
                phone: $("#phoneInput").val(),
                name: $("#nameInput").val(),
                text: $("#messageInput").val()
            }
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => {
            if (res) {
                var modal = new bootstrap.Modal(myModal)
                modal.show();
            } else {
                alert("Something went wrong. Email was not sent!");
            }
        })
})



