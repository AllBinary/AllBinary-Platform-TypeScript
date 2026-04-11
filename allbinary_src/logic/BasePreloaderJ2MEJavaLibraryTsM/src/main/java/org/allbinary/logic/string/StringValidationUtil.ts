
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        




export class StringValidationUtil
            extends Object
         {
        

    private static readonly instance: StringValidationUtil = new StringValidationUtil();
        
        

    public static getInstance(): StringValidationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


    public containsSpaces(value: string): boolean{
var value = value

                        if(value.indexOf(' ') >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isNumber(value: string): boolean{
var value = value

    var numberOfDecimalPoints: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < value.length; index++)
        {

    var digit: string = value[index]!;
        
        
;
    

                        if(!isNumber(digit);

                         && digit != '.')
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(digit == '.')
                        
                                    {
                                    numberOfDecimalPoints++;
    

                        if(numberOfDecimalPoints > 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isNumber(digit: string): boolean{
var digit = digit

                        if(digit != '0' && digit != '1' && digit != '2' && digit != '3' && digit != '4' && digit != '5' && digit != '6' && digit != '7' && digit != '8' && digit != '9')
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isValidRequired(value: string, min: number, max: number): boolean{
var value = value
var min = min
var max = max

                        if(value == 
                                    null
                                 || value.length < min || value.length > max)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isValidRequiredNumber(value: string, min: number, max: number): boolean{
var value = value
var min = min
var max = max

                        if(this.isEmpty(value) || value.length < min || value.length > max)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.isNumber(value);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isValidNotRequired(value: string, min: number, max: number): boolean{
var value = value
var min = min
var max = max

                        if(value != 
                                    null
                                )
                        
                                    {
                                    
                        if(value.length < min || value.length > max)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isValidNotRequiredNumber(value: string, min: number, max: number): boolean{
var value = value
var min = min
var max = max

                        if(value != 
                                    null
                                )
                        
                                    {
                                    
                        if(value.compareTo(stringUtil!.NULL_STRING) == 0 || value.length < min || value.length > max)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.isNumber(value);

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isEmpty(string: string): boolean{
var string = string

                        if(string != 
                                    null
                                 && string.compareTo(stringUtil!.NULL_STRING) != 0 && string.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


}
                
            

