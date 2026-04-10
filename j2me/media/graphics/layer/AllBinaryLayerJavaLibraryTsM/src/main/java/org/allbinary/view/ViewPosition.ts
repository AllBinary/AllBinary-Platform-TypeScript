
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
        



import { GPoint } from "../../../org/allbinary/graphics/GPoint.js";

    
import { AllBinaryLayer } from "../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class ViewPosition extends GPoint {
        

    public static readonly NULL_VIEW_POSITION: ViewPosition = new ViewPosition();
        
        

    private allbinaryLayer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        
public constructor ()                        

                            : super(0, 0, 0){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (x: number, y: number)                        

                            : super(x, y, 0){

            super();
            var x = x
var y = y


                            //For kotlin this is before the body of the constructor.
                    
}

protected constructor (x: number, y: number, z: number)                        

                            : super(x, y, z){

            super();
            var x = x
var y = y
var z = z


                            //For kotlin this is before the body of the constructor.
                    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getXP();
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getYP();
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.allbinaryLayer!.getZP();
    
}


    public getX2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getX() +this.allbinaryLayer!.getWidth();
    
}


    public getY2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getY() +this.allbinaryLayer!.getHeight();
    
}


    public getZ2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return (this.getZ() +this.allbinaryLayer!.getDepth()).toInt();
    
}


    public setAllbinaryLayer(allbinaryLayer: AllBinaryLayer){
var allbinaryLayer = allbinaryLayer
this.allbinaryLayer= allbinaryLayer
}


}
                
            

