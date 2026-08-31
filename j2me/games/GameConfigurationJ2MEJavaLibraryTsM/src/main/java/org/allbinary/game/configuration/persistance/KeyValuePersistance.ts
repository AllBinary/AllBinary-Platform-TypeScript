
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { ByteArrayInputStream } from '../../../../../java/io/ByteArrayInputStream.js';
      //not GWT import const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
      //not GWT import const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
import { DataInputStream } from '../../../../../java/io/DataInputStream.js';
      //not GWT import const DataInputStream = globalThis.java.io.DataInputStream;

      
import { DataOutputStream } from '../../../../../java/io/DataOutputStream.js';
      //not GWT import const DataOutputStream = globalThis.java.io.DataOutputStream;

      
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { RecordEnumeration } from '../../../../../javax/microedition/rms/RecordEnumeration.js';
      const RecordEnumeration = globalThis.javax.microedition.rms.RecordEnumeration;

      
//not plain js import { RecordStore } from '../../../../../javax/microedition/rms/RecordStore.js';
      const RecordStore = globalThis.javax.microedition.rms.RecordStore;

      
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      //not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicPersitance } from './BasicPersitance.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.persistance.BasicPersitance;

                import { NullRecordStore } from './NullRecordStore.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.persistance.NullRecordStore;

                import { NullRecordFilter } from './NullRecordFilter.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.persistance.NullRecordFilter;

                import { NullRecordComparator } from './NullRecordComparator.js';
//not GWT import const  = globalThis.org.allbinary.game.configuration.persistance.NullRecordComparator;

                
export class KeyValuePersistance extends BasicPersitance {
        

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

protected constructor (recordId: string){
            super(recordId);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){
this.loadAllSize(abeClientInformation, 1);
    
}


                //@Throws(Exception.constructor)
            
    public loadAllSize(abeClientInformation: AbeClientInformationInterface, size: number){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

        try {
            recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    var hashtable: Hashtable<string, string>;;
    

    var name: string;;
    

    var value: string;;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var recordAsBytes: number[];;
    

    var byteArrayInputStream: ByteArrayInputStream;;
    

    var inputStream: DataInputStream;;
    

        while(recordEnum!.hasNextElement())
        {

    var id: number = recordEnum!.nextRecordId()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
this.logUtil!.putF(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    
recordAsBytes= this.tsUtil!.getRecord(recordStore, id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    
hashtable= new Hashtable<string, string>();
    




                        for (
    var index: number = 0;index < size; index++)
        {
name= inputStream!.readUTF();
    
inputStream!.readUTF();
    
value= inputStream!.readUTF();
    
hashtable.put(name, value);
    
}

this.valueList!.add(hashtable);
    
this.idList!.add(smallIntegerSingletonFactory!.getAt(id));
    

                                    }
                                
}


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
                                    PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.persistanceStrings!.LOAD_ALL);
    
recordStore!.closeRecordStore();
    

                                    }
                                

         }
        
}


                //@Throws(Exception.constructor)
            
    public save(abeClientInformation: AbeClientInformationInterface, hashtable: Hashtable<any, any>){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

        try {
            this.logUtil!.putF(new StringMaker().append(this.persistanceStrings!.SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    var outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);;
    

    var value: string;;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    var anyType: any;;
    

    var size: number = objectArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
outputStream!.writeUTF(objectArray[index]! as string);
    
outputStream!.writeUTF(commonSeps!.EQUALS);
    
anyType= objectArray[index]!;
    
value= hashtable.get(anyType) as string;
    
outputStream!.writeUTF(value);
    
}


    var tsUtil: TsUtil = TsUtil.getInstance()!;;
    

    var savedGameBytes: number[] = tsUtil!.getByteArray(byteArrayOutputStream!.toString())!;;
    
recordStore!.addRecord(savedGameBytes, 0, savedGameBytes!.length);
    

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
                                    PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.commonStrings!.SAVE);
    
recordStore!.closeRecordStore();
    

                                    }
                                

         }
        
}


    public get(index: number): Hashtable<any, any>{

    var hashtable: Hashtable<any, any> = this.valueList!.objectArray[index]! as Hashtable<any, any>;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}



