const api="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";

const imp=document.getElementById('imp')
const images=document.querySelector('.images')

const getImage=async()=>{
    // console.log("clicc")
    const methods = {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":imp.value,
                "n":3,
                "size":"256x256",
            }
        )

    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    // parse the response as json
    const data=await res.json()
    console.log(data)
    const listimages=data.data;
    images.innerHTML=''
    listimages.map(photo=>{
        const containar=document.createElement("div")
        images.append(containar)
        const img =document.createElement("img")
        containar.append(img)
        img.src=photo.url
    })
}