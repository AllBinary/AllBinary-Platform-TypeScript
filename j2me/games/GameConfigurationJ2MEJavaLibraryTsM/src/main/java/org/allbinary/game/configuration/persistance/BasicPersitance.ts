
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
        



import { RecordStore } from "../../../../../javax/microedition/rms/RecordStore.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { PlatformRecordIdUtil } from "../../../../../org/allbinary/persistance/PlatformRecordIdUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicPersitance
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    readonly persistanceStrings: PersistanceStrings = PersistanceStrings.getInstance()!;
        
        

    private readonly platformRecordIdUtil: PlatformRecordIdUtil = PlatformRecordIdUtil.getInstance()!;
        
        

    private readonly recordId: string

    readonly valueList: BasicArrayList = new BasicArrayList();
        
        

    readonly idList: BasicArrayList = new BasicArrayList();
        
        
protected constructor (recordId: string){

            super();
                //var recordId = recordId
this.recordId= recordId;
    
}


                //@Throws(Error::class)
            
    public deleteRecoreStore(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
RecordStore.deleteRecordStore(this.getRecordId(abeClientInformation));
    
}


                //@Throws(Error::class)
            
    public deleteAll(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var size: number = idList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var integer: Integer = this.idList!.objectArray[index]! as Integer;
        
        
;
    
this.delete(abeClientInformation, integer.toInt());
    
}

this.clear();
    
}


                //@Throws(Error::class)
            
    public delete(abeClientInformation: AbeClientInformationInterface, deleteId: number){
    //var abeClientInformation = abeClientInformation
    //var deleteId = deleteId

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            logUtil!.put(new StringMaker().
                            append(this.persistanceStrings!.DELETING_WITH_ID)!.appendint(deleteId)!.toString(), this, this.commonStrings!.delete);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    
recordStore!.deleteRecord(deleteId);
    

                //: 
} catch(e) 
            {



                            throw e
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
    //var abeClientInformation = abeClientInformation



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return platformRecordIdUtil!.getRecordId(abeClientInformation, recordId);

                        ;
    
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
                
            

