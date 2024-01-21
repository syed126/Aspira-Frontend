//Toggle button script
var el = document.getElementById("wrapper")
var toggleButton = document.getElementById("menu-bar")

toggleButton.onclick = function () {
    el.classList.toggle("toggled")
}
$(".profile-page").click(function () {
    $(".dropdown-content").slideToggle();
})
//End toggle script

var gp = document.querySelector(".add-certificate-img")
var mp = document.querySelector(".add-certificate-content")
gp.addEventListener('change', function (event) {
      if (event.target.files.length > 0) {
  var src = URL.createObjectURL(event.target.files[0]);
    var previewc = document.querySelector(".imgese");
         previewc.style.display = "block";
   previewc.src = src;
 mp.style.display = "none";
   }
})

var uploaderBtn = document.querySelector(".upload-img")
 var uploadername = document.querySelector(".upload-content")
 uploaderBtn.addEventListener('change', function (event) {
       if (event.target.files.length > 0) {
   var src = URL.createObjectURL(event.target.files[0]);
     var preview = document.querySelector(".img");
          preview.style.display = "block";
    preview.src = src;
   uploadername.style.display = "none";
    }
 })

 var ul = document.querySelector(".edit-upload-img")
 var un = document.querySelector(".edit-upload-content")
 ul.addEventListener('change', function (event) {
       if (event.target.files.length > 0) {
   var src = URL.createObjectURL(event.target.files[0]);
     var previews = document.querySelector(".imge");
          previews.style.display = "block";
    previews.src = src;
  un.style.display = "none";
    }
 })
