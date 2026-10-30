
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
        
import { IOException } from '../../../../java/io/IOException.js';
//not GWT import const IOException

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { IdGeneratorEntity } from '../../../../org/allbinary/data/tables/generator/IdGeneratorEntity.js';
//not GWT import const IdGeneratorEntity

import { IdGeneratorEntityFactory } from '../../../../org/allbinary/data/tables/generator/IdGeneratorEntityFactory.js';
//not GWT import const IdGeneratorEntityFactory

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IdGeneratorInterface } from './IdGeneratorInterface.js';
//not GWT import - same folder const IdGeneratorInterface

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
    let vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.name);
    
vector.add(Long.valueOf(value)!.toString());
    
this.idGeneratorEntity!.insert(vector);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "initialize", e);
    

                                    }
                                

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
    let idLong: Long = this.idGeneratorEntity!.get(this.name)!;;
    

    let newValue: Long = Number(idLong!.longValue() +1)!;;
    
this.idGeneratorEntity!.update(this.name, newValue);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idLong!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.IDLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "getNext", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error";
    

 }
   }
 
}


}

