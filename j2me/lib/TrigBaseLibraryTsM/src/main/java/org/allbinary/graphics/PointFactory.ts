
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

export class PointFactory
            extends Object
         {
        

    private static readonly instance: PointFactory = new PointFactory();

    public static getInstance(): PointFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointFactory.instance;
    
}


    public ZERO_ZERO: GPoint = this.createXYZ(0, 0, 0)!;

    public init(){
}

private constructor (){

            super();
        }


    public createXY(x: number, y: number): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GPoint(x, y, 0);
    
}


    public createXYZ(x: number, y: number, z: number): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new GPoint(x, y, z);
    
}


}
                
            

