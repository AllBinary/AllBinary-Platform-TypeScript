
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
      const ByteArrayInputStream = globalThis.java.io.ByteArrayInputStream;

      
//not game specific package import { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.js';
      const ByteArrayOutputStream = globalThis.java.io.ByteArrayOutputStream;

      
//not game specific package import { DataInputStream } from '../../../../java/io/DataInputStream.js';
      const DataInputStream = globalThis.java.io.DataInputStream;

      
//not game specific package import { DataOutputStream } from '../../../../java/io/DataOutputStream.js';
      const DataOutputStream = globalThis.java.io.DataOutputStream;

      
//not game specific package import { Hashtable } from '../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { RecordEnumeration } from '../../../../javax/microedition/rms/RecordEnumeration.js';
      const RecordEnumeration = globalThis.javax.microedition.rms.RecordEnumeration;

      
//not game specific package import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
      const RecordStore = globalThis.javax.microedition.rms.RecordStore;

      
//not game specific package import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
      const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not game specific package import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
      const BasicPersitance = globalThis.org.allbinary.game.configuration.persistance.BasicPersitance;

      
//not game specific package import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
      const NullRecordComparator = globalThis.org.allbinary.game.configuration.persistance.NullRecordComparator;

      
//not game specific package import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
      const NullRecordFilter = globalThis.org.allbinary.game.configuration.persistance.NullRecordFilter;

      
//not game specific package import { NullRecordStore } from '../../../../org/allbinary/game/configuration/persistance/NullRecordStore.js';
      const NullRecordStore = globalThis.org.allbinary.game.configuration.persistance.NullRecordStore;

      
//not game specific package import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Input } from './Input.js';
import { GameKeyMappingFactory } from './GameKeyMappingFactory.js';
import { InputFactory } from './InputFactory.js';
//GameInputPersistanceLibrary
export class InputPersistance extends BasicPersitance {
        

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly hashtableUtil: HashtableUtil = HashtableUtil.getInstance()!;

public constructor (name: string){
            super(name);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){

    var recordStore: RecordStore = NullRecordStore.NULL_RECORD_STORE;;
    

        try {
            recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    var gameActionInputId: number= 0;;
    

    var inputId: number= 0;;
    

    var gameActionInput: Input;;
    

    var input: Input;;
    

    var hashtable: Hashtable<any, any>;;
    

    var gameKeyFactory: GameKeyMappingFactory = GameKeyMappingFactory.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var inputFactory: InputFactory = InputFactory.getInstance()!;;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

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
    
hashtable= new Hashtable<any, any>();
    

    var value: number= 0;;
    

        while(inputStream!.available() > 0)
        {

    var gameActionInputIdAsString: string = inputStream!.readUTF()!;;
    
value= Integer.parseInt(gameActionInputIdAsString);
    
gameActionInputId= value;
    
inputStream!.readUTF();
    
value= Integer.parseInt(inputStream!.readUTF());
    
inputId= value;
    
gameActionInput= gameKeyFactory!.getGameKey(Math.round(gameActionInputId));
    
input= inputFactory!.getInstanceById(Math.round(inputId));
    

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
    
this.idList!.add(smallIntegerSingletonFactory!.getAt(id));
    

                                    }
                                
                        else {
                            
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
            
    var stringBuffer: StringMaker = new StringMaker();;
    
PreLogUtil.put(stringBuffer!.append(this.persistanceStrings!.SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    
recordStore= RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true);
    

    var byteArrayOutputStream: ByteArrayOutputStream = new ByteArrayOutputStream();;
    

    var outputStream: DataOutputStream = new DataOutputStream(byteArrayOutputStream);;
    

    var gameActionInput: Input;;
    

    var list: BasicArrayList;;
    

    var input: Input;;
    

    var savedGameBytes: number[];;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var inputObjectArray: any[] = this.hashtableUtil!.getKeysAsArray(hashtable)!;;
    

    var size: number = inputObjectArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameActionInput= inputObjectArray[index]! as Input;
    
list= hashtable.get(inputObjectArray[index]!) as BasicArrayList;
    




                        for (
    var index2: number = 0;index2 < list.size(); index2++)
        {

    var gameActionInputIdAsString: string = smallIntegerSingletonFactory!.getAt(gameActionInput!.getId())!.toString()!;;
    
outputStream!.writeUTF(gameActionInputIdAsString);
    
outputStream!.writeUTF(commonSeps!.EQUALS);
    
input= list.objectArray[index2]! as Input;
    

    var inputIdAsString: string = smallIntegerSingletonFactory!.getAt(input.getId())!.toString()!;;
    
outputStream!.writeUTF(inputIdAsString);
    
}

}

savedGameBytes= byteArrayOutputStream!.toByteArray();
    
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


}
                
            

