
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CharacterSet } from '../../../../../org/allbinary/logic/java/character/CharacterSet.js';
      const CharacterSet = globalThis.org.allbinary.logic.java.character.CharacterSet;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
//not game specific package import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { OperatingSystemInterface } from './OperatingSystemInterface.js';
import { SystemProperties } from './SystemProperties.js';

export class GenericOperatingSystem
            extends Object
         implements OperatingSystemInterface {
        

    private readonly osName: string;

    private readonly osArch: string;

    private readonly osVersion: string;

    private readonly characterSet: CharacterSet = new CharacterSet();

    scalable: boolean = false;

public constructor (){

            super();
        
    var systemProperties: SystemProperties = SystemProperties.getInstance()!;;
    

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(stringValidationUtil!.isEmpty(systemProperties!.getName()))
                        
                                    {
                                    this.osName= EMPTY_STRING;
    

                                    }
                                
                        else {
                            this.osName= systemProperties!.getName();
    

                        }
                            

                        if(stringValidationUtil!.isEmpty(systemProperties!.getArch()))
                        
                                    {
                                    this.osArch= EMPTY_STRING;
    

                                    }
                                
                        else {
                            this.osArch= systemProperties!.getArch();
    

                        }
                            

                        if(stringValidationUtil!.isEmpty(systemProperties!.getVersion()))
                        
                                    {
                                    this.osVersion= EMPTY_STRING;
    

                                    }
                                
                        else {
                            this.osVersion= systemProperties!.getVersion();
    

                        }
                            
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.osName;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.osVersion;
    
}


    public getArch(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.osArch;
    
}


    public getCharacterSet(): CharacterSet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.characterSet;
    
}


    public isOverScan(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getOverScanXPercent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 100;
    
}


    public getOverScanYPercent(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 100;
    
}


    public isScalable(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.scalable;
    
}


    public isAutoHide(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    var NEW_LINE: string = CommonSeps.getInstance()!.NEW_LINE;;
    

    var osBuffer: StringMaker = new StringMaker();;
    
osBuffer!.append("Operating System Info: \n");
    
osBuffer!.append(this.getName());
    
osBuffer!.append(NEW_LINE);
    
osBuffer!.append(this.getArch());
    
osBuffer!.append(NEW_LINE);
    
osBuffer!.append(this.getVersion());
    
osBuffer!.append(NEW_LINE);
    
osBuffer!.append(StringUtil.getInstance()!.toString(this.getCharacterSet()));
    
osBuffer!.append(NEW_LINE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();;
    
}


}
                
            

