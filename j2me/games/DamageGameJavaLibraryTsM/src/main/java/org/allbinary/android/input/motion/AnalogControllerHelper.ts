
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
        



import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AnalogControllerConfigurationFactory } from "./AnalogControllerConfigurationFactory.js";

export class AnalogControllerHelper
            extends Object
         {
        

    private readonly reduceTimeFactor: number
public constructor (reduceTimeFactor: number){

            super();
        var reduceTimeFactor = reduceTimeFactor
this.reduceTimeFactor= reduceTimeFactor;
    
}


    private readonly SCALE_VALUE: number = AnalogControllerConfigurationFactory.getInstance()!.SCALE_VALUE;
        
        

    private readonly rightTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly leftTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly downTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly upTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

                //@Throws(Error::class)
            
    public right(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.rightTimeElapsedHelper!.delay= ((this.SCALE_VALUE -xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.rightTimeElapsedHelper!.isTime())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.right();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public left(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.leftTimeElapsedHelper!.delay= ((this.SCALE_VALUE +xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.leftTimeElapsedHelper!.isTime())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.left();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public up(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.upTimeElapsedHelper!.delay= ((this.SCALE_VALUE -xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.upTimeElapsedHelper!.isTime())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.up();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public down(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.downTimeElapsedHelper!.delay= ((this.SCALE_VALUE +xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.downTimeElapsedHelper!.isTime())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.down();
    

                                    }
                                
}


}
                
            

