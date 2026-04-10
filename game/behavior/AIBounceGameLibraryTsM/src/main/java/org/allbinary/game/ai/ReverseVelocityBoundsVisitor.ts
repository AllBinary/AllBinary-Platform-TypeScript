
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
        



import { BoundsVisitorInterface } from "../../../../org/allbinary/bounds/BoundsVisitorInterface.js";

    
import { VelocityInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterface.js";

    
import { VelocityInterfaceCompositeInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js";

    
import { LayerInterface } from "../../../../org/allbinary/layer/LayerInterface.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class ReverseVelocityBoundsVisitor
            extends Object
        
                , BoundsVisitorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    velocityInterface: VelocityInterface

    private layerInterface: LayerInterface
public constructor (layerInterface: LayerInterface){

            super();
            var layerInterface = layerInterface
this.layerInterface= layerInterface

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = layerInterface as VelocityInterfaceCompositeInterface;
        
        

this.velocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties() as VelocityInterface
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerInterface!.getXP();
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.layerInterface!.getYP();
    
}


    public minX(){

                        if(this.velocityInterface!.getVelocityXBasicDecimalP()!.getUnscaled() < 0)
                        this.velocityInterface!.getVelocityXBasicDecimalP()!.multiply( -1)
}


    public maxX(){

                        if(this.velocityInterface!.getVelocityXBasicDecimalP()!.getUnscaled() > 0)
                        this.velocityInterface!.getVelocityXBasicDecimalP()!.multiply( -1)
}


    public minY(){

                        if(this.velocityInterface!.getVelocityYBasicDecimalP()!.getUnscaled() < 0)
                        this.velocityInterface!.getVelocityYBasicDecimalP()!.multiply( -1)
}


    public maxY(){

                        if(this.velocityInterface!.getVelocityYBasicDecimalP()!.getUnscaled() > 0)
                        this.velocityInterface!.getVelocityYBasicDecimalP()!.multiply( -1)
}


}
                
            

