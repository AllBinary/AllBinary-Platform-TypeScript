
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
        



            import Hashtable from "@ohos.util.HashMap";
        
import { ByteArrayInputStream } from "../../../../../java/io/ByteArrayInputStream.js";

    
import { ByteArrayOutputStream } from "../../../../../java/io/ByteArrayOutputStream.js";

    
import { DataInputStream } from "../../../../../java/io/DataInputStream.js";

    
import { DataOutputStream } from "../../../../../java/io/DataOutputStream.js";

    

//import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { RecordEnumeration } from "../../../../../javax/microedition/rms/RecordEnumeration.js";

    
import { RecordStore } from "../../../../../javax/microedition/rms/RecordStore.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { HashtableUtil } from "../../../../../org/allbinary/util/HashtableUtil.js";

    

export class KeyValuePersistance extends BasicPersitance {
        
protected constructor (recordId: string)                        

                            : super(recordId){

            super();
                //var recordId = recordId


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.loadAll(abeClientInformation, 1);
    
}


                //@Throws(Error::class)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface, size: number){
    //var abeClientInformation = abeClientInformation
var size = size

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;
        
        
;
    

    var hashtable: Hashtable<String, String>
;
    

    var name: string
;
    

    var value: string
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var recordAsBytes: number[]
;
    

    var byteArrayInputStream: ByteArrayInputStream
;
    

    var inputStream: DataInputStream
;
    

        while(recordEnum!.hasNextElement())
        {

    var id: number = recordEnum!.nextRecordId()!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
logUtil!.put(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    
recordAsBytes= recordStore!.getRecord(id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= ByteArrayInputStream(recordAsBytes);
    
inputStream= DataInputStream(byteArrayInputStream);
    
hashtable= Hashtable<String, String>();
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
name= inputStream!.readUTF();
    
inputStream!.readUTF();
    
value= inputStream!.readUTF();
    
hashtable.put(name, value);
    
}

this.valueList!.add(hashtable);
    
this.idList!.add(smallIntegerSingletonFactory!.getInstance(id));
    

                                    }
                                
}


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
                                    PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.persistanceStrings!.LOAD_ALL);
    
recordStore!.closeRecordStore();
    

                                    }
                                

         }
        
}


                //@Throws(Error::class)
            
    public save(abeClientInformation: AbeClientInformationInterface, hashtable: Hashtable<any, any>){
    //var abeClientInformation = abeClientInformation
    //var hashtable = hashtable

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            logUtil!.put(StringMaker().
                            append(this.persistanceStrings!.SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        
;
    

    var outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);
        
        
;
    

    var value: string
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        
;
    

    var anyType: any = {}
;
    

    var size: number = objectArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
outputStream!.writeUTF(objectArray[index]! as String);
    
outputStream!.writeUTF(commonSeps!.EQUALS);
    
anyType= objectArray[index]! as Object;
    
value= hashtable.get(anyType as Object);

                         as String;
    
outputStream!.writeUTF(value);
    
}


    var savedGameBytes: number[] = byteArrayOutputStream!.toString()!.encodeToByteArray()!;
        
        
;
    
recordStore!.addRecord(savedGameBytes, 0, savedGameBytes!.length);
    

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
                                    PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.commonStrings!.SAVE);
    
recordStore!.closeRecordStore();
    

                                    }
                                

         }
        
}


    public get(index: number): Hashtable<any, any>{
var index = index

    var hashtable: Hashtable<any, any> = this.valueList!.objectArray[index]! as Hashtable<any, any>;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

