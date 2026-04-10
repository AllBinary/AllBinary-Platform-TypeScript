
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

    
import { Proxy } from "../../../../../java/lang/reflect/Proxy.js";

    

export class InterfaceCastProxy
            extends Object
        
                , java.lang.reflect.InvocationHandler {
        

    public static newInstance(anyType: any = {}): any = {}{
var anyType = anyType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Proxy.newProxyInstance(anyType!::class.java.classLoader, anyType!::class.getInterfaces(), InterfaceCastProxy(anyType));
    
}


    private anyType: any = {}
private constructor (anyType: any = {}){

            super();
            var anyType = anyType
this.anyType= anyType
}


                //@Throws(Error::class)
            
    public invoke(proxyObject: any = {}, proxyMethod: Method, proxyArgs: any = {}[]): any = {}{
var proxyObject = proxyObject
var proxyMethod = proxyMethod
var proxyArgs = proxyArgs

    var methodName: string = proxyMethod!.getName()!;
        
        


    var realMethod: Method = this.anyType!.::class.getMethod(methodName, proxyMethod!.getParameterTypes())!;
        
        


                        if(!realMethod!.isAccessible())
                        realMethod!.setAccessible(true)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return proxyMethod!.invoke(this.anyType, proxyArgs);
    
}


}
                
            

