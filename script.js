
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
      if(inpElement === inp_cgpa){
        opElement.textContent = "CGPA  :-   " + inpElement.value;
        value =  "CGPA  :-   " + inp.value;
        localStorage(key, value);
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



