 console.log(1);
 setTimeout(() => {
  console.log(2);
  Promise.resolve().then((data)=>{
      console.log(3)
  })   
 });
 new Promise((resolve, reject)=> {
     resolve();
     console.log(4);
 }).then(()=>{
     console.log(5);
     setTimeout(()=>{
         console.log(6);
     })
 }).then(()=> console.log(7));
 console.log(8)
 // chrome 每执行完一个会观察有没有插入微任务
 /*  
    1
    4
    8
    5
    7
    2
    3
    6
*/
// node的event loop 有区别
/* 
1
4
8
5
7
2
6
3
 */