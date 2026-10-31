
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
        
            import { ClassLoader } from '../../../../../java/lang/ClassLoader.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../java/lang/System.js';
        
import { Constructor } from '../../../../../java/lang/reflect/Constructor.js';
//not GWT import const Constructor

import { Method } from '../../../../../java/lang/reflect/Method.js';
//not GWT import const Method

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NativeLibraryClassLoader } from './NativeLibraryClassLoader.js';
//sameFolderImports - not GWT import - same folder const NativeLibraryClassLoader

export class NativeLibraryHelperWrapper
            extends Object
         {
        

    private libraryName: string;

    private loader: ClassLoader;

    private anyType: any;

public constructor (libraryName: string){

            super();
        this.setLibraryName(libraryName);
    
}


                //@Throws(Exception.constructor)
            
    public load(){

    let params: any[] = new Array(1);;
    
params[0]= this.getLibraryName();
    

    let classes: Function[] = new Array(1);;
    
classes[0]= this.getLibraryName()!.constructor;
    
this.loader= new NativeLibraryClassLoader(this.constructor.namegetClassLoader());
    

    let myClass: Function = this.loader.loadClass("dynamic.NativeLibraryHelper")!;;
    

    let constructor: Constructor = myClass!.getConstructor(classes)!;;
    
this.anyType= constructor.newInstance(params);
    

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let method: Method = this.anyType!.constructor.name.getMethod(commonStrings!.LOAD, 
                            null)!;;
    
method.invoke(this.anyType, 
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
                        return this.libraryName;
    
}


    public setLibraryName(libraryName: string){
this.libraryName= libraryName;
    
}


}

