
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

      
import { GamePersistanceStrings } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js';
      //not GWT import const GamePersistanceStrings = globalThis.org.allbinary.game.configuration.persistance.GamePersistanceStrings;

      
import { PersistentInputMapping } from '../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
      //not GWT import const PersistentInputMapping = globalThis.org.allbinary.game.input.mapping.PersistentInputMapping;

      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PCKeyFactory } from './PCKeyFactory.js';
//not GWT import const  = globalThis.org.allbinary.game.input.PCKeyFactory;

                import { Input } from './Input.js';
//not GWT import const  = globalThis.org.allbinary.game.input.Input;

                
export class PCGameInputMapping extends PersistentInputMapping {
        

public constructor (){
            super(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(abeClientInformation: AbeClientInformationInterface){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT);
    
PCKeyFactory.getInstance();
    
super.init(abeClientInformation);
    

                        if(this.getTotalMapped() == 0 || this.isDefaultNew())
                        
                                    {
                                    this.getInputMapping()!.addMapping(this.getDefault());
    
this.save(abeClientInformation);
    

                                    }
                                
}


    public isDelete(input: Input): boolean{

                        if(input == PCKeyFactory.getInstance()!.DEL)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isSystemInput(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



