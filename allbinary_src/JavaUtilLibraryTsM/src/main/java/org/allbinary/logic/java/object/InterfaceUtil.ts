
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            //import { Class } from '../../../../../java/lang/Class.js';
            const Class = (globalThis.java?.lang?.Class ?? class {}) as typeof globalThis.java.lang.Class;
            type Class<T = any, U = any> = typeof Class extends abstract new (...args: any[]) => infer Instance ? Instance : typeof Class;
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InterfaceUtil
            extends Object
         {
        

    public static viewAll(myClass: Function, lineBreak: string): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let interfaces: Function[] = myClass!.getInterfaces()!;;
    
stringBuffer!.append(lineBreak);
    
stringBuffer!.append("Interfaces: ");
    
stringBuffer!.append(lineBreak);
    




                        for (
    let index: number = 0;index < interfaces.length; index++)
        {
stringBuffer!.append("Interface: ");
    
stringBuffer!.append(interfaces[index]!.getName());
    
stringBuffer!.append(lineBreak);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public static constructor(interfaceName: string, interfaces: Function[]): Function{

                        if(interfaceName != 
                                    null
                                 && interfaces != 
                                    null
                                 && interfaces.length > 0)
                        
                                    {
                                    



                        for (
    let index: number = 0;index < interfaces.length; index++)
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

static isImplemented(...args: any[]): any {
   
    if (args.length === 2) return this.isImplemented$overload1(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.isImplemented$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: isImplemented'); }
  
    public static isImplemented$overload1(clazz: Function, anyType: any): boolean{

    let classes: Function[] = anyType!.constructor.name.getInterfaces()!;;
    




                        for (
    let index: number = 0;index < classes.length; index++)
        {

                        if(clazz.toString()!.compareTo(classes[index]!.getName()) == 0)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public static isImplemented$overload2(className: string, anyType: any): boolean{

    let classes: Function[] = anyType!.constructor.name.getInterfaces()!;;
    




                        for (
    let index: number = 0;index < classes.length; index++)
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


    public static isImplementedView(clazz: Function, anyType: any): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let classes: Function[] = anyType!.constructor.name.getInterfaces()!;;
    
stringBuffer!.append("isImplementedView: \n");
    




                        for (
    let index: number = 0;index < classes.length; index++)
        {
stringBuffer!.append(clazz.toString()!);
    
stringBuffer!.append(" should be = ");
    
stringBuffer!.append(classes[index]!.getName());
    
stringBuffer!.append(classes[index]!.getName());
    
stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


private constructor (){

            super();
        }


}

