
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
        



import { Method } from "../../../../../java/lang/reflect/Method.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    

import {  } from "./.js";

import {  } from "./.js";

import { ParamsUtil } from "./ParamsUtil.js";

import {  } from "./.js";

export class MethodUtil
            extends Object
         {
        

    public static viewAll(myClass: Function, lineBreak: string): string{
var myClass = myClass
var lineBreak = lineBreak

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var method: Method[] = myClass!.getMethods()!;
        
        
;
    
stringBuffer!.append("Methods: ");
    
stringBuffer!.append(lineBreak);
    




                        for (
    var index: number = 0;
        
        
index < method.length; index++)
        {
stringBuffer!.append(method[index]!.getReturnType()!.getName());
    
stringBuffer!.append(" ");
    
stringBuffer!.append(method[index]!.getName());
    
stringBuffer!.append("(");
    
ParamsUtil.viewParams(method[index]!.getParameterTypes());
    
stringBuffer!.append(")");
    
stringBuffer!.append(lineBreak);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}

private constructor (){

            super();
            }


}
                
            

