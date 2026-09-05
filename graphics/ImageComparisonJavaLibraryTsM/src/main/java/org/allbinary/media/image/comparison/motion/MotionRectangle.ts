
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Cloneable } from '../../../../../../java/lang/Cloneable.js';
        
import { Rectangle } from '../../../../../../java/awt/Rectangle.js';
//not GWT import const Rectangle = globalThis.java.awt.Rectangle;

      
import { Vector } from '../../../../../../java/util/Vector.js';
//not GWT import const Vector = globalThis.java.util.Vector;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MotionRectangle
            extends Object
         implements Cloneable {
        

    private rectangle: Rectangle;

    private pixelDeltaVector: BasicArrayList;

public constructor (rectangle: Rectangle){

            super();
        this.setRectangle(rectangle);
    
this.setPixelDeltaVector(new BasicArrayListD());
    
}


    public getRectangle(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rectangle;
    
}


    public setRectangle(rectangle: Rectangle){
this.rectangle= rectangle;
    
}


    public getPixelDeltaVector(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pixelDeltaVector;
    
}


    public setPixelDeltaVector(pixelDeltaVector: BasicArrayList){
this.pixelDeltaVector= pixelDeltaVector;
    
}


    public clone(): any{

    var motionRectangle: MotionRectangle = new MotionRectangle(this.getRectangle()!.clone() as Rectangle);;
    
motionRectangle!.setPixelDeltaVector(this.getPixelDeltaVector()!.clone() as BasicArrayList);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionRectangle;
    
}


}



