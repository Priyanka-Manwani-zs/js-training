function Newsum(val){
    sum=val;
        function num2(n1){

            if(n1===undefined){
                return sum;
            }
            else{
            sum+=n1;
            return num2;
            }
            
            
        }
        return num2
}
console.log(Newsum(1)(2)(8)());