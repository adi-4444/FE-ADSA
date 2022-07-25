//   https://www.codechef.com/problems/TASHIFT?tab=statement

function main(){
   let n = parseInt(readline())
   let a=readline()
   let b=readline()
   var i, j=0;
   var maxlen=0, count=-1;
   for(i=0;i<n;i++){
     if(b[i]==a[j]){
       var len=0, tempidx=i;
       while(i<n && j<n && a[j]==b[i]){
         len++;
         i++;
         j++;
       }
       if(len>maxlen){
         maxlen=len;
         count = tempidx;
       }
       j=0;
     }
   }
   console.log(count)
 }
 main()








 
 
// function minimumShifts(a,b) {
//    let shifts = -1
//    let length = 0
//    for(let i = 0; i < a.length; i++){
//        let prefixCount = 0
//        for(let j = 0; j < a.length; j++){
//            if(b[j] === a[j]){
//                prefixCount++
//            }else{
//                break
//            }
//        }
//        if(prefixCount > length){
//            length = prefixCount
//            shifts = i
//        }
//        b = b.split("")
//        let temp = b[0]
//        b.shift()
//        b.push(temp)
//        b = b.join("")
//    }
//    return shifts
// }
//console.log(minimumShifts(string1,string2))