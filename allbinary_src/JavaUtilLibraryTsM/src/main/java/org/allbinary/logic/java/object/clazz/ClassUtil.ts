
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
        



import { ConstructorUtil } from "../../../../../../org/allbinary/logic/java/anyType/ConstructorUtil.js";

    
import { InterfaceUtil } from "../../../../../../org/allbinary/logic/java/anyType/InterfaceUtil.js";

    
import { MethodUtil } from "../../../../../../org/allbinary/logic/java/anyType/MethodUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Class } from "./Class.js";

export class ClassUtil
            extends Object
         {
        

    public static viewAll(anyType: any = {}, lineBreak: string): string{
var anyType = anyType
var lineBreak = lineBreak

                        if(anyType != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ClassUtil.viewAll(anyType!constructor, lineBreak);

                        ;
    

                                    }
                                
                             else 
                        if()
                        
}


    public static viewAll(myClass: Function, lineBreak: string): string{
var myClass = myClass
var lineBreak = lineBreak

                        if(myClass != 
                                    null
                                )
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var classes: Function[] = myClass!.getClasses()!;
        
        
;
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append("Class: ");
    
stringBuffer!.append(myClass!.toString()!);
    
stringBuffer!.append(" uses ");
    
stringBuffer!.appendint(classes.length);
    
stringBuffer!.append(" other classes");
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append("Classes: ");
    
stringBuffer!.append(lineBreak);
    




                        for (
    var index: number = 0;
        
        
index < classes.length; index++)
        {
stringBuffer!.append("Class: ");
    
stringBuffer!.append(classes[index]!.getName());
    
stringBuffer!.append(lineBreak);
    
}

stringBuffer!.append(InterfaceUtil.viewAll(myClass::class.java, lineBreak));
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append(ConstructorUtil.viewAll(myClass::class.java, lineBreak));
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append(MethodUtil.viewAll(myClass::class.java, lineBreak));
    



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
                
            

