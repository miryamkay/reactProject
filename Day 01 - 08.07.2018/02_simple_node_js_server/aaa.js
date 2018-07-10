const a=Symbol("Dd");
const b={
    aa:()=>{console.log("aa")},
    bb:function(){
        console.log("bb")
    }
}
console.log(b.aa());
console.log(b.bb()); 