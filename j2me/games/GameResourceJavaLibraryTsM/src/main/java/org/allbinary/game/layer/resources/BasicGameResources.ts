
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
        



import { GameConfigurationCentral } from "../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class BasicGameResources
            extends Object
         {
        

    static readonly stringBuffer: StringMaker = new StringMaker();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public RESOURCE: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public RESOURCE_DESTROY: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
protected constructor (){

            super();
            }


    public init(ROOT: string, SIZE: string[]){
var ROOT = ROOT
var SIZE = SIZE

        try {
            
    var scale: number = GameConfigurationCentral.getInstance()!.SCALE.getValue()!.toInt()!;
        
        


                        if(scale > 1 && scale -1 < SIZE.length)
                        
                                    {
                                    this.this.init(ROOT, SIZE[scale -1]!)

                                    }
                                
                        else {
                            


                            throw Error(StringMaker().
                            append("Invalid Value: ")!.appendint(scale)!.toString())

                        }
                            
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
}

}


                //@Throws(Error::class)
            
    getString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameGraphicsResourceUtil.getInstance()!.getName();
    
}


                //@Throws(Error::class)
            
    init(ROOT: string, sizeString: string){
var ROOT = ROOT
var sizeString = sizeString

    var DESTROY: string = "_destroy";
        
        


    var string: string = this.getString()!;
        
        

stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(ROOT)
stringBuffer!.append(string)
stringBuffer!.append(sizeString)
this.RESOURCE= stringBuffer!.toString()
stringBuffer!.delete(0, stringBuffer!.length())
stringBuffer!.append(ROOT)
stringBuffer!.append(DESTROY)
stringBuffer!.append(string)
stringBuffer!.append(sizeString)
this.RESOURCE_DESTROY= stringBuffer!.toString()
}


}
                
            

