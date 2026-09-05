
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not plain js import { RecordEnumeration } 
const RecordEnumeration = globalThis.javax.microedition.rms.RecordEnumeration;

      
//not plain js import { RecordStore } 
const RecordStore = globalThis.javax.microedition.rms.RecordStore;

      
import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
//not GWT import const BasicPersitance = globalThis.org.allbinary.game.configuration.persistance.BasicPersitance;

      
import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator = globalThis.org.allbinary.game.configuration.persistance.NullRecordComparator;

      
import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter = globalThis.org.allbinary.game.configuration.persistance.NullRecordFilter;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Input } from './Input.js';
//not GWT import - same folder const Input = globalThis.org.allbinary.game.input.Input;

                //GameInputNoPersistanceLibrary
export class InputPersistance extends BasicPersitance {
        

    private readonly hashtableUtil: HashtableUtil = HashtableUtil.getInstance()!;

public constructor (name: string){
            super(name);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){

    var recordStore: RecordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true)!;;
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    var hashtable: ABHashtable;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var id: number= 0;;
    

        while(recordEnum!.hasNextElement())
        {
id= recordEnum!.nextRecordId();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
this.logUtil!.putF(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    
hashtable= StdUtil.getInstance()!.createHashtable();
    
this.valueList!.add(hashtable);
    
this.idList!.add(smallIntegerSingletonFactory!.getAt(id));
    
}

recordStore!.closeRecordStore();
    
}


                //@Throws(Exception.constructor)
            
    public save(abeClientInformation: AbeClientInformationInterface, hashtable: ABHashtable){
PreLogUtil.put(new StringMaker().append(this.persistanceStrings!.NOT_SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    

    var recordStore: RecordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true)!;;
    

    var gameActionInput: Input;;
    

    var list: BasicArrayList;;
    

    var input: Input;;
    

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
input= list.get(index2) as Input;
    
}

}

recordStore!.closeRecordStore();
    
}


}



