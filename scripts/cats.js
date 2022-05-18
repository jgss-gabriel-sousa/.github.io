export async function addCats(){
    const catsElem = document.querySelectorAll(".cat");

    for(const element of catsElem){
        element.src = await getCat();
    }
}

async function getCat(){
    const res = await fetch("http://aws.random.cat/meow");
    const img = await res.json();
    
    return img.file;
}