let snake=document.querySelector(".snake");
let snakeparent=document.querySelector(".snakeparent");
let food=document.querySelector(".food");
let board=document.querySelector(".board");
snakeparent.children[0].style.backgroundColor="darkred";
let gameover=document.querySelector(".gameover");
gameover.style.display="none";
let score=document.querySelector(".score");
let score2=0;
score.textContent="Score:0";

// -------For My Test-------
let snakesize;
let x;
let y;
let u,d,r,l;
let speed=10;
let maxleft=parseFloat(window.getComputedStyle(snake,null).getPropertyValue("right"));
let maxbottom=parseFloat(window.getComputedStyle(snake,null).getPropertyValue("top"));
function large()
{
    let a=1;
    let index=0;
    setInterval(() => {
for(let i=snakeparent.childElementCount-a;i>=0;i--)
{
    let x,y;
    if(i==0)
    {

    }
    else
    {
        x=snakeparent.children[i-1].style.left;
        y=snakeparent.children[i-1].style.bottom;
        snakeparent.children[i].style.left=x;
        snakeparent.children[i].style.bottom=y;
    }
   
}
    }, speed*10);
  
}
large();
function colide()
{
    setInterval(() => {
        let bottom=parseFloat(window.getComputedStyle(snake,null).getPropertyValue("bottom"));
        let left=parseFloat(window.getComputedStyle(snake,null).getPropertyValue("left"));
        function wall()
        {
        if(left>maxleft)
        {
            gameover.style.display="block";
            snakeparent.remove();
        }
        if(bottom>maxbottom)
        {
            gameover.style.display="block";
            snakeparent.remove();
        }
        if(bottom<0)
        {
            gameover.style.display="block";
            snakeparent.remove();
        }
        if(left<0)
        {
            gameover.style.display="block";
            snakeparent.remove();
        }
    }
    wall();
    function foodcheck()
    {
        let [bottom,left,foodx,foody]=[parseInt(window.getComputedStyle(snake,null).getPropertyValue("bottom")),
        parseInt(window.getComputedStyle(snake,null).getPropertyValue("left")),parseInt(window.getComputedStyle(food,null).getPropertyValue("left")),parseInt(window.getComputedStyle(food,null).getPropertyValue("bottom"))];
        let [diffx,diffy]=[Math.round(left-foodx),Math.round(foody-bottom)];
        if(diffx<10 && diffy<10 && diffx>=-10 &&diffy>=-10)
        {
           console.log(snakeparent.childElementCount)
            let x=Math.floor((Math.random()*maxleft));
            let y=Math.floor((Math.random()*maxbottom));
            console.log(x,y);
            food.style.left=x;
            food.style.bottom=y;
            let element=document.createElement("div");
            element.classList.add("snake");
            snakeparent.appendChild(element);
            score2+=1;
            score.textContent=`Score: ${score2}`;

        }
        }

    
    foodcheck();
       
    }, 0);
}
colide();
function update(button)
{
   
function clear()
{
    clearInterval(u);
    clearInterval(d);
    clearInterval(r);
    clearInterval(l);
}
function getxy()
{
    x=parseFloat(window.getComputedStyle(snake,null).getPropertyValue("left"));
    y=parseFloat(window.getComputedStyle(snake,null).getPropertyValue("bottom"));
}
clear();
    if(button=="ArrowUp")
    {
        u=setInterval(() => {
            getxy();
            snake.style.bottom=`${y+1}px`;
        }, speed);
    }
    else if(button=="ArrowDown")
    {
        d=setInterval(() => {
            getxy();
            snake.style.bottom=`${y-1}px`;
        }, speed);
        
    }
    else if(button=="ArrowRight")
    {
        r=setInterval(() => {
            getxy();
            snake.style.left=`${x+1}px`;
        }, speed);
        
    }
    else if(button=="ArrowLeft")
    {
        l=setInterval(() => {
            getxy();
            snake.style.left=`${x-1}px`;
        }, speed);
    }
}
document.addEventListener("keydown",(button)=>
{
    update(button.key);
});
gameover.addEventListener("click",()=>
{
    window.location.reload();
})
