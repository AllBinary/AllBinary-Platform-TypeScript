
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FixedPoint } from './FixedPoint.js';
//sameFolderImports - not GWT import - same folder const FixedPoint

export class PGUtil
            extends Object
         {
        

    private static readonly instance: PGUtil = new PGUtil();

    public static getInstance(): PGUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PGUtil.instance;
    
}


    public flattenCubicBezier(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, outX: number[], outY: number[], count: number[], maxPoints: number){

    let fixedPoint: FixedPoint = FixedPoint.getInstance()!;;
    

    let steps: number = 10;;
    




                        for (
    let i: number = 1;i <= steps; i++)
        {

    let t: number = fixedPoint!.div(fixedPoint!.toFixed(i), fixedPoint!.toFixed(steps))!;;
    

    let mt: number = fixedPoint!.ONE -t;;
    

    let mt3: number = fixedPoint!.mul(fixedPoint!.mul(mt, mt), mt)!;;
    

    let mt2t3: number = 3 *fixedPoint!.mul(fixedPoint!.mul(mt, mt), t);;
    

    let mtt23: number = 3 *fixedPoint!.mul(fixedPoint!.mul(mt, t), t);;
    

    let t3: number = fixedPoint!.mul(fixedPoint!.mul(t, t), t)!;;
    

    let x: number = fixedPoint!.mul(mt3, x0) +fixedPoint!.mul(mt2t3, x1) +fixedPoint!.mul(mtt23, x2) +fixedPoint!.mul(t3, x3);;
    

    let y: number = fixedPoint!.mul(mt3, y0) +fixedPoint!.mul(mt2t3, y1) +fixedPoint!.mul(mtt23, y2) +fixedPoint!.mul(t3, y3);;
    

                        if(count[0] < maxPoints)
                        
                                    {
                                    outX[count[0]]= x;
    
outY[count[0]]= y;
    
count[0]++;
    

                                    }
                                
}

}


}

