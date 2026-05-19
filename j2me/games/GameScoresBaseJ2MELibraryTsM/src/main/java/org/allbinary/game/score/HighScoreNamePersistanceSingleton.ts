
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      
import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
      
import { DataInputStream } from '../../../../java/io/DataInputStream.js';
      
import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
      
import { RecordEnumeration } from '../../../../javax/microedition/rms/RecordEnumeration.js';
      
import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
      
import { RecordStoreException } from '../../../../javax/microedition/rms/RecordStoreException.js';
      
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
      
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
      
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
      
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
      
import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { ExceptionUtil } from '../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
      
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      
import { PlatformRecordIdUtil } from '../../../../org/allbinary/persistance/PlatformRecordIdUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HighScoreNamePersistanceSingleton
            extends Object
         {
        

    private static SINGLETON: HighScoreNamePersistanceSingleton = new HighScoreNamePersistanceSingleton();

    public static getInstance(): HighScoreNamePersistanceSingleton{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HighScoreNamePersistanceSingleton.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly platformRecordIdUtil: PlatformRecordIdUtil = PlatformRecordIdUtil.getInstance()!;

    private readonly RECORD_ID: string = "_SN";

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private nameBasicArrayList: BasicArrayList = new BasicArrayListD();

    public clear(){
this.name= StringUtil.getInstance()!.EMPTY_STRING;
    
}


                //@Throws(Exception.constructor)
            
    public deleteAll(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo){

    var size: number = this.nameBasicArrayList!.size()!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {

    var integer: Integer = this.nameBasicArrayList!.objectArray[index]! as Integer;
;
    
this.delete(abeClientInformation, gameInfo, integer.intValue());
    
}

this.clear();
    
}


    getRecordId(abeClientInformation: AbeClientInformationInterface): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, this.RECORD_ID);;
    
}


                //@Throws(Exception.constructor)
            
    public delete(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, deleteId: number){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
;
    

        try {
            this.logUtil!.putF(new StringMaker().
                            append("Deleting: ")!.appendint(deleteId)!.toString(), this, this.commonStrings!.delete);
    
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
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.delete);
    
recordStore!.closeRecordStore();
    

                                    }
                                

         }
        
}


    public getIds(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nameBasicArrayList;
    
}


    public load(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo): string{

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
;
    

        try {
            
                        if(this.name == StringUtil.getInstance()!.EMPTY_STRING)
                        
                                    {
                                    
    var LOADING_ID: string = "Loading id: ";
;
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
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
    
this.logUtil!.putF(new StringMaker().
                            append(LOADING_ID)!.appendint(id)!.toString(), this, this.commonStrings!.LOAD);
    
recordAsBytes= this.tsUtil!.getRecord(recordStore, id);
    
byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    

        while(inputStream!.available() > 0)
        {
this.name= inputStream!.readUTF();
    
}

this.nameBasicArrayList!.add(smallIntegerSingletonFactory!.getAt(id));
    
}


                                    }
                                

                //: 
} catch(e) 
            {
this.save(abeClientInformation, gameInfo, this.name);
    
this.logUtil!.putF(new StringMaker().
                            append(this.commonStrings!.EXCEPTION_LABEL)!.append(ExceptionUtil.getInstance()!.getStackTrace(e))!.toString(), this, this.commonStrings!.LOAD);
    
}

         finally {
            
        try {
            
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.LOAD);
    
recordStore!.closeRecordStore();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.LOAD, e);
    
}


         }
        



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public save(abeClientInformation: AbeClientInformationInterface, gameInfo: GameInfo, name: string){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
;
    

        try {
            this.logUtil!.putF(new StringMaker().
                            append("Saving: ")!.append(name)!.toString(), this, this.commonStrings!.SAVE);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
;
    

    var outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);
;
    
outputStream!.writeUTF(name);
    

    var savedGameBytes: number[] = byteArrayOutputStream!.toByteArray()!;
;
    
recordStore!.addRecord(savedGameBytes, 0, savedGameBytes!.length);
    
this.name= name;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e);
    
}

         finally {
            
        try {
            
                        if(recordStore != 
                                    null
                                )
                        
                                    {
                                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.SAVE);
    
recordStore!.closeRecordStore();
    

                                    }
                                

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e);
    
}


         }
        
}


}
                
            

