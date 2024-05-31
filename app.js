
//One element using querySelector or querySelectorAll.
const headline = document.querySelector("#headline-body");
//Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
headline.innerHTML = '<h1 style ="text-align :center">HIBISCUS  SPICY CARRIBEAN<h1>';
//Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
headline.classList = 'flex-ctr';
headline.style.alignContent = 'center';

const wholePage = document.getElementById("main-page");



const menuLinks = [
    { text: 'About', href: '/about' },
    { text: 'Recipe', href: '/recipe' },
    {text: 'Contact Us' , href:'/contact'},
  ];

  const topMenuEl = document.getElementById("top-menu");
  console.log(topMenuEl);

  
  topMenuEl.classList = 'flex-around';
  topMenuEl.style.fontFamily = 'Calibri';
  topMenuEl.style.fontSize = '25px';
  topMenuEl.style.height = '100%';

  for( let i = 0; i < menuLinks.length; i++){
    const menuDoc = document.createElement('a');
    menuDoc.setAttribute('href',menuLinks[i]);
    menuDoc.textContent = menuLinks[i].text;
    topMenuEl.appendChild(menuDoc);
}

const recipeText = document.getElementsByClassName


console.log(headline);
console.log(wholePage);

const data =[
    {name:"Latin Beef Stew" , 
        description:'https://gypsyplate.com/puerto-rican-carne-guisada/#recipe-card'
    },
    {
        name: "Jamaican Curry Chicken",
        description:"https://gypsyplate.com/jamaican-curry-chicken/#recipe-card"
    },
    {
        name:"Ropa Vieja (Cuba National Dish)",
        description:"https://gypsyplate.com/ropa-vieja/#ropa-vieja"
    },
    {
        name:"Rasta Pasta",
        description:"https://gypsyplate.com/rasta-pasta/#recipe-card"
    },
    {
        name:"Bahamian Boiled Fish",
        description:"https://gypsyplate.com/bahamian-boiled-fish/#bahamian-boiled-fish"
    },
    {
        name:"Tostones",
        description:"https://gypsyplate.com/tostones/#recipe-card"
    }
]

const recipeEl = document.getElementById("recipes");

const images = document.querySelectorAll("img")
console.log(images)


for(let i = 0; i < data.length; i++){
    recipeEl.addEventListener("click", (event) => {
        if(event.target === images[i]){
            const divEl =  event.target.parentElement;
            images[i].style.transform = "rotateY(180deg)";
            setTimeout(()=> {
                event.target.parentElement.innerHTML = "";
                const h2El = document.createElement("h2");
                h2El.textContent = data[i].name;
                divEl.append(h2El)
                const pEl =  document.createElement("a");
                //pEl.textContent = data[i].description;
                pEl.setAttribute('href', data[i].description);
                divEl.append(pEl)
                divEl.style.background = "white";
            }, 2000)
            
        
    
        }
    })

}

       

const buttonEl = document.getElementById('button');
const buttonMessage = document.getElementById('message');

buttonEl.addEventListener('click', (event) => {
    if(buttonMessage.value.length < 5) {
        window.alert('Need to be more than 5 characters');
    }
})
















console.log(headline);