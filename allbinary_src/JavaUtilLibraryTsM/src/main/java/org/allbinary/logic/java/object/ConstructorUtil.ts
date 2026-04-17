
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
        



import { Constructor } from "../../../../../java/lang/reflect/Constructor.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Class } from "./Class.js";

export class ConstructorUtil
            extends Object
         {
        

    public static viewAll(myClass: Function, lineBreak: string): string{
    //var myClass = myClass
    //var lineBreak = lineBreak

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var constructor: Constructor[] = myClass!.getConstructors()!;
        
        
;
    
stringBuffer!.append("Constructors: ");
    
stringBuffer!.append(lineBreak);
    




                        for (
    var index: number = 0;
        
        
index < constructor.length; index++)
        {
stringBuffer!.append(ConstructorUtil.view(constructor[index]!, lineBreak));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public static view(constructor: Constructor, lineBreak: string): string{
    //var constructor = constructor
    //var lineBreak = lineBreak

                        if(constructor != 
                                    null
                                )
                        
                                    {
                                    
    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(constructor.getName());
    

    var classes: Function[] = constructor.getParameterTypes()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < classes.length; index++)
        {
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(classes[index]!.getName());
    
stringBuffer!.append(commonSeps!.COLON);
    
stringBuffer!.appendint(index);
    
}

stringBuffer!.append(lineBreak);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    

                                    }
                                
                             else 
                        if()
                        
}

private constructor (){

            super();
            }


}
                
            

