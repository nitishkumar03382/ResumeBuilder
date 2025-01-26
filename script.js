// name_inp = 
function display(inp, op) {


   if(inp == inp_phone){
        op.innerText = "Phone: +91 " + inp.value; 
    }
    else if(inp == inp_cgpa){
        op.innerText = "CGPA  :-   " + inp.value; 
    }
    else
    op.innerHTML = inp.value
}
let inp_name = document.getElementById("input-name")



inp_name.addEventListener("input", ()=>{
    
    introName = document.getElementById("intro-name")
    display(inp_name, introName)
})

inp_profile = document.getElementById("input-profile")
inp_profile.addEventListener("input", ()=>{
    
    introProfile = document.getElementById("intro-profile")
    display(inp_profile, introProfile)
})

inp_linkedin = document.getElementById("input-linkedin")
inp_linkedin.addEventListener("input", ()=>{
    introLinkedin = document.getElementById("intro-linkedin")
    display(inp_linkedin, introLinkedin)
})

inp_email = document.getElementById("input-email")
inp_email.addEventListener("input", ()=>{
    introEmail = document.getElementById("intro-email")
    display(inp_email, introEmail)
})

inp_phone = document.getElementById("input-phone")
inp_phone.addEventListener("input", ()=>{
    introPhone = document.getElementById("intro-phone")
    display(inp_phone, introPhone)
})

inp_address = document.getElementById("input-address")
inp_address.addEventListener("input", ()=>{
    introAddress = document.getElementById("intro-address")
    display(inp_address, introAddress)
})

inp_collage_name = document.getElementById("input-collage")
inp_collage_name.addEventListener("input", ()=>{
    intro_collage_name = document.getElementById("intro-collage")
    display(inp_collage_name,intro_collage_name)
})

 let inp_collage_address = document.getElementById("input-collage_address")
     inp_collage_address.addEventListener("input", ()=>{
 let   intro_collage_address = document.getElementById("intro-collage_address")
    display(inp_collage_address,intro_collage_address)
})

let inp_course = document.getElementById("input-course")
inp_course.addEventListener("input", ()=>{
let   intro_course = document.getElementById("intro-course")
display(inp_course,intro_course)
})


let inp_cgpa = document.getElementById("input-cgpa")
inp_cgpa.addEventListener("input", ()=>{
  intro_cgpa = document.getElementById("intro-cgpa")
display(inp_cgpa,intro_cgpa)
})


document.getElementById('download').addEventListener('click', () => {
    const content = document.querySelector('.preview'); // Select the element with class "preview"

    // Download as PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    // pdf.html(content, {
    //     callback: function (doc) {
    //         doc.save('preview.pdf'); // Save the PDF
    //     },
    //     x: 10, // Left margin
    //     y: 10, // Top margin
    //     width: 190 // Content width for A4
    // });

    // Download as Image
const first_name = inp_name.value.split(' ');

    html2canvas(content).then((canvas) => {
        const link = document.createElement('a');

        link.download = `${first_name[0]} resume`; 
        link.href = canvas.toDataURL(); // Convert canvas to data URL
        link.click(); // Trigger the download
    });
});
