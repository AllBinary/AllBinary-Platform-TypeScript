
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Class } from "./Class.js";

export class InterfaceUtil
            extends Object
         {
        

    public static viewAll(myClass: Function, lineBreak: string): string{
    //var myClass = myClass
    //var lineBreak = lineBreak

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var interfaces: Function[] = myClass!.getInterfaces()!;
        
        
;
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append("Interfaces: ");
    
stringBuffer!.append(lineBreak);
    




                        for (
    var index: number = 0;
        
        
index < interfaces.length; index++)
        {
stringBuffer!.append("Interface: ");
    
stringBuffer!.append(interfaces[index]!.getName());
    
stringBuffer!.append(lineBreak);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public static constructor(interfaceName: string, interfaces: Function[]): Function{
    //var interfaceName = interfaceName
    //var interfaces = interfaces

                        if(interfaceName != 
                                    null
                                 && interfaces != 
                                    null
                                 && interfaces.length > 0)
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < interfaces.length; index++)
        {

                        if(interfaces[index]!.getName()!.indexOf(interfaceName) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return interfaces[index]!;
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public static isImplemented(clazz: Function, anyType: any = {}): boolean{
var clazz = clazz
var anyType = anyType

    var classes: Function[] = anyType!.constructor.name.getInterfaces()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < classes.length; index++)
        {

                        if(clazz.toString()!.compareTo(classes[index]!.getName()) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static isImplemented(className: string, anyType: any = {}): boolean{
var className = className
var anyType = anyType

    var classes: Function[] = anyType!.constructor.name.getInterfaces()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < classes.length; index++)
        {

                        if(classes[index]!.getName()!.indexOf(className) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static isImplementedView(clazz: Function, anyType: any = {}): string{
var clazz = clazz
var anyType = anyType

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var classes: Function[] = anyType!.constructor.name.getInterfaces()!;
        
        
;
    
stringBuffer!.append("isImplementedView: \n");
    




                        for (
    var index: number = 0;
        
        
index < classes.length; index++)
        {
stringBuffer!.append(clazz.toString()!);
    
stringBuffer!.append(" should be = ");
    
stringBuffer!.append(classes[index]!.getName());
    
stringBuffer!.append(classes[index]!.getName());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}

private constructor (){

            super();
        }


}
                
            

