window.onload=()=>{
    const offsetSkill=document.querySelector("#skills").offsetHeight
    window.onscroll=()=>{
        if(window.scrollY>offsetSkill)
            startSkillAnimation()
    }
}

function startSkillAnimation(){
    const spans=document.querySelectorAll("#skills .skill")
    spans.forEach(s=>{
        s.querySelector(".percent").style.width="100%"
        s.querySelector(".percent").style.background="red"
    })
}