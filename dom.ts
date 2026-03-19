console.log("dom aceess")
// Select elements from DOM
const heading = document.querySelector("h1") as HTMLHeadingElement;
const button = document.querySelector("button") as HTMLButtonElement;
var anchoracess=document.querySelector('.hlo') as HTMLAnchorElement;
var anchors=document.querySelector('a');
console.log(anchors?.classList)
console.log(anchoracess.href)
// Check and update heading
if (heading) {
  heading.innerText = "Hello from TypeScript DOM!";
}

// Add event listener to button
if (button) {
  button.addEventListener("click", () => {
    if (heading) {
      heading.innerText = "Button Clicked!";
    }
  });
}