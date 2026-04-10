
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

    

export class InterfaceUtil
            extends Object
         {
        

    public static viewAll(myClass: KClass<*>, lineBreak: string): string{
    //var myClass = myClass
    //var lineBreak = lineBreak

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var interfaces: KClass<*>[] = myClass!.getInterfaces()!;
        
        

append(lineBreak)
append("Interfaces: ")
append(lineBreak)




                        for (
    var index: number = 0;
        
        
index < interfaces.length; index++)
        {
append("Interface: ")
append(interfaces[index]!.getName())
append(lineBreak)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public static ::class(interfaceName: string, interfaces: KClass<*>[]): KClass<*>{
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


    public static isImplemented(clazz: KClass<*>, anyType: any = {}): boolean{
var clazz = clazz
var anyType = anyType

    var classes: KClass<*>[] = anyType!::class.getInterfaces()!;
        
        





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

    var classes: KClass<*>[] = anyType!::class.getInterfaces()!;
        
        





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


    public static isImplementedView(clazz: KClass<*>, anyType: any = {}): string{
var clazz = clazz
var anyType = anyType

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var classes: KClass<*>[] = anyType!::class.getInterfaces()!;
        
        

append("isImplementedView: \n")




                        for (
    var index: number = 0;
        
        
index < classes.length; index++)
        {
append(clazz.toString()!)
append(" should be = ")
append(classes[index]!.getName())
append(classes[index]!.getName())
append(CommonSeps.getInstance()!.NEW_LINE)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}

private constructor (){

            super();
            }


}
                
            

