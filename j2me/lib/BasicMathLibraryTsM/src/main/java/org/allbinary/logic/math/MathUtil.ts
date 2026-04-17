
        /* Generated Code Do Not Modify */
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MathUtil
            extends Object
         {
        

    private static readonly instance: MathUtil = new MathUtil();
        
        

    public static getInstance(): MathUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getTotalDigits(digits: number): number{
var digits = digits

    var total: number = 0;
        
        
;
    

        while(digits > 0)
        {
digits= digits /10;
    
total++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return total;
    
}


    public sqrt(value: number): number{
    //var value = value

                        if(value <= 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                                    }
                                

    var accumulated: number = value shr 1;
        
        
;
    

    var result: number = (accumulated +(value /accumulated)) shr 1;
        
        
;
    

        do
        {
accumulated= result;
    
result= (accumulated +(value /accumulated)) shr 1;
    
}

        while(accumulated > result)
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return accumulated;
    
}


    public abs(value: number): number{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (value < 0)
                        ?       
                                 -value
                                :

                            value;

    ;
    
}


    public abs(value: number): number{
var value = value



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (value < 0)
                        ?       
                                 -value
                                :

                            value;

    ;
    
}


    public min(value: number, value2: number): number{
var value = value
var value2 = value2



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (value <= value2)
                        ?       
                                value
                                :

                            value2;

    ;
    
}


    public max(value: number, value2: number): number{
var value = value
var value2 = value2



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (value >= value2)
                        ?       
                                value
                                :

                            value2;

    ;
    
}


}
                
            

