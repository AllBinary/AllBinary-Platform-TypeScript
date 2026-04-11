
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
        

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { RecordEnumeration } from "../../../../javax/microedition/rms/RecordEnumeration.js";

    
import { RecordStore } from "../../../../javax/microedition/rms/RecordStore.js";

    
import { BasicPersitance } from "../../../../org/allbinary/game/configuration/persistance/BasicPersitance.js";

    
import { NullRecordComparator } from "../../../../org/allbinary/game/configuration/persistance/NullRecordComparator.js";

    
import { NullRecordFilter } from "../../../../org/allbinary/game/configuration/persistance/NullRecordFilter.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    

export class InputPersistance extends BasicPersitance {
        

    private readonly hashtableUtil: HashtableUtil = HashtableUtil.getInstance()!;
        
        
public constructor (name: string)                        

                            : super(name){

            super();
            var name = name


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public loadAll(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var recordStore: RecordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true)!;
        
        
;
    

    var recordEnum: RecordEnumeration = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true)!;
        
        
;
    

    var hashtable: Hashtable<any, any>
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var id: number= 0
;
    

        while(recordEnum!.hasNextElement())
        {
id= recordEnum!.nextRecordId();
    
stringBuffer!.delete(0, stringBuffer!.length());
    
logUtil!.put(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)!.toString(), this, this.persistanceStrings!.LOAD_ALL);
    
hashtable= new Hashtable<any, any>();
    
this.valueList!.add(hashtable);
    
this.idList!.add(smallIntegerSingletonFactory!.getInstance(id));
    
}

recordStore!.closeRecordStore();
    
}


                //@Throws(Error::class)
            
    public save(abeClientInformation: AbeClientInformationInterface, hashtable: Hashtable<any, any>){
    //var abeClientInformation = abeClientInformation
var hashtable = hashtable
PreLogUtil.put(new StringMaker().
                            append(this.persistanceStrings!.NOT_SAVING)!.append(StringUtil.getInstance()!.toString(hashtable))!.toString(), this, this.commonStrings!.SAVE);
    

    var recordStore: RecordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true)!;
        
        
;
    

    var gameActionInput: Input
;
    

    var list: BasicArrayList
;
    

    var input: Input
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
    
list= hashtable.get(inputObjectArray[index]!);

                         as BasicArrayList;
    




                        for (
    var index2: number = 0;
        
        
index2 < list.size(); index2++)
        {
input= list.get(index2);

                         as Input;
    
}

}

recordStore!.closeRecordStore();
    
}


}
                
            

