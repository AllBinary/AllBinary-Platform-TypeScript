
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Double } from '../../../java/lang/Double.js';
        
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StringBuffer } from './StringBuffer.js';
//not GWT import const StringBuffer = globalThis.org.allbinary.animation.StringBuffer;

                import { FixedPoint } from './FixedPoint.js';
//not GWT import const FixedPoint = globalThis.org.allbinary.animation.FixedPoint;

                import { PGUtil } from './PGUtil.js';
//not GWT import const PGUtil = globalThis.org.allbinary.animation.PGUtil;

                
export class PathParser
            extends Object
         {
        

    static tokenize(d: string): string[]{

    var tokens: Vector = new Vector();;
    

    var sb: StringBuffer = new StringBuffer();;
    




                        for (
    var i: number = 0;i < d.length; i++)
        {

    var c: string = d[i]!;;
    

                        if(c == ' ' || c == ',' || c == '\t' || c == '\n' || c == '\r')
                        
                                    {
                                    
                        if(sb.length() > 0)
                        
                                    {
                                    tokens.addElement(sb.toString());
    
sb.setLength(0);
    

                                    }
                                

                                    }
                                
                             else 
                        if(c == 'M' || c == 'm' || c == 'L' || c == 'l' || c == 'V' || c == 'v' || c == 'C' || c == 'c' || c == 'Z' || c == 'z')
                        
                                    {
                                    
                        if(sb.length() > 0)
                        
                                    {
                                    tokens.addElement(sb.toString());
    
sb.setLength(0);
    

                                    }
                                
tokens.addElement(c.slice(, ).join(''));
    

                                    }
                                
                        else {
                            sb.append(c);
    

                        }
                            
}


                        if(sb.length() > 0)
                        tokens.addElement(sb.toString())

    var res: string[] = new Array(tokens.length);;
    
tokens.copyInto(res);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return res;
    
}


    public static parsePath(d: string, outX: number[], outY: number[], maxPoints: number): number{

    var tokens: string[] = tokenize(d)!;;
    

    var count: number[] = [0];;
    

    var fixedPoint: FixedPoint = FixedPoint.getInstance()!;;
    

    var curX: number = 0;var curY: number = 0;;
    

    var startX: number = 0;var startY: number = 0;;
    

    var idx: number = 0;;
    

        while(idx < tokens.length)
        {

    var tok: string = tokens[idx++]!;;
    

    var cmd: string = tok[0]!;;
    

                        if(cmd == 'M' || cmd == 'm')
                        
                                    {
                                    
    var x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'm')
                        
                                    {
                                    x += curX;
    
y += curY;
    

                                    }
                                
curX= x;
    
curY= y;
    
startX= x;
    
startY= y;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                
                             else 
                        if(cmd == 'L' || cmd == 'l')
                        
                                    {
                                    
    var x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'l')
                        
                                    {
                                    x += curX;
    
y += curY;
    

                                    }
                                
curX= x;
    
curY= y;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                
                             else 
                        if(cmd == 'V' || cmd == 'v')
                        
                                    {
                                    
    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'v')
                        
                                    {
                                    y += curY;
    

                                    }
                                
curY= y;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                
                             else 
                        if(cmd == 'C' || cmd == 'c')
                        
                                    {
                                    
    var x1: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y1: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var x2: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y2: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var x3: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y3: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'c')
                        
                                    {
                                    x1 += curX;
    
y1 += curY;
    
x2 += curX;
    
y2 += curY;
    
x3 += curX;
    
y3 += curY;
    

                                    }
                                
PGUtil.getInstance()!.flattenCubicBezier(curX, curY, x1, y1, x2, y2, x3, y3, outX, outY, count, maxPoints);
    
curX= x3;
    
curY= y3;
    

                                    }
                                
                             else 
                        if(cmd == 'Z' || cmd == 'z')
                        
                                    {
                                    curX= startX;
    
curY= startY;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                

        while(idx < tokens.length && !isCommand(tokens[idx]!))
        {

                        if(cmd == 'M' || cmd == 'm' || cmd == 'L' || cmd == 'l')
                        
                                    {
                                    
    var x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'm' || cmd == 'l')
                        
                                    {
                                    x += curX;
    
y += curY;
    

                                    }
                                
curX= x;
    
curY= y;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                
                             else 
                        if(cmd == 'V' || cmd == 'v')
                        
                                    {
                                    
    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'v')
                        
                                    {
                                    y += curY;
    

                                    }
                                
curY= y;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return count[0]!;
    
}


    static isCommand(tok: string): boolean{

    var c: string = tok[0]!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "MmLlVvCcZz".indexOf(c) >= 0;
    
}


}



