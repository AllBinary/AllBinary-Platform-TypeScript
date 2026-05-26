
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
      
import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Rectangle } from './Rectangle.js';

export class RectangleCollisionUtil
            extends Object
         {
        

    public static isCollision(rectangle: Rectangle, point: GPoint): boolean{

                        if(point.getX() > (Math.round(rectangle.x) +rectangle.getWidth()) || point.getY() > (Math.round(rectangle.y) +rectangle.getHeight()) || point.getX() < rectangle.x || point.getY() < rectangle.y)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


    public static isCollision(rectangle1: Rectangle, rectangle2: Rectangle): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RectangleCollisionUtil.isCollision(rectangle1.x, rectangle1.y, rectangle1.x +rectangle1.width, rectangle1.y +rectangle1.height, rectangle2.x, rectangle2.y, rectangle2.x +rectangle2.width, rectangle2.y +rectangle2.height);;
    
}


    static isCollision(rectX1: number, rectY1: number, rectX2: number, rectY2: number, rect2X1: number, rect2Y1: number, rect2X2: number, rect2Y2: number): boolean{

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
                
            

