
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
        



import { Enumeration } from "../../../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { GamePersistanceStrings } from "../../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputPersistance } from "../../../../../org/allbinary/game/input/InputPersistance.js";

    
import { InputMappingEvent } from "../../../../../org/allbinary/game/input/mapping/event/InputMappingEvent.js";

    
import { InputMappingEventListenerInterface } from "../../../../../org/allbinary/game/input/mapping/event/InputMappingEventListenerInterface.js";

    
import { NullInputMappingEventListener } from "../../../../../org/allbinary/game/input/mapping/event/NullInputMappingEventListener.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { InputToGameKeyMapping } from "./InputToGameKeyMapping.js";

export class PersistentInputMapping
            extends Object
         {
        

    public static readonly NULL_PERSISTENT_INPUT_MAPPING: PersistentInputMapping = new PersistentInputMapping();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly inputMapping: InputToGameKeyMapping = new InputToGameKeyMapping();
        
        

    private inputMappingEventListenerInterface: InputMappingEventListenerInterface = NullInputMappingEventListener.NULL_INPUT_MAPPING_EVENT_LISTENER;
        
        

    private readonly inputPersistance: InputPersistance
protected constructor (){

            super();
            inputPersistance= new InputPersistance(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID);
    
}

protected constructor (name: string){

            super();
            var name = name
inputPersistance= new InputPersistance(name);
    
}


    public getTotalMapped(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInputMapping()!.getHashtable()!.size;

                        ;
    
}


    isDefaultNew(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    getDefault(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputToGameKeyMapping.NULL_INPUT_TO_GAME_KEY_MAPPING;
    
}


                //@Throws(Error::class)
            
    public setDefault(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.getInputMapping()!.removeAll();
    
this.getInputMapping()!.add(this.getDefault());
    
this.save(abeClientInformation);
    
}


                //@Throws(Error::class)
            
    public update(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.inputPersistance!.deleteAll(abeClientInformation);
    
this.save(abeClientInformation);
    
}


    private inputMappingEvent: InputMappingEvent = new InputMappingEvent(this);
        
        

                //@Throws(Error::class)
            
    public save(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
inputPersistance!.save(abeClientInformation, this.getInputMapping()!.getHashtable());
    
inputMappingEvent!.setInputToGameKeyMapping(this.getInputMapping());
    

                        if(this.getInputMappingEventListenerInterface() != 
                                    null
                                )
                        
                                    {
                                    this.getInputMappingEventListenerInterface()!.onInputMappingEvent(inputMappingEvent);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.INIT);
    

        try {
            inputPersistance!.loadAll(abeClientInformation);
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
inputPersistance!.deleteRecoreStore(abeClientInformation);
    
this.setDefault(abeClientInformation);
    
inputPersistance!.loadAll(abeClientInformation);
    
}


    var list: BasicArrayList = inputPersistance!.getList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var totalMappedTo: number = 0;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var hashtable: Hashtable<any, any> = list.objectArray[index]! as Hashtable<any, any>;
        
        
;
    

    var enumeration: Enumeration<any?> = hashtable.keys()!;
        
        
;
    

        while(enumeration.hasMoreElements())
        {

    var mappedToInput: Input = enumeration.nextElement()!;

                         as Input;
        
        
;
    

    var gameActionInput: Input = hashtable.get(mappedToInput as Object);

                         as Input;
        
        
;
    
totalMappedTo++;
    
this.getInputMapping()!.add(gameActionInput, mappedToInput);
    
}

}


    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("End - Total Loaded Keys Mapped: ");
    
stringBuffer!.appendint(this.getTotalMapped());
    
stringBuffer!.append(" to: ");
    
stringBuffer!.appendint(totalMappedTo);
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    
}


    public setInputMappingEventListenerInterface(inputMappingEventListenerInterface: InputMappingEventListenerInterface){
var inputMappingEventListenerInterface = inputMappingEventListenerInterface
this.inputMappingEventListenerInterface= inputMappingEventListenerInterface;
    
}


    getInputMappingEventListenerInterface(): InputMappingEventListenerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputMappingEventListenerInterface;
    
}


    public getInputMapping(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputMapping;
    
}


                //@Throws(Error::class)
            
    public isDelete(input: Input): boolean{
var input = input



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


                //@Throws(Error::class)
            
    public isSystemInput(input: Input): boolean{
var input = input



                            throw new Error(commonStrings!.NOT_IMPLEMENTED)
}


}
                
            

