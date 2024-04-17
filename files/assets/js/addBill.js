let imgView = document.getElementById("img-view");
let uploadBillInput = document.getElementById("upload-bill");
let dragArea = document.getElementById("drag-area");

let viewImg = () => {
    if(uploadBillInput.files[0] && uploadBillInput.files[0].type !== "application/pdf"){
        console.log(uploadBillInput.files[0])
        let imgLink = URL.createObjectURL(uploadBillInput.files[0]);
        imgView.style.backgroundImage = `url(${imgLink})`;
        imgView.textContent = ""
    }else if(uploadBillInput.files[0].type === "application/pdf"){
        console.log(uploadBillInput.files[0])
        imgView.style.backgroundImage = "";
        imgView.textContent = uploadBillInput.files[0].name
    }else{
        imgView.style.backgroundImage = "";
        imgView.innerHTML = `
            <h5 style="color: #666;">اسحب الملفات هنا</h5>
            <span style="color: #999;">أو</span>
            <h5 style="color: #666;">اضغط لرفع المرفقات</h5>
        `
    }
}

uploadBillInput.addEventListener("change", viewImg)
dragArea.addEventListener("dragover",(e) => {
    e.preventDefault();
})
dragArea.addEventListener("drop",(e) => {
    e.preventDefault();
    uploadBillInput.files = e.dataTransfer.files;
    viewImg();
})