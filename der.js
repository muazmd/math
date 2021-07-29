document.forms.formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Don't send form
    var expr = this.elements.func.value,
    //     diff = nerdamer.getCore().Calculus.diff(nerdamer(expr).symbol).text();
    //     diff2 = nerdamer.getCore().Calculus.diff(nerdamer(diff).symbol).text();
    // document.getElementById('text').textContent = 'fx= '+diff;
    // document.getElementById('diff2').textContent ='fxx= ' +diff2;
          derx = nerdamer.getCore().Calculus.diff(nerdamer(expr).symbol, 'x').text();
          document.getElementById('fx').textContent='fx = '+ derx;
      
            let derxx = nerdamer.getCore().Calculus.diff(nerdamer(derx).symbol, 'x').text();
            document.getElementById('fxx').textContent='fxx = '+ derxx;
        
            var y = nerdamer('diff(3y^4x^3+2y^2-3x^3-6, x, 2)'); //second derivative
            console.log(y.toString());
          
            let dery = nerdamer.getCore().Calculus.diff(nerdamer(expr).symbol, 'y').text();
            document.getElementById('fy').textContent= 'fy = '+dery;
        
          
            let deryy = nerdamer.getCore().Calculus.diff(nerdamer(dery).symbol, 'y').text();
            document.getElementById('fyy').textContent='fyy = '+ deryy;
        
            let derxy = nerdamer.getCore().Calculus.diff(nerdamer(derx).symbol, 'y').text();
            document.getElementById('fxy').textContent='fxy = '+ derxy ;
  });

  var x = nerdamer.diff('2x^4', 'x', 2);

  console.log(x.toString());
  

//   function dervalue(fun , x){
  //-2, 1
//   console.log(diff2); 
// } -18*x*y^4+150*x^4*y^2
// dervalue(diff2,x);
let res =-18*(-2)*1+150*Math.pow(-2,4)*1;
let func = '5x^6y^2-3x^3y^4 + 6x+2y';
val = nerdamer.getCore().Calculus.diff(nerdamer(func).symbol, 'y').text(); 

  var pownum=x.symbol.power.num.value;
  var powden=x.symbol.power.den.value;
  var multnum=x.symbol.multiplier.num.value;
  var value= x.symbol.value;
  //var res =`${multnum}*${value}^${pownum}`;

  //document.getElementById('ntext').textContent= val;

  
  
      // let derx = nerdamer.getCore().Calculus.diff(nerdamer(func).symbol, 'x').text();
      // document.getElementById('fx').textContent='fx = '+ derx;
   
      //   let derxx = nerdamer.getCore().Calculus.diff(nerdamer(derx).symbol, 'x').text();
      //   document.getElementById('fxx').textContent='fxx = '+ derxx;
     
      //   var y = nerdamer('diff(3y^4x^3+2y^2-3x^3-6, x, 2)'); //second derivative
      //   console.log(y.toString());
      
      //   let dery = nerdamer.getCore().Calculus.diff(nerdamer(func).symbol, 'y').text();
      //   document.getElementById('fy').textContent= 'fy = '+dery;
     
      
      //   let deryy = nerdamer.getCore().Calculus.diff(nerdamer(dery).symbol, 'y').text();
      //   document.getElementById('fyy').textContent='fyy = '+ deryy;
    
      //   let derxy = nerdamer.getCore().Calculus.diff(nerdamer(derx).symbol, 'y').text();
      //   document.getElementById('fxy').textContent='fxy = '+ derxy+ "    ." + res ;
      
      
      
      
      