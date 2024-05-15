const container = document.querySelector('.container');
const ball3 = document.querySelector('.ball2');

const addblock = document.querySelector('.addblock')
var myobj = [];
var nxtballheight;
var balllength;
var index;

const tl = gsap.timeline();
gsap.registerPlugin(TextPlugin);
var base = [], newbase = [];
var k;
var currentPositionx;
var prevPositiony;
var prevPositionx;
var currentheight;

function myanimation(){

    var balls = document.querySelectorAll('.balls');
    balllength = balls.length
    index = balls.length - 1

    for (let i = 0; i<balllength+5; i++){

        var currentPositiony = gsap.getProperty(`.ball${i}`, "top");
    
    tl.to(`.ball${i}`, {y: container.clientHeight - (currentPositiony+50), stagger:3, duration:2, ease:'bounce', 
    onUpdate: function () {
      
        balls = document.querySelectorAll('.balls');
        balllength = balls.length;
        var randomNumber = Math.floor(Math.random() * i);
        k = randomNumber
        for (let x=k; x<i; x++){
            console.log(k)
            currentPositiony = gsap.getProperty(`.ball${i}`, "y");
            prevPositiony = (x<i) && gsap.getProperty(`.ball${x}`, "y");
            currentPositionx = gsap.getProperty(`.ball${i}`, "left");
            prevPositionx = (x<i) && gsap.getProperty(`.ball${x}`, "left");

        if ((currentPositionx===prevPositionx) && ((currentPositiony >= -50) && (currentPositiony < 60))){
            newbase[i] = prevPositiony - 50//(prevPositiony) - 50
            balls[i].style.setProperty('background-color', 'blue')
            balls[i].style.setProperty('color', 'white')
            balls[i].style.setProperty('border', '2px solid black')
            gsap.to(`.ball${i}`, { y: newbase[i], ease: 'bounce', stagger:3, duration:1.97});  
        }
        
        console.log(base[i], newbase[i])
        
    }
        }
        ,
    onComplete: function () {
        // This function will be called when the tween is complete
        
        console.log("Animation completed!");
      },})
}

tl.to(`.ball${5}`, { x: 5, rotation:45, ease: 'bounce', duration:1, onComplete: ()=>{
    tl.fromTo('.overlay', {text:"", opacity:0}, {text: 'Thanks for viewing!', opacity:1, duration:2, ease:'bounce'} )
    tl.to('.backdrop', {opacity:0, duration:3, ease:'linear', rotationY:360})
    //tl.reverse()
}});

}

myanimation();


addblock.addEventListener('click', ()=>{
    var block = document.createElement('div');
    index ++
   
    block.setAttribute('class', `ball${index}`);
    block.classList.add('balls')
    block.style.setProperty('left', '300px')
    block.style.setProperty('position', 'absolute')
    block.style.setProperty('width', '50px')
    block.style.setProperty('border', '2px solid black')
    block.style.setProperty('background', 'green')

    block.innerText = index + 1
    console.log(block)
    container.appendChild(block)
   
    console.log( container.style.setProperty('--length-', (index+2).toString()))
    var balls = document.querySelectorAll('.balls');
    balllength = balls.length;
    console.log(balllength)
    //myanimation();
})




var total = 0;

function operateNums(operator, ...nums){
    console.log(nums)
    nums.forEach(item=>{
        if (operator === "+"){
                total += Number(item)
            }
            else if(operator === "-"){
                //total = Number(nums[0])
                total===0? total=Number(nums[0]): total -= Number(item)
            }
            else {
                total = Number(nums[0])
            }
            
        }
       )
       return Number(total)}

    // for(let num of nums){
    //     if (operator === "+"){
    //         total += Number(num)
    //     }
    //     else if(operator === "-"){
    //         //total = Number(nums[0])
    //         total===0? total=Number(nums[0]): total -= Number(num)
    //     }
    //     else {
    //         total = Number(nums[0])
    //     }
        
    // }
//    return Number(total)
// }

// console.log(operateNums("-", 2, 3, 6, 7))

// console.log(myobj)
// console.log(ball3_ypos)

// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkj;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }

const data = {surname:"Orunta", firstname:"Kelechi", 
                lastname:"Enyinnaya", birthday:"3rd, February, 1986", age: 37}
var result

 for (const prop in data){
    (prop==='surname')&& (console.log(`data.${prop} = ${data[prop]}`))
 }

