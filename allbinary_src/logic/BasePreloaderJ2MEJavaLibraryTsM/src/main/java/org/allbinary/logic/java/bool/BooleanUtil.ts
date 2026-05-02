
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../java/lang/Exception.js";
        
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BooleanFactory } from "./BooleanFactory.js";

export class BooleanUtil
            extends Object
         {
        

    private static readonly instance: BooleanUtil = new BooleanUtil();

    public static getInstance(): BooleanUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanUtil.instance;
    
}

private constructor (){

            super();
        }


                //@Throws(Exception::class)
            
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
                                

    var booleanStringLowerCase: string = booleanString!.toLowerCase()!;
;
    

                        if(booleanStringLowerCase!.localeCompare(booleanFactory!.TRUE_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                             else 
                        if(booleanStringLowerCase!.localeCompare(booleanFactory!.FALSE_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                            throw new Exception("Invalid booleanString - Must be true or false");
                    

                        }
                            
}


                //@Throws(Exception::class)
            
    public isStringBoolean(booleanString: string): boolean{
    //var booleanString = booleanString

    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
;
    

    var booleanStringLowerCase: string = booleanString!.toLowerCase()!;
;
    

                        if(booleanStringLowerCase!.localeCompare(booleanFactory!.TRUE_STRING) == 0 || booleanStringLowerCase!.localeCompare(booleanFactory!.FALSE_STRING) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

