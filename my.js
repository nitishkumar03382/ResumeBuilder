// name_inp = 
function display(inp, op) {
    op.innerHTML = inp.value
}
inp_name = document.getElementById("input-name")
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

