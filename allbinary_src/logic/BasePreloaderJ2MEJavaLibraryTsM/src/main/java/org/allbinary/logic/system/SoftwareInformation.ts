
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { KotlinUtil } from '../../../../org/allbinary/KotlinUtil.js';
      const KotlinUtil = globalThis.org.allbinary.KotlinUtil;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SoftwareInformation
            extends Object
         {
        

    private readonly name: string;

    private readonly shortName: string;

    private readonly version: string;

public constructor (name: string, version: string, shortName: string){

            super();
        this.name= name;
    
this.version= version;
    
this.shortName= new StringMaker().append(shortName)!.append(KotlinUtil.getShortName())!.toString();
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.version;
    
}


    public toShortString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shortName;
    
}


    public toString(): string{

    var NAME: string = "Name: ";;
    

    var VERSION: string = "Version: ";;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(NAME);
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(VERSION);
    
stringBuffer!.append(this.getVersion());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



