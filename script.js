setInterval(()=>{
let x = new Date()
let h = x.getHours();
let m = x.getMinutes();
let s = x.getSeconds();
let ms = x.getMilliseconds();
let ampm = h>=12? "PM":"AM"
//24 to 12 format
h = h % 12;
h = h ? h : 12;
//console.log(h)
//console.log(h,m,s,ms,ampm)
document.getElementById('ctext1').innerHTML=`<b id='h1'>${h}</b>`
document.getElementById('ctext2').innerHTML=`<b id='h1'>${m}</b>`
document.getElementById('ctext3').innerHTML=`<b id='h1'>${s}</b>`
document.getElementById('ctext4').innerHTML=`<b id='h1'>${ms}</b>`
document.getElementById('ctext5').innerHTML=`<b id='h1'>${ampm}</b>`
//console.log(ms)
                },100)

/*while(i<0){
  document.getElementById('myVideo').setAttribute('hidden','true')
}*/

