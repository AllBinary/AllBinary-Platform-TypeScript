
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
        



import { CharacterSet } from "../../../../../org/allbinary/logic/java/character/CharacterSet.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class GenericOperatingSystem
            extends Object
        
                , OperatingSystemInterface {
        

    private readonly osName: string

    private readonly osArch: string

    private readonly osVersion: string

    private readonly characterSet: CharacterSet = new CharacterSet();
        
        

    scalable: boolean = false;
        
        
public constructor (){

            super();
            
    var systemProperties: SystemProperties = SystemProperties.getInstance()!;
        
        


    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        


    
                        if(stringValidationUtil!.isEmpty(systemProperties!.getName()))
                        
                                    {
                                    this.osName= EMPTY_STRING

                                    }
                                
                        else {
                            this.osName= systemProperties!.getName()

                        }
                            

    
                        if(stringValidationUtil!.isEmpty(systemProperties!.getArch()))
                        
                                    {
                                    this.osArch= EMPTY_STRING

                                    }
                                
                        else {
                            this.osArch= systemProperties!.getArch()

                        }
                            

    
                        if(stringValidationUtil!.isEmpty(systemProperties!.getVersion()))
                        
                                    {
                                    this.osVersion= EMPTY_STRING

                                    }
                                
                        else {
                            this.osVersion= systemProperties!.getVersion()

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

    var NEW_LINE: string = CommonSeps.getInstance()!.NEW_LINE;
        
        


    var osBuffer: StringMaker = new StringMaker();
        
        

append("Operating System Info: \n")
append(this.getName())
append(NEW_LINE)
append(this.getArch())
append(NEW_LINE)
append(this.getVersion())
append(NEW_LINE)
append(StringUtil.getInstance()!.toString(this.getCharacterSet()))
append(NEW_LINE)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return osBuffer!.toString();
    
}


}
                
            

