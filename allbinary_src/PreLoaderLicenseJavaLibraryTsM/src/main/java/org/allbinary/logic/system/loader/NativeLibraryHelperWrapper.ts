
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

    
import { Method } from "../../../../../java/lang/reflect/Method.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

import { System } from "./System.js";

import { System } from "./System.js";

export class NativeLibraryHelperWrapper
            extends Object
         {
        

    private libraryName: string

    private loader: ClassLoader

    private anyType: any
public constructor (libraryName: string){

            super();
            var libraryName = libraryName
this.setLibraryName(libraryName);
    
}


                //@Throws(Error::class)
            
    public load(){

    var params: any[] = new Array(1);
        
        
;
    
params[0]= getLibraryName();
    

    var classes: Function[] = new Array(1);
        
        
;
    
classes[0]= getLibraryName()!.constructor;
    
this.loader= new NativeLibraryClassLoader(this.constructor.name.java.classLoader);
    

    var myClass: Function = loader.loadClass("dynamic.NativeLibraryHelper")!;
        
        
;
    

    var constructor: Constructor = myClass!.getConstructor(classes)!;
        
        
;
    
this.anyType= constructor.newInstance(params);
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var method: Method = anyType!.constructor.name.getMethod(commonStrings!.LOAD, 
                            null)!;
        
        
;
    
method.invoke(anyType, 
                            null);
    
}


    public unload(){
this.anyType= 
                                        null
                                    ;
    
this.loader= 
                                        null
                                    ;
    
System.gc();
    
System.gc();
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Library: " +this.getLibraryName();
    
}


    public getLibraryName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return libraryName;
    
}


    public setLibraryName(libraryName: string){
var libraryName = libraryName
this.libraryName= libraryName;
    
}


}
                
            

