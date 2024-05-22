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
    handelMenuBarButton()
    changeRoleCharacters()
}

function startSkillAnimation(){
    const spans=document.querySelectorAll("#skills .skill")
    spans.forEach(s=>{
        s.classList.add('fill')
    })
}

function selectItemFromMenu(){
    const menu=document.querySelector('#main-menu ul')   
    selectedItem.classList.add('selected')
    menu.childNodes.forEach(item=>{
        item.addEventListener('click',()=>{
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


function handelMenuBarButton() {
    const menu=document.querySelector('#main-menu ul')
    const bar=document.querySelector('#btnBarMenu')
    bar.addEventListener('click',()=>{
        menu.classList.toggle('show')
    })

    //close the menu when select item
    menu.childNodes.forEach((c)=>{
        c.addEventListener('click',()=>{
            menu.classList.remove('show')
        })
    })
}

function changeRoleCharacters(){
    const roleElem=document.querySelector('#home .role')
    const roles=['Full Stack','Mern Stack','Frontend','Backend']
    let role;
    let roleKey=0
    chooseRole=()=>{
        if(roleKey==roles.length-1)
        roleKey=0
        return roles[roleKey++]
    }
    role=chooseRole()
    let len=role.length;
    let isRemoving=true;
    setInterval(() => {
        if(len==0)
       {
        role=chooseRole()
        isRemoving=false
       }
       if(len==role.length)
       {
        isRemoving=true
       }

       if(isRemoving)
        len--
        if(!isRemoving)
        len++

        const res=role.slice(0,len)
        roleElem.textContent=res
    }, 200);
}