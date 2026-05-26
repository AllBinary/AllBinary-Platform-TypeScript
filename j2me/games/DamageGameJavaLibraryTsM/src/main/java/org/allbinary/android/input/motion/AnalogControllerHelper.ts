
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AnalogControllerConfigurationFactory } from './AnalogControllerConfigurationFactory.js';

export class AnalogControllerHelper
            extends Object
         {
        

    private readonly reduceTimeFactor: number;

public constructor (reduceTimeFactor: number){

            super();
        this.reduceTimeFactor= reduceTimeFactor;
    
}


    private readonly SCALE_VALUE: number = AnalogControllerConfigurationFactory.getInstance()!.SCALE_VALUE;

    private readonly rightTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly leftTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly downTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly upTimeElapsedHelper: TimeDelayHelper = new TimeDelayHelper(0);

                //@Throws(Exception.constructor)
            
    public right(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
this.rightTimeElapsedHelper!.delay= ((this.SCALE_VALUE -xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.rightTimeElapsedHelper!.isTimeTNT())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.right();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public left(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
this.leftTimeElapsedHelper!.delay= ((this.SCALE_VALUE +xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.leftTimeElapsedHelper!.isTimeTNT())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.left();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public up(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
this.upTimeElapsedHelper!.delay= ((this.SCALE_VALUE -xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.upTimeElapsedHelper!.isTimeTNT())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.up();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public down(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer, xAnalogValue: number){
this.downTimeElapsedHelper!.delay= ((this.SCALE_VALUE +xAnalogValue)>>this.reduceTimeFactor);
    

                        if(this.downTimeElapsedHelper!.isTimeTNT())
                        
                                    {
                                    collidableDestroyableDamageableLayer!.down();
    

                                    }
                                
}


}
                
            

