// var works globally but let works only for the block and const is used for constant variable
//1. Console API
console.clear()
console.log("Hello World")
//alert("This is an alert")
console.error("This is a error")
console.warn("This is a Warning")

//2.Variable
var x = 2
var y = 3
console.log("Addition : ",x+y)

//3.Data Types
var str1 = "This is an string"
var str2 = "I am kousik"
console.log(str1+'\n'+str2)
console.log(typeof(str1))

//4.Objects
var marks = {ravi:54,subham:12,kousik:45}
console.log(marks['subham'])
console.log(typeof(marks))

//5.Booleans
var a=true
var b=false
console.log(a, b)

//6.var undeifined
var z
console.log(z)
var y = null
console.log(y)

/*At a very high level,there are two types of data types in javascript
1. Primitive Data Types : undefined,null,string,number,boolean,Symbol
2. Reference Data Types : Arrays and Objects
*/

//7.Arrays
var arr = [1,4,'Kousik',7,8]
console.log(arr[2])
console.log(typeof(arr))
console.log(arr.length)
arr.forEach(function(element){
    console.log(element)
})
arr.pop()
arr.push('gh')
arr.shift()
arr.unshift('jk')
arr.sort()
console.log(arr)
console.log(arr.toString())
console.clear()   //clearing console

//8.Operators
var c=45
var g=43
console.log(c>=g)
console.log(true && false)
console.log(true && true)
console.log(true || false)
console.log(true || true)
console.log(!false)

//9.Function
function avg(a,b){
    return (a+b)/2
}
c = avg(4,6)
console.log(c)

//10.Condition
for(var i=0;i<4;i++){
    console.log(i)
}
var v=0
while(v<7){
    console.log(v)
    v++
}
console.clear()

//11.String Method
var st = "This is my string"
console.log(st.indexOf('my'))
console.log(st.slice(1,3))
rp = st.replace('This','That')
console.log(st+'\n'+rp)

//12.Date
let mydate = new Date()
console.log(mydate.getTime())
console.log(mydate.getHours())
console.log(mydate.getFullYear())
console.log(mydate.getTime())
console.clear()

//13.DOM Manipulation
var elem = document.getElementById('btn')
elem.style.backgroundColor = "blue"
console.log(elem)

var elemcls = document.getElementsByClassName('container')
console.log(elemcls)
elemcls[1].classList.add('bg-primary')  //add the style of bg-primary class into the elemcls[0]
console.log(elemcls[0].innerHTML)
console.log(elemcls[0].innerText)

var tag = document.getElementsByTagName('div')
console.log(tag[0])
createElement = document.createElement('p')
createElement.innerText = "This is i am"
tag[0].appendChild(createElement)
createdElement = document.createElement('p')
createdElement.innerText = "This is replaced element"
tag[0].replaceChild(createdElement,createElement)

sel = document.querySelector('.container')
console.log(sel)
sel2 = document.querySelectorAll('.container')
console.log(sel2)

document.links
document.URL
document.images
document.domain
document.forms

//14.Event
function clicked(){
    console.log('I am clicked')
}

window.onload = function(){
    console.log('I am loaded')
}

p.addEventListener('click',function(){
      console.log('Clicked on paragraph')
})

p.addEventListener('mouseover',function(){
    console.log('Mouse on paragraph')
})

p.addEventListener('mouseout',function(){
    console.log('Mouse out of paragraph')
})

p.addEventListener('mouseup',function(){
    console.log('Mouse released on container')
})

p.addEventListener('mousedown',function(){
    console.log('Mouse pressed from paragraph')
})

//15. Arrow Function
sum = (a,b)=>{
    c = a+b
    return c
}

//16.Set Timeout and Set Timer
logKaro = ()=>{
    console.log('I am your kousik')
}
clr2 = setTimeout(logKaro,2000)
//clr = setInterval(logKaro,5000)
//clearTimeout(clr)
//clearInterval(clr2)



//17.local storage
localStorage.clear()  //clear all the local storage data
localStorage.setItem('name','kousik')
localStorage.getItem('name')
localStorage.removeItem('name')   ///clear the specified local storage data

//18.JSON
obj = {name:'kousik',length:1,a:{this:'That'}}  
jso = JSON.stringify(obj)  //convert from object to string
console.log(jso)
parsed = JSON.parse(jso)  //convert from string to object
console.log(parsed)
