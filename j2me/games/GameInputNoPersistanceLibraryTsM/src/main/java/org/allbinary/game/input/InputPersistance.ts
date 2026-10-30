
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
        
import { RecordEnumeration } from '../../../../javax/microedition/rms/RecordEnumeration.js';
//not GWT import const RecordEnumeration

import { RecordStore } from '../../../../javax/microedition/rms/RecordStore.js';
//not GWT import const RecordStore

import { BasicPersitance } from '../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js';
//not GWT import const BasicPersitance

import { NullRecordComparator } from '../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js';
//not GWT import const NullRecordComparator

import { NullRecordFilter } from '../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js';
//not GWT import const NullRecordFilter

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
type HashtableUtil<T = any, U = any> = typeof HashtableUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HashtableUtil;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Input } from './Input.js';
//not GWT import - same folder const Input
//GameInputNoPersistanceLibrary
export class InputPersistance extends BasicPersitance {
        

    private readonly hashtableUtil: HashtableUtil = HashtableUtil.getInstance()!;

public constructor (name: string){
            super(name);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){

    let recordStore: RecordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true)!;;
    

    let recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;;
    

    let hashtable: ABHashtable<any, any>;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let id: number= 0;;
    

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
            
    public save(abeClientInformation: AbeClientInformationInterface, hashtable: ABHashtable<any, any>){
PreLogUtil.put(new StringMaker().append(this.persistanceStrings!.NOT_SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    

    let recordStore: RecordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true)!;;
    

    let gameActionInput: Input;;
    

    let list: BasicArrayList;;
    

    let input: Input;;
    

    let inputObjectArray: any[] = this.hashtableUtil!.getKeysAsArray(hashtable)!;;
    

    let size: number = inputObjectArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
gameActionInput= inputObjectArray[index]! as Input;
    
list= hashtable.get(inputObjectArray[index]!) as BasicArrayList;
    




                        for (
    let index2: number = 0;index2 < list.size(); index2++)
        {
input= list.get(index2) as Input;
    
}

}

recordStore!.closeRecordStore();
    
}


}

