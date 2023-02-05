let selectedItem

window.onload=()=>{
    selectedItem=document.querySelector('#main-menu ul a') 
    const offsetSkill=document.querySelector("#skills").offsetHeight
    window.onscroll=()=>{
        if(window.scrollY>offsetSkill)
            startSkillAnimation()
            
    }

    selectItemFromMenu()
    handelArrowButton()
}

function startSkillAnimation(){
    const spans=document.querySelectorAll("#skills .skill")
    spans.forEach(s=>{
        s.classList.add('fill')
    })
}

function selectItemFromMenu(){
    const menu=document.querySelector('#main-menu ul')   
    debugger 
    selectedItem.classList.add('selected')
    menu.childNodes.forEach(item=>{
        item.addEventListener('click',()=>{
            debugger
            selectedItem.classList.remove('selected')
            item.classList.add('selected')
            selectedItem=item
        })
    })
}

function handelArrowButton(){
    document.querySelectorAll('.arrowsLink').forEach(arrow=>{
        arrow.addEventListener('click',()=>{
           const idContainer=arrow.getAttribute('href')
          const itemMenu=document.querySelector(`nav ul a[href='${idContainer}']`)
          selectedItem.classList.remove('selected')
          itemMenu.classList.add('selected')
          selectedItem=itemMenu
        })
    })
}