
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

    

export class AnalogControllerHelper
            extends Object
         {
        

    private readonly reduceTimeFactor: number
public constructor (reduceTimeFactor: number){

            super();
            var reduceTimeFactor = reduceTimeFactor
this.reduceTimeFactor= reduceTimeFactor
}


    private readonly SCALE_VALUE: number = AnalogControllerConfigurationFactory.getInstance()!.SCALE_VALUE;
        
        

    private readonly rightTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly leftTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly downTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly upTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

                @Throws(Exception::class)
            
    public right(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.rightTimeElapsedHelper!.delay= ((SCALE_VALUE -xAnalogValue) shr this.reduceTimeFactor)

    
                        if(this.rightTimeElapsedHelper!.isTime())
                        
                                    {
                                    right()

                                    }
                                
}


                @Throws(Exception::class)
            
    public left(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.leftTimeElapsedHelper!.delay= ((SCALE_VALUE +xAnalogValue) shr this.reduceTimeFactor)

    
                        if(this.leftTimeElapsedHelper!.isTime())
                        
                                    {
                                    left()

                                    }
                                
}


                @Throws(Exception::class)
            
    public up(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.upTimeElapsedHelper!.delay= ((SCALE_VALUE -xAnalogValue) shr this.reduceTimeFactor)

    
                        if(this.upTimeElapsedHelper!.isTime())
                        
                                    {
                                    up()

                                    }
                                
}


                @Throws(Exception::class)
            
    public down(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
var collidableDestroyableDamageableLayer = collidableDestroyableDamageableLayer
var xAnalogValue = xAnalogValue
this.downTimeElapsedHelper!.delay= ((SCALE_VALUE +xAnalogValue) shr this.reduceTimeFactor)

    
                        if(this.downTimeElapsedHelper!.isTime())
                        
                                    {
                                    down()

                                    }
                                
}


}
                
            

