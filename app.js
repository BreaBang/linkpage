const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e){
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Coppied the link" + link)
    } catch (err) {
        console.error(err)
    }

}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))

const toggleThemeBtn = document.getElementById('toggleThemeBtn')

toggleThemeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('light');
    
})