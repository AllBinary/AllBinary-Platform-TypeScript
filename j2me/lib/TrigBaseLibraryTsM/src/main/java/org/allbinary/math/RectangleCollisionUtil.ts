
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


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RectangleCollisionUtil
            extends Object
         {
        

    private static readonly instance: RectangleCollisionUtil = new RectangleCollisionUtil();

    public static getInstance(): RectangleCollisionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RectangleCollisionUtil.instance;
    
}

private constructor (){

            super();
        }


    public isCollision(rectX1: number, rectY1: number, rectX2: number, rectY2: number, rect2X1: number, rect2Y1: number, rect2X2: number, rect2Y2: number): boolean{

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


    public isInside(rectX1: number, rectY1: number, rectX2: number, rectY2: number, x: number, y: number): boolean{

                        if(x >= rectX2 || y >= rectY2 || x <= rectX1 || y <= rectY1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


}
                
            

