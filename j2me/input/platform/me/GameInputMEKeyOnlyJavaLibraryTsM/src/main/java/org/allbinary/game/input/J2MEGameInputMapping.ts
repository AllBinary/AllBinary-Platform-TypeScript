
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
        
import { GamePersistanceStrings } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js';
      
import { PersistentInputMapping } from '../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { J2MEKeyFactory } from './J2MEKeyFactory.js';
import { GameKeyFactory } from './GameKeyFactory.js';
import { Input } from './Input.js';

export class J2MEGameInputMapping extends PersistentInputMapping {
        

public constructor (){
            super(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(abeClientInformation: AbeClientInformationInterface){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT);
    
J2MEKeyFactory.getInstance()!.init();
    
super.init(abeClientInformation);
    

                        if(this.getTotalMapped() == 0 || this.isDefaultNew())
                        
                                    {
                                    this.getInputMapping()!.addMapping(this.getDefault());
    
this.save(abeClientInformation);
    

                                    }
                                
}


    public isDelete(input: Input): boolean{

                        if(input == GameKeyFactory.getInstance()!.GAME_D)
                        
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
                
            

