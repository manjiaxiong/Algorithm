let a =[]
for(let i =0 ;i<100000000; i++){
    a.push(i)
}
const now = new Date ().getTime()
a.lastIndexOf(100000000)
console.log(new Date ().getTime() - now)