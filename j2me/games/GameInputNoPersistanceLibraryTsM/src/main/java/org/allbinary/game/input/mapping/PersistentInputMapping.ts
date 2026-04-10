
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
            inputPersistance= InputPersistance(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID)
}

protected constructor (name: string){

            super();
            var name = name
inputPersistance= InputPersistance(name)
}


    public getTotalMapped(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInputMapping()!.getHashtable()!.size;
    
}


    isDefaultNew(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    getDefault(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputToGameKeyMapping.NULL_INPUT_TO_GAME_KEY_MAPPING;
    
}


                @Throws(Exception::class)
            
    public setDefault(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
removeAll()
add(this.getDefault())
this.save(abeClientInformation)
}


                @Throws(Exception::class)
            
    public update(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
deleteAll(abeClientInformation)
this.save(abeClientInformation)
}


    private inputMappingEvent: InputMappingEvent = new InputMappingEvent(this);
        
        

                @Throws(Exception::class)
            
    public save(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
save(abeClientInformation, this.getInputMapping()!.getHashtable())
setInputToGameKeyMapping(this.getInputMapping())

    
                        if(this.getInputMappingEventListenerInterface() != 
                                    null
                                )
                        
                                    {
                                    onInputMappingEvent(inputMappingEvent)

                                    }
                                
}


                @Throws(Exception::class)
            
    public init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
put(commonStrings!.START, this, commonStrings!.INIT)

        try {
            loadAll(abeClientInformation)
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
deleteRecoreStore(abeClientInformation)
this.setDefault(abeClientInformation)
loadAll(abeClientInformation)
}


    var list: BasicArrayList = inputPersistance!.getList()!;
        
        


    var totalMappedTo: number = 0;
        
        


    var size: number = list.size()!;
        
        


    var hashtable: Hashtable<Any, Any>


    var enumeration: Enumeration<Any?>


    var mappedToInput: Input


    var gameActionInput: Input





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
hashtable= list.objectArray[index]! as Hashtable<Any, Any>
enumeration= hashtable.keys()

        while(enumeration.hasMoreElements())
        {
mappedToInput= enumeration.nextElement()! as Input
gameActionInput= hashtable.get(mappedToInput as Object) as Input
totalMappedTo++
add(gameActionInput, mappedToInput)
}

}


    var stringBuffer: StringMaker = new StringMaker();
        
        

append("End - Total Loaded Keys Mapped: ")
appendint(this.getTotalMapped())
append(" to: ")
appendint(totalMappedTo)
put(stringBuffer!.toString(), this, commonStrings!.INIT)
}


    public setInputMappingEventListenerInterface(inputMappingEventListenerInterface: InputMappingEventListenerInterface){
var inputMappingEventListenerInterface = inputMappingEventListenerInterface
this.inputMappingEventListenerInterface= inputMappingEventListenerInterface
}


    getInputMappingEventListenerInterface(): InputMappingEventListenerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputMappingEventListenerInterface;
    
}


    public getInputMapping(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputMapping;
    
}


                @Throws(Exception::class)
            
    public isDelete(input: Input): boolean{
var input = input



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


                @Throws(Exception::class)
            
    public isSystemInput(input: Input): boolean{
var input = input



                            throw Exception(commonStrings!.NOT_IMPLEMENTED)
}


}
                
            

