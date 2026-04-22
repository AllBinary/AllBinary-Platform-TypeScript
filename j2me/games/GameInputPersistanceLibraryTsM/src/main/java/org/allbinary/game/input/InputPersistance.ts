
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { ByteArrayInputStream } from "../../../../java/io/ByteArrayInputStream.js";

    
import { ByteArrayOutputStream } from "../../../../java/io/ByteArrayOutputStream.js";

    
import { DataInputStream } from "../../../../java/io/DataInputStream.js";

    
import { DataOutputStream } from "../../../../java/io/DataOutputStream.js";

    
import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { RecordEnumeration } from "../../../../javax/microedition/rms/RecordEnumeration.js";

    
import { RecordStore } from "../../../../javax/microedition/rms/RecordStore.js";

    
import { BasicPersitance } from "../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js";

    
import { NullRecordComparator } from "../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js";

    
import { NullRecordFilter } from "../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js";

    
import { NullRecordStore } from "../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameKeyMappingFactory } from "./GameKeyMappingFactory.js";

import { InputFactory } from "./InputFactory.js";

export class InputPersistance extends BasicPersitance {
        

    private readonly hashtableUtil: HashtableUtil = HashtableUtil.getInstance()!;
        
        
public constructor (name: string){
            super(name);
                        //var name = name


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;
        
        
;
    

        try {
            recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;
        
        
;
    

    var gameActionInputId: number= 0
;
    

    var inputId: number= 0
;
    

    var gameActionInput: Input
;
    

    var input: Input
;
    

    var hashtable: Hashtable<any, any>
;
    

    var gameKeyFactory: GameKeyMappingFactory = GameKeyMappingFactory.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var inputFactory: InputFactory = InputFactory.getInstance()!;
        
        
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
    
stringBuffer!.delete(0, stringBuffer!.length());
    
this.logUtil!.putF(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    
recordAsBytes= recordStore!.getRecord(id);
    

                        if(recordAsBytes != 
                                    null
                                )
                        
                                    {
                                    byteArrayInputStream= new ByteArrayInputStream(recordAsBytes);
    
inputStream= new DataInputStream(byteArrayInputStream);
    
hashtable= new Hashtable<any, any>();
    

    var value: number= 0
;
    

        while(inputStream!.available() > 0)
        {

    var gameActionInputIdAsString: string = inputStream!.readUTF()!;
        
        
;
    
value= Integer.parseInt(gameActionInputIdAsString);
    
gameActionInputId= value;
    
inputStream!.readUTF();
    
value= Integer.parseInt(inputStream!.readUTF());
    
inputId= value;
    
gameActionInput= gameKeyFactory!.getInstance(gameActionInputId);
    
input= inputFactory!.getInstance(inputId);
    

                        if(input == inputFactory!.NO_INPUT || gameActionInput == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    

                        if(input == inputFactory!.NO_INPUT)
                        
                                    {
                                    stringBuffer!.append(this.persistanceStrings!.ERROR_LOADING_ID);
    
stringBuffer!.appendlong(inputId);
    
stringBuffer!.append(this.persistanceStrings!.GAME_ACTION_INPUT);
    
stringBuffer!.appendlong(gameActionInputId);
    
PreLogUtil.put(stringBuffer!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    

                                    }
                                

                        if(gameActionInput == 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.persistanceStrings!.ERROR_LOADING);
    
stringBuffer!.appendlong(gameActionInputId);
    
stringBuffer!.append(this.persistanceStrings!.ID);
    
stringBuffer!.appendlong(inputId);
    
PreLogUtil.put(stringBuffer!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    

                                    }
                                

                                    }
                                
                        else {
                            
                        }
                            
hashtable.put(input, gameActionInput);
    
}

this.valueList!.add(hashtable);
    
this.idList!.add(smallIntegerSingletonFactory!.getInstance(id));
    

                                    }
                                
                        else {
                            
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
            
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
PreLogUtil.put(stringBuffer!.append(this.persistanceStrings!.SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();
        
        
;
    

    var outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);
        
        
;
    

    var gameActionInput: Input
;
    

    var list: BasicArrayList
;
    

    var input: Input
;
    

    var savedGameBytes: number[]
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var inputObjectArray: any[] = this.hashtableUtil!.getKeysAsArray(hashtable)!;
        
        
;
    

    var size: number = inputObjectArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameActionInput= inputObjectArray[index]! as Input;
    
list= hashtable.get(inputObjectArray[index]! as Object);

                         as BasicArrayList;
    




                        for (
    var index2: number = 0;
        
        
index2 < list.size(); index2++)
        {

    var gameActionInputIdAsString: string = smallIntegerSingletonFactory!.getInstance(gameActionInput!.getId())!.toString()!;
        
        
;
    
outputStream!.writeUTF(gameActionInputIdAsString);
    
outputStream!.writeUTF(commonSeps!.EQUALS);
    
input= list.objectArray[index2]! as Input;
    

    var inputIdAsString: string = smallIntegerSingletonFactory!.getInstance(input.getId())!.toString()!;
        
        
;
    
outputStream!.writeUTF(inputIdAsString);
    
}

}

savedGameBytes= byteArrayOutputStream!.toByteArray();
    
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


}
                
            

