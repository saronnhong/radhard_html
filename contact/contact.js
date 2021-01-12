// $(document).on("click", ".emailSubmitBtn", function() {
//     alert("button has been pushed!");
//     fetch("/send-email", {
//         method: 'POST',
//         body: JSON.stringify({
//             email: {
//                 recipient: 'the.radhard@gmail.com',
//                 sender: 'chich20x6@gmail.com',
//                 from: 'me',
//                 phone: '1234',
//                 subject: 'test',
//                 text: 'hello',
//                 confirmMsg: 'yes'
//             }
//         }),
//         headers: { "Content-Type": "application/json" }
//     })
//         .then(res => {
//             // if (res) {
//             //     const { email } = this.state;
//             //     this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", phone: "", subject: "", text: "" } })
//             // } else {
//             //     alert("email was not sent!");
//             // }
//             console.log(res);
//         })
// })

$("#emailSubmit").on("click", function () {
    console.log("email has been sent")
    fetch("https://radhard.herokuapp.com/send-email", {
        method: 'POST',
        body: JSON.stringify({
            email: {
                recipient: 'saronnhong@gmail.com',
                sender: 'chich20x6@gmail.com',
                from: 'me',
                phone: '1234',
                subject: 'test',
                text: 'this time its from radhard backend',
                confirmMsg: 'yes'
            }
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => {
            // if (res) {
            //     const { email } = this.state;
            //     this.setState({ email: { ...email, confirmMsg: "Email sent.", from: "", phone: "", subject: "", text: "" } })
            // } else {
            //     alert("email was not sent!");
            // }
            console.log(res);
            alert("done");
        })
})