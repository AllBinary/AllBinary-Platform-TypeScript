
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
        import { GPoint } from './GPoint.js';

export class CustomGPoint extends GPoint {
        

    public static readonly NULL_CUSTOM_POINT: CustomGPoint = new CustomGPoint(0, 0, 0);

    public static getInstance(point: GPoint): CustomGPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CustomGPoint(point.getX(), point.getY(), point.getZ());
    
}


    public static getInstance3(x: number, y: number): CustomGPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CustomGPoint(x, y, 3);
    
}


    private cx: number= 0

    private cy: number= 0

    private cz: number= 0
public constructor (x: number, y: number, z: number){
            super(x, y, z);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public setX(x: number){
this.cx= x;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cx;
    
}


    public setY(y: number){
this.cy= y;
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cy;
    
}


    public setZ(z: number){
this.cz= z;
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cz;
    
}


}
                
            

