
new_resume = document.getElementById("NEW-RESUME");
new_resume.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
    
   

})



function display(inpElement, opElement, key) {
    if (!inpElement || !opElement) return; 
    inp_phone = document.getElementById("input-phone")
    
       if(inpElement == inp_phone){
        
        opElement.innerText = "Phone: +91 " + inpElement.value;
        value = "Phone: +91 " +  inpElement.value;
        localStorage.setItem(key, value);
        return; 
    }
   inp_collage = document.getElementById("input-collage")
    if( inp_collage == inpElement){
       opElement.textContent = inp_collage.value;
        text = inpElement.value
        localStorage.setItem(key, text)
        return;
    }


     inp_cgpa = document.getElementById("input-cgpa");
      if(inpElement == inp_cgpa){
        opElement.textContent = "CGPA  :-   " + inpElement.value;
        value =  "CGPA  :-   " + inp.value;
        
        localStorage.setItem(key, value);
        return;
    }

    const inputString = inpElement.value.trim(); 
    
    if (inputString.length === 0) { 
        opElement.textContent = ""; 
        return;
    }

    const capitalizedString = inputString[0].toUpperCase() + inputString.slice(1).toLowerCase();

    opElement.textContent = capitalizedString;
    localStorage.setItem(key, capitalizedString);
}

function reload(key, place){
    window.addEventListener('load', ()=> {
        const intro = document.getElementById(place);
      const  value = localStorage.getItem(key);
        intro.innerText= value;
        
    })

}



document.getElementById("input-name").addEventListener('input', () => {
    
    const key = "name"
    display(
        document.getElementById("input-name"), 
        document.getElementById("intro-name"),
        key
        
    );
});

reload("name", "intro-name")


inp_profile = document.getElementById("input-profile")
inp_profile.addEventListener("input", ()=>{
    const key = "profile"
    display(
        document.getElementById("input-profile"), 
        document.getElementById("intro-profile"),
        key
    );
})

reload("profile", "intro-profile")

inp_linkedin = document.getElementById("input-linkedin")
inp_linkedin.addEventListener("input", ()=>{
    const key = "linkedin"
    display(
        document.getElementById("input-linkedin"), 
        document.getElementById("intro-linkedin"),
        key
    );
})

reload("linkedin", "intro-linkedin")

inp_email = document.getElementById("input-email")
inp_email.addEventListener("input", ()=>{
    const key = "email"
    display(
        document.getElementById("input-email"), 
        document.getElementById("intro-email"),
        key
    );
    
})

reload("email", "intro-email")

inp_phone = document.getElementById("input-phone")
inp_phone.addEventListener("input", ()=>{
    const key = "phone"
    display(
        document.getElementById("input-phone"), 
        document.getElementById("intro-phone"),
        key
    );
    
})
reload("phone", "intro-phone")

inp_address = document.getElementById("input-address")
inp_address.addEventListener("input", ()=>{
    const key = "address"
    display(
        document.getElementById("input-address"), 
        document.getElementById("intro-address"),
        key
    );
})

reload("address", "intro-address")

inp_collage_name = document.getElementById("input-collage")
inp_collage_name.addEventListener("input", ()=>{
    const key = "collage"
    display(
        document.getElementById("input-collage"), 
        document.getElementById("intro-collage"),
        key
    );
})

reload("collage", "intro-collage")

 let inp_collage_address = document.getElementById("input-collage_address")
     inp_collage_address.addEventListener("input", ()=>{
        const key = "collage_address"
        display(
            document.getElementById("input-collage_address"), 
            document.getElementById("intro-collage_address"),
            key
        );
})

reload("collage_address", "intro-collage_address")

let inp_course = document.getElementById("input-course")
inp_course.addEventListener("input", ()=>{
    const key = "course"
    display(
        document.getElementById("input-course"), 
        document.getElementById("intro-course"),
        key
    );
})

reload("course", "intro-course")


let inp_cgpa = document.getElementById("input-cgpa")
inp_cgpa.addEventListener("input", ()=>{
    const key = "cgpa"
    display(
        document.getElementById("input-cgpa"), 
        document.getElementById("intro-cgpa"),
        key
    );
})

reload("cgpa", "intro-cgpa");



document.getElementById("NEW-RESUME").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});

function display(inputElement, outputElement, key) {
    if (!inputElement || !outputElement) return;
    
    let value = inputElement.value.trim();
    if (value.length === 0) {
        outputElement.textContent = "";
        return;
    }
    
    if (inputElement.type === "number") {
        value = `Phone: +91 ${value}`;
    } else if (inputElement.id === "input-cgpa") {
        value = `CGPA :- ${value}`;
    } else {
        value = value[0].toUpperCase() + value.slice(1).toLowerCase();
    }
   
    
    outputElement.textContent = value;
    localStorage.setItem(key, value);
}

function reload(key, elementId) {
    window.addEventListener("load", () => {
        const outputElement = document.getElementById(elementId);
        const storedValue = localStorage.getItem(key);
        if (storedValue) outputElement.textContent = storedValue;
    });
}

const inputFields = [
    { input: "input-name", output: "intro-name", key: "name" },
    { input: "input-profile", output: "intro-profile", key: "profile" },
    { input: "input-linkedin", output: "intro-linkedin", key: "linkedin" },
    { input: "input-email", output: "intro-email", key: "email" },
    { input: "input-phone", output: "intro-phone", key: "phone" },
    { input: "input-address", output: "intro-address", key: "address" },
    { input: "input-collage", output: "intro-collage", key: "collage" },
    { input: "input-collage_address", output: "intro-collage_address", key: "collage_address" },
    { input: "input-course", output: "intro-course", key: "course" },
    { input: "input-cgpa", output: "intro-cgpa", key: "cgpa" },
    { input: "input-skill1", output: "intro-skill1", key: "skill1" },
    { input: "input-skill2", output: "intro-skill2", key: "skill2" },
    { input: "input-skill3", output: "intro-skill3", key: "skill3" },
    { input: "input-project1", output: "intro-project1", key: "project1" },
    { input: "input-project2", output: "intro-project2", key: "project2" },
    { input: "input-project3", output: "intro-project3", key: "project3" },
    { input: "input-profile1", output: "intro-profile1", key: "profile1" },
    { input: "input-profile2", output: "intro-profile2", key: "profile2" },
    { input: "input-profile3", output: "intro-profile3", key: "profile3" },
    { input: "input-accomplishment1", output: "intro-accomplishment1", key: "accomplishment1" },
    { input: "input-accomplishment2", output: "intro-accomplishment2", key: "accomplishment2" },
    { input: "input-accomplishment3", output: "intro-accomplishment3", key: "accomplishment3" },
    { input: "input-job1", output: "intro-job1", key: "job1" },
    { input: "input-job2", output: "intro-job2", key: "job2" },
    { input: "input-job3", output: "intro-job3", key: "job3" }
];

inputFields.forEach(({ input, output, key }) => {
    const inputElement = document.getElementById(input);
    const outputElement = document.getElementById(output);
    if (inputElement) {
        inputElement.addEventListener("input", () => display(inputElement, outputElement, key));
    }
    reload(key, output);
});

// PDF Download

document.getElementById("download").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    html2canvas(document.getElementById("resume-content")).then(canvas => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("resume.pdf");
    });
});

