
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
        



import { PersistentInputMapping } from "../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js";

    
import { BasicTouchInputFactory } from "../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js";

    
import { TouchMotionGestureFactory } from "../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js";

    
import { TrackballMotionGestureFactory } from "../../../../org/allbinary/input/motion/gesture/TrackballMotionGestureFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PCKeyFactory } from "./PCKeyFactory.js";

import { Input } from "./Input.js";

export class PCGameInputMapping extends PersistentInputMapping {
        

                //@Throws(Error::class)
            
    public init(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT);
    
PCKeyFactory.getInstance();
    
TouchMotionGestureFactory.getInstance();
    
TrackballMotionGestureFactory.getInstance();
    
BasicTouchInputFactory.getInstance();
    
super.init(abeClientInformation);
    

                        if(this.getTotalMapped() == 0 || this.isDefaultNew())
                        
                                    {
                                    this.getInputMapping()!.add(this.getDefault());
    
this.save(abeClientInformation);
    

                                    }
                                
}


    public isDelete(input: Input): boolean{
var input = input

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
var input = input



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

