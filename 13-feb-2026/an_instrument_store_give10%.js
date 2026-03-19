/*an instrument stores gives a 10% discounts to all students on the original cost of instrument.
during back to school sale on additional 15%is taken off the discounted price julie , a student at the local high school ,
purchase a flute for$306, how much did the original cost */

function answer(){
    let cost ;
    let finalPrice=306;
    let stdDiscount=0.10; //equal to 10%
    let saleDiscount=0.15 //equal to 15%
    cost=finalPrice/((1-stdDiscount)*(1-saleDiscount));
 console.log(`the cost of flute is:${cost}`);
}
answer();
