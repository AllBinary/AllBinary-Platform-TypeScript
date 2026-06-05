
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
        



            import { Object } from '../../../java/lang/Object.js';


        
import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ViewPositionBase extends GPoint {
        

    public static readonly NULL_VIEW_POSITION: ViewPositionBase = new ViewPositionBase(0, 0, 0);

protected constructor (x: number, y: number, z: number){
            super(x, y, z);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public getX2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getX();;
    
}


    public getY2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getY();;
    
}


    public getZ2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getZ();;
    
}


    public setAllbinaryLayer(allbinaryLayer: any = {}){
}


}
                
            

