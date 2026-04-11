
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

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { ConstructorUtil } from "../../../../../org/allbinary/logic/java/anyType/ConstructorUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbKeys } from "../../../../../org/allbinary/logic/system/security/AbKeys.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class AbeFactory
            extends Object
         {
        

    private static readonly instance: AbeFactory = new AbeFactory();
        
        

    public static getInstance(): AbeFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private useCustomLoader: boolean = false;
        
        
private constructor (){

            super();
            }


                //@Throws(LicensingException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(abeClientInformation: AbeClientInformationInterface, className: string): any{
    //var abeClientInformation = abeClientInformation
    //var className = className

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.createInstance();

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    logUtil!.put("Failure for: " +className, this, "getInstance(classname)", e);
    

                                    }
                                



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    logUtil!.put("Failure for: " +className, this, "getInstance(classname)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(LicensingException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(abeClientInformation: AbeClientInformationInterface, className: string, classes: Function[], params: any[]): any{
    //var abeClientInformation = abeClientInformation
var className = className
var classes = classes
var params = params

    var constructor: Constructor = 
                null
            ;
        
        
;
    

        try {
            
    var parent: ClassLoader = WebappClassLoaderInfo.getLoader()!;
        
        
;
    

                        if(useCustomLoader)
                        
                                    {
                                    
    var loader: ClassLoader = new AbeClassLoader(parent, AbKeys.getInstance()!.getKey(abeClientInformation, className));
        
        
;
    

    var myClass: Function = loader.loadClass(className)!;
        
        
;
    
constructor= myClass!.getConstructor(classes);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return constructor.newInstance(params);

                        ;
    

                                    }
                                
                        else {
                            
    var myClass: Function = parent.loadClass(className)!;
        
        
;
    
constructor= myClass!.getConstructor(classes);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return constructor.newInstance(params);

                        ;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Failure for: ");
    
stringBuffer!.append(className);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(ConstructorUtil.view(constructor, CommonSeps.getInstance()!.NEW_LINE));
    
logUtil!.put(stringBuffer!.toString(), this, "getInstance(className,params)", e);
    

                                    }
                                



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Failure for: ");
    
stringBuffer!.append(className);
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(ConstructorUtil.view(constructor, CommonSeps.getInstance()!.NEW_LINE));
    
logUtil!.put(stringBuffer!.toString(), this, "getInstance(className,params)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(LicensingException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public constructor(abeClientInformation: AbeClientInformationInterface, className: string): Function{
    //var abeClientInformation = abeClientInformation
    //var className = className

        try {
            
    var parent: ClassLoader = WebappClassLoaderInfo.getLoader()!;
        
        
;
    

                        if(useCustomLoader)
                        
                                    {
                                    
    var loader: ClassLoader = new AbeClassLoader(parent, AbKeys.getInstance()!.getKey(abeClientInformation, className));
        
        
;
    

    var c: Function = loader.loadClass(className)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return c;
    

                                    }
                                
                        else {
                            
    var c: Function = parent.loadClass(className)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return c;
    

                        }
                            

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    logUtil!.put("Failure for: " +className, this, "getClass(className)", e);
    

                                    }
                                



                            throw e
}

                //: 
 catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.LOADERERROR))
                        
                                    {
                                    logUtil!.put("Failure for: " +className, this, "getClass(className)", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

