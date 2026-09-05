
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FixedPoint } from './FixedPoint.js';
//not GWT import - same folder const FixedPoint = globalThis.org.allbinary.animation.FixedPoint;

                
export class PGUtil
            extends Object
         {
        

    private static readonly instance: PGUtil = new PGUtil();

    public static getInstance(): PGUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public flattenCubicBezier(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, outX: number[], outY: number[], count: number[], maxPoints: number){

    var fixedPoint: FixedPoint = FixedPoint.getInstance()!;;
    

    var steps: number = 10;;
    




                        for (
    var i: number = 1;i <= steps; i++)
        {

    var t: number = fixedPoint!.div(fixedPoint!.toFixed(i), fixedPoint!.toFixed(steps))!;;
    

    var mt: number = fixedPoint!.ONE -t;;
    

    var mt3: number = fixedPoint!.mul(fixedPoint!.mul(mt, mt), mt)!;;
    

    var mt2t3: number = 3 *fixedPoint!.mul(fixedPoint!.mul(mt, mt), t);;
    

    var mtt23: number = 3 *fixedPoint!.mul(fixedPoint!.mul(mt, t), t);;
    

    var t3: number = fixedPoint!.mul(fixedPoint!.mul(t, t), t)!;;
    

    var x: number = fixedPoint!.mul(mt3, x0) +fixedPoint!.mul(mt2t3, x1) +fixedPoint!.mul(mtt23, x2) +fixedPoint!.mul(t3, x3);;
    

    var y: number = fixedPoint!.mul(mt3, y0) +fixedPoint!.mul(mt2t3, y1) +fixedPoint!.mul(mtt23, y2) +fixedPoint!.mul(t3, y3);;
    

                        if(count[0] < maxPoints)
                        
                                    {
                                    outX[count[0]]= x;
    
outY[count[0]]= y;
    
count[0]++;
    

                                    }
                                
}

}


}



