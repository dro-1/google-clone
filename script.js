let links = document.querySelectorAll('.left li a')

for(let i = 1; i < links.length;i++){
    links[i].addEventListener('click', e =>{
        if(e.target.hasChildNodes()){
            try{
                document.querySelector('.active').classList.remove('active')
            }catch(err){}
            e.target.classList.add('active')
            console.log(e.target)
        }
    })
}