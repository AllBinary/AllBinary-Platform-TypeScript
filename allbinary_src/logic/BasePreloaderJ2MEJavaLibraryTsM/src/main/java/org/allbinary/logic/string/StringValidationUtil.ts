
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js - same folder import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

export class StringValidationUtil
            extends Object
         {
        

    private static readonly instance: StringValidationUtil = new StringValidationUtil();

    public static getInstance(): StringValidationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringValidationUtil.instance;
    
}


    private readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

private constructor (){

            super();
        }


    public containsSpaces(value: string): boolean{

                        if(value.indexOf(' ') >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isNumber(value: string): boolean{

    let numberOfDecimalPoints: number = 0;;
    




                        for (
    let index: number = 0;index < value.length; index++)
        {

    let digit: string = value[index]!;;
    

                        if(!this.isNumberFromChar(digit) && digit != '.'.charCodeAt(0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(digit == '.'.charCodeAt(0))
                        
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


    public isNumberFromChar(digit: string): boolean{

                        if(digit != '0'.charCodeAt(0) && digit != '1'.charCodeAt(0) && digit != '2'.charCodeAt(0) && digit != '3'.charCodeAt(0) && digit != '4'.charCodeAt(0) && digit != '5'.charCodeAt(0) && digit != '6'.charCodeAt(0) && digit != '7'.charCodeAt(0) && digit != '8'.charCodeAt(0) && digit != '9'.charCodeAt(0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isValidRequired(value: string, min: number, max: number): boolean{

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

                        if(this.isEmpty(value) || value.length < min || value.length > max)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.isNumber(value))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isValidNotRequired(value: string, min: number, max: number): boolean{

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

                        if(value != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.tsUtil!.compareTo(value, this.stringUtil!.NULL_STRING) == 0 || value.length < min || value.length > max)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                        if(!this.isNumber(value))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isEmpty(string: string): boolean{

                        if(string != 
                                    null
                                 && this.tsUtil!.compareTo(string, this.stringUtil!.NULL_STRING) != 0 && this.tsUtil!.compareTo(string, this.stringUtil!.EMPTY_STRING) != 0)
                        
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

