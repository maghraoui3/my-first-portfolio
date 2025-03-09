document
.querySelector(".big-container")
.addEventListener("scroll", function () {
  var top = this.scrollTop;
  var bottom = top + this.offsetHeight;
  var arr = [];

  this.querySelectorAll("section").forEach(function (section) {
    if (
      (section.offsetTop < top &&
        top < section.offsetTop + section.offsetHeight) ||
      (section.offsetTop < bottom &&
        bottom < section.offsetTop + section.offsetHeight)
    ) {
      arr.push(section.id);
    }
  });
  document.getElementById("status").innerHTML = arr.join(",")
});
