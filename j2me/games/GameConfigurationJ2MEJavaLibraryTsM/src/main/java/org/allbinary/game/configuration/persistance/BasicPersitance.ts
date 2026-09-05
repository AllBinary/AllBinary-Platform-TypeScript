
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
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { RecordStore } 
const RecordStore = globalThis.javax.microedition.rms.RecordStore;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { PlatformRecordIdUtil } from '../../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
//not GWT import const PlatformRecordIdUtil = globalThis.org.allbinary.persistance.PlatformRecordIdUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PersistanceStrings } from './PersistanceStrings.js';
//not GWT import - same folder const PersistanceStrings = globalThis.org.allbinary.game.configuration.persistance.PersistanceStrings;

                import { NullRecordStore } from './NullRecordStore.js';
//not GWT import - same folder const NullRecordStore = globalThis.org.allbinary.game.configuration.persistance.NullRecordStore;

                
export class BasicPersitance
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly persistanceStrings: PersistanceStrings = PersistanceStrings.getInstance()!;

    private readonly platformRecordIdUtil: PlatformRecordIdUtil = PlatformRecordIdUtil.getInstance()!;

    private readonly recordId: string;

    readonly valueList: BasicArrayList = new BasicArrayListD();

    readonly idList: BasicArrayList = new BasicArrayListD();

protected constructor (recordId: string){

            super();
        this.recordId= recordId;
    
}


                //@Throws(Exception.constructor)
            
    public deleteRecoreStore(abeClientInformation: AbeClientInformationInterface){
RecordStore.deleteRecordStore(this.getRecordId(abeClientInformation));
    
}


                //@Throws(Exception.constructor)
            
    public deleteAll(abeClientInformation: AbeClientInformationInterface){

    var size: number = this.idList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var integer: Integer = this.idList!.objectArray[index]! as Integer;;
    
this.delete(abeClientInformation, integer.intValue());
    
}

this.clear();
    
}


                //@Throws(Exception.constructor)
            
    public delete(abeClientInformation: AbeClientInformationInterface, deleteId: number){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

        try {
            this.logUtil!.putF(new StringMaker().append(this.persistanceStrings!.DELETING_WITH_ID)!.appendint(deleteId)!.toString(), this, this.commonStrings!.delete);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    
recordStore!.deleteRecord(deleteId);
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

         finally {
            
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.commonStrings!.delete);
    
recordStore!.closeRecordStore();
    

                                    }
                                

         }
        
}


    public getRecordId(abeClientInformation: AbeClientInformationInterface): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, this.recordId);;
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.valueList;
    
}


    public getIds(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.idList;
    
}


    public clear(){
this.valueList!.clear();
    
this.idList!.clear();
    
}


}



