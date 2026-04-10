
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
        



import { IOException } from "../../../../java/io/IOException.js";

    
import { Vector } from "../../../../java/util/Vector.js";

    
import { IdGeneratorEntity } from "../../../../org/allbinary/data/tables/generator/IdGeneratorEntity.js";

    
import { IdGeneratorEntityFactory } from "../../../../org/allbinary/data/tables/generator/IdGeneratorEntityFactory.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class UniqueIdGenerator
            extends Object
        
                , IdGeneratorInterface {
        

    public static readonly EXT: string = ".unq";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly idGeneratorEntity: IdGeneratorEntity

    private name: string
public constructor (){

            super();
            idGeneratorEntity= IdGeneratorEntityFactory.getInstance() as IdGeneratorEntity
}


    public initialize(value: number){
var value = value

        try {
            
    var vector: Vector = new Vector();
        
        

vector.add(name)
vector.add(Long.valueOf(value)!.toString())
idGeneratorEntity!.insert(vector)
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, "initialize", e)

                                    }
                                
}

}


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setFile(filePathName: string, name: string){
var filePathName = filePathName
var name = name
this.name= name
}


                //@Throws(IOException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getNext(): string{

        try {
            
    var idLong: Long = this.idGeneratorEntity!.get(name)!;
        
        


    var newValue: Long = (idLong!.longValue() +1).toLong()!;
        
        

this.idGeneratorEntity!.update(name, newValue)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idLong!.toString();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

logUtil!.put(commonStrings!.EXCEPTION, this, "getNext", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


}
                
            

