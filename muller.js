
// JavaScript Program to find root of a function, f(x)
 
const MAX_ITERATIONS = 10000;
 
// Function to calculate f(x)
function f(x)
{
    // Taking f(x) = x ^ 3 + 2x ^ 2 + 10x - 20
    return 12*Math.exp(-x) + 2*x + 13;
}
 
function Muller(a, b, c)
{
    let i;
    let res;
 
    for (i = 0;;++i)
    {
        // Calculating various constants required
        // to calculate x3
        let f1 = f(a);
        let f2 = f(b);
        let f3 = f(c);
        let d1 = f1 - f3;
        let d2 = f2 - f3;
        let h1 = a - c;
        let h2 = b - c;
        let a0 = f3;
        let a1 = (((d2*Math.pow(h1, 2)) - (d1*Math.pow(h2, 2)))
                    / ((h1*h2) * (h1-h2)));
        let a2 = (((d1*h2) - (d2*h1))/((h1*h2) * (h1-h2)));
        let x = ((-2*a0) / (a1 + Math.abs(Math.sqrt(a1*a1-4*a0*a2))));
        let y = ((-2*a0) / (a1-Math.abs(Math.sqrt(a1*a1-4*a0*a2))));
 
        // Taking the root which is closer to x2
        if (x >= y)
            res = x + c;
        else
            res = y + c;
 
        // checking for resemblance of x3 with x2 till
        // two decimal places
        let m = res*100;
        let n = c*100;
        m = Math.floor(m);
        n = Math.floor(n);
        if (m == n)
            break;
        a = b;
        b = c;
        c = res;
        if (i > MAX_ITERATIONS)
        {
            console.log("Root cannot be found using"
                + " Muller's method");
            break;
        }
    }
    if (i <= MAX_ITERATIONS)
        console.log("The value of the root is " + res.toFixed(4));
}
 
// Driver main function
    let a = 4, b = 5, c = 6;
    Muller(a, b, c);
 
 
 
// This code is contributed by Surbhi Tyagi.
