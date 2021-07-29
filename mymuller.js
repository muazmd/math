var E;
function f(x) {
return 12*Math.exp(-x)+2*x-13;
}
function muller(x0,x1,x2,max_num_of_iteration,TOL){
    var h1 = x1-x0;
    var h2 = x2-x1;
    var a1 = (f(x1)- f(x0))/h1; 
    var a2 = (f(x2) - f(x1))/h2;
    var a  = (a2-a1)/(h2+h1);
    var i=2;
    while(i<max_num_of_iteration){
        var b = a2 + h2*a;
        var D = Math.pow((Math.pow(b,2)-4*f(x2)*a),1/2);
        (Math.abs(b-D) < Math.abs(b+a))? E= b+D : E= b-D;
        var h = -2*f(x2) /E;
        var p = x2+h;
        
        if( Math.abs(h) < TOL){
            
            return p;
            
        }
        else{
            x0=x1;
            x1=x2;
            x2=p;
            h1 = x1-x0;
            h2 = x2-x1;
            a1 = (f(x1)- f(x2))/h1; 
            a2 = (f(x2) - f(x1))/h2;
            a  = (a2-a1)/(h2+h1); 
            i +=1;
        }
    }
    
    return p;
}

console.log( muller(4,5,6,3,0));

