
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Double } from '../../../../../../java/lang/Double.js';
        
//not game specific package import { VectorRotationGenerator } from '../../../../../../org/allbinary/animation/VectorRotationGenerator.js';
      const VectorRotationGenerator = globalThis.org.allbinary.animation.VectorRotationGenerator;

      
//not game specific package import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { AngleFactory } from '../../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PointsUtil
            extends Object
         {
        

    private static readonly instance: PointsUtil = new PointsUtil();

    public static getInstance(): PointsUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PointsUtil.instance;
    
}


                //@Throws(Exception.constructor)
            
    public doTransforms(pointVector: BasicArrayList, angle: number, fulcrumPoint: GPoint): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return VectorRotationGenerator.getInstance()!.getListAtAngle(fulcrumPoint!.getX(), fulcrumPoint!.getY(), pointVector, AngleFactory.getInstance()!.getAt(angle.intValue()));;
    
}


}



