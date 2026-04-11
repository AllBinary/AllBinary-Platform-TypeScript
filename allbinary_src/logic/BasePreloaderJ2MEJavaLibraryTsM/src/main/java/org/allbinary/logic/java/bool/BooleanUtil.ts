
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
        



import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

export class BooleanUtil
            extends Object
         {
        

    private static readonly instance: BooleanUtil = new BooleanUtil();
        
        

    public static getInstance(): BooleanUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getFromString(booleanString: string): boolean{
    //var booleanString = booleanString

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        
;
    

                        if(stringValidationUtil!.isEmpty(booleanString))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var booleanStringLowerCase: string = booleanString!.lowercase()!;
        
        
;
    

                        if(booleanStringLowerCase!.compareTo(booleanFactory!.TRUE_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if(booleanStringLowerCase!.compareTo(booleanFactory!.FALSE_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                            throw new Error("Invalid booleanString - Must be true or false")

                        }
                            
}


                //@Throws(Error::class)
            
    public isStringBoolean(booleanString: string): boolean{
    //var booleanString = booleanString

    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        
;
    

    var booleanStringLowerCase: string = booleanString!.lowercase()!;
        
        
;
    

                        if(booleanStringLowerCase!.compareTo(booleanFactory!.TRUE_STRING) == 0 || booleanStringLowerCase!.compareTo(booleanFactory!.FALSE_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

