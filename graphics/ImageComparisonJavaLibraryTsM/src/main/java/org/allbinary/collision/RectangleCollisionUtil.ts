
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
        
import { awt } from '../../../java/awt.js';
//not GWT import const awt

import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
//not GWT import const GPoint

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Rectangle } from './Rectangle.js';
//not GWT import - same folder const Rectangle

export class RectangleCollisionUtil
            extends Object
         {
        
static isCollision(...args: any[]): any {
   
    if (args.length === 2) return this.isCollision$overload1(args[0], args[1]);
   
    if (args.length === 2) return this.isCollision$overload2(args[0], args[1]);
   
    if (args.length === 8 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[2] === 'number' && typeof args[3] === 'number' && typeof args[4] === 'number' && typeof args[5] === 'number' && typeof args[6] === 'number' && typeof args[7] === 'number') return this.isCollision$overload3(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
   
   throw new TypeError('No matching overload: isCollision'); }
  
    public static isCollision$overload1(rectangle: Rectangle, point: GPoint): boolean{

                        if(point.getX() > (globalThis.Math.trunc(rectangle.x) +rectangle.getWidth()) || point.getY() > (globalThis.Math.trunc(rectangle.y) +rectangle.getHeight()) || point.getX() < rectangle.x || point.getY() < rectangle.y)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public static isCollision$overload2(rectangle1: Rectangle, rectangle2: Rectangle): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RectangleCollisionUtil.isCollision(rectangle1.x, rectangle1.y, rectangle1.x +rectangle1.width, rectangle1.y +rectangle1.height, rectangle2.x, rectangle2.y, rectangle2.x +rectangle2.width, rectangle2.y +rectangle2.height);;
    
}


    static isCollision$overload3(rectX1: number, rectY1: number, rectX2: number, rectY2: number, rect2X1: number, rect2Y1: number, rect2X2: number, rect2Y2: number): boolean{

                        if(rect2X1 >= rectX2 || rect2Y1 >= rectY2 || rect2X2 <= rectX1 || rect2Y2 <= rectY1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


private constructor (){

            super();
        }


}

