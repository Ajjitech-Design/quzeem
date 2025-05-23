// MENU RESPONSIVENESS BAR FUNCTION

let menuicon =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href"=' + id + ']').classList.add('active')
            })
        }
    })
}

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// EMAIL SENDING SECTION
function emailSend(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "anabelrose229@gmail.com",
        Password : "A14391F382FA2C59DEBE8CD9D2CAB8F4E827",
        To : 'asorirejibola52@gmail.com',
        From : "anabelrose229@gmail.com",
        Subject : "New Content Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert('THANKS WE WILL GET BACK SHORTLY')
    );
}

// function sendMail(){
//     let parms = {
//         name : document.getElementById('name').value,
//         email : document.getElementById('email').value,
//         number : document.getElementById('number').value,
//         subject : document.getElementById('subject').value,
//         message : document.getElementById('message').value,
//     }

//     emailjs.send('service_hbca5z8','template_744jcmd',parms).then(alert('Email Sent!!'))
// }

// BACK TO TOP FUNCTIONING SECTION 

var btt=document.getElementById('back-to-top'),
    body=document.body,
    docElem=document.documentElement,
    offset=100,
    scrollpas,docHeight;


    docHeight=Math.max(body.scrollHeight,body.offsetHeight,docElem.scrollHeight,docElem.clientHeight,docElem.offsetHeight);
    if (docHeight !='undefined'){
        offset=docHeight / 2;
    }

    window.addEventListener('scroll', function(event){
        scrollpas=body.scrollTop || docElem.scrollTop;
        btt.className=(scrollpas > offset)?'visible':"";
    });