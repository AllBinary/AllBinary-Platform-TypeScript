
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
        
//not game specific package import { GamePersistanceStrings } from '../../../../org/allbinary/game/configuration/persistance/GamePersistanceStrings.js';
      const GamePersistanceStrings = globalThis.org.allbinary.game.configuration.persistance.GamePersistanceStrings;

      
//not game specific package import { PersistentInputMapping } from '../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
      const PersistentInputMapping = globalThis.org.allbinary.game.input.mapping.PersistentInputMapping;

      
//not game specific package import { BasicTouchInputFactory } from '../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
      const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;

      
//not game specific package import { TouchMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;

      
//not game specific package import { TrackballMotionGestureFactory } from '../../../../org/allbinary/input/motion/gesture/TrackballMotionGestureFactory.js';
      const TrackballMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TrackballMotionGestureFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PCKeyFactory } from './PCKeyFactory.js';
import { Input } from './Input.js';

export class PCGameInputMapping extends PersistentInputMapping {
        

public constructor (){
            super(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(abeClientInformation: AbeClientInformationInterface){
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT);
    
PCKeyFactory.getInstance();
    
TouchMotionGestureFactory.getInstance();
    
TrackballMotionGestureFactory.getInstance();
    
BasicTouchInputFactory.getInstance();
    
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
                
            

