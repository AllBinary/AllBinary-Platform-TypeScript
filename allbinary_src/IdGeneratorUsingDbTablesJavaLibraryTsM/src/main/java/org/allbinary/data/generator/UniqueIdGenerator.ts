
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
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../java/lang/Long.js';
        
//not game specific package import { IOException } from '../../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { Vector } from '../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { IdGeneratorEntity } from '../../../../org/allbinary/data/tables/generator/IdGeneratorEntity.js';
      const IdGeneratorEntity = globalThis.org.allbinary.data.tables.generator.IdGeneratorEntity;

      
//not game specific package import { IdGeneratorEntityFactory } from '../../../../org/allbinary/data/tables/generator/IdGeneratorEntityFactory.js';
      const IdGeneratorEntityFactory = globalThis.org.allbinary.data.tables.generator.IdGeneratorEntityFactory;

      
//not game specific package import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IdGeneratorInterface } from './IdGeneratorInterface.js';

export class UniqueIdGenerator
            extends Object
         implements IdGeneratorInterface {
        

    public static readonly EXT: string = ".unq";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly idGeneratorEntity: IdGeneratorEntity;

    private name: string;

public constructor (){

            super();
        this.idGeneratorEntity= IdGeneratorEntityFactory.getInstance() as IdGeneratorEntity;
    
}


    public initialize(value: number){

        try {
            
    var vector: Vector = new Vector();;
    
vector.add(this.name);
    
vector.add(Long.valueOf(value)!.toString());
    
this.idGeneratorEntity!.insert(vector);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "initialize", e);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public setFile(filePathName: string, name: string){
this.name= name;
    
}


                //@Throws(IOException.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getNext(): string{

        try {
            
    var idLong: Long = this.idGeneratorEntity!.get(this.name)!;;
    

    var newValue: Long = (idLong!.longValue() +1).toLong()!;;
    
this.idGeneratorEntity!.update(this.name, newValue);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idLong!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getNext", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    
}

}


}



