
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Double } from '../../../java/lang/Double.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { StringBuffer } from './StringBuffer.js';
//not GWT import - same folder const StringBuffer
import { FixedPoint } from './FixedPoint.js';
//not GWT import - same folder const FixedPoint
import { PGUtil } from './PGUtil.js';
//not GWT import - same folder const PGUtil

export class PathParser
            extends Object
         {
        

    static tokenize(d: string): string[]{

    var tokens: BasicArrayList = new BasicArrayListD();;
    

    var sb: StringBuffer = new StringBuffer();;
    




                        for (
    var i: number = 0;i < d.length; i++)
        {

    var c: string = d[i]!;;
    

                        if(c == ' '.charCodeAt(0) || c == ','.charCodeAt(0) || c == '\t'.charCodeAt(0) || c == '\n'.charCodeAt(0) || c == '\r'.charCodeAt(0))
                        
                                    {
                                    
                        if(sb.length() > 0)
                        
                                    {
                                    tokens.add(sb.toString());
    
sb.setLength(0);
    

                                    }
                                

                                    }
                                
                             else 
                        if(c == 'M'.charCodeAt(0) || c == 'm'.charCodeAt(0) || c == 'L'.charCodeAt(0) || c == 'l'.charCodeAt(0) || c == 'V'.charCodeAt(0) || c == 'v'.charCodeAt(0) || c == 'C'.charCodeAt(0) || c == 'c'.charCodeAt(0) || c == 'Z'.charCodeAt(0) || c == 'z'.charCodeAt(0))
                        
                                    {
                                    
                        if(sb.length() > 0)
                        
                                    {
                                    tokens.add(sb.toString());
    
sb.setLength(0);
    

                                    }
                                
tokens.add(c.slice(, ).join(''));
    

                                    }
                                
                        else {
                            sb.append(c);
    

                        }
                            
}


                        if(sb.length() > 0)
                        tokens.add(sb.toString())

    var res: string[] = new Array(tokens.size());;
    
tokens.toArrayType(res);
    



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
    

                        if(cmd == 'M'.charCodeAt(0) || cmd == 'm'.charCodeAt(0))
                        
                                    {
                                    
    var x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'm'.charCodeAt(0))
                        
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
                        if(cmd == 'L'.charCodeAt(0) || cmd == 'l'.charCodeAt(0))
                        
                                    {
                                    
    var x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'l'.charCodeAt(0))
                        
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
                        if(cmd == 'V'.charCodeAt(0) || cmd == 'v'.charCodeAt(0))
                        
                                    {
                                    
    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'v'.charCodeAt(0))
                        
                                    {
                                    y += curY;
    

                                    }
                                
curY= y;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                
                             else 
                        if(cmd == 'C'.charCodeAt(0) || cmd == 'c'.charCodeAt(0))
                        
                                    {
                                    
    var x1: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y1: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var x2: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y2: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var x3: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y3: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'c'.charCodeAt(0))
                        
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
                        if(cmd == 'Z'.charCodeAt(0) || cmd == 'z'.charCodeAt(0))
                        
                                    {
                                    curX= startX;
    
curY= startY;
    
outX[count[0]]= curX;
    
outY[count[0]]= curY;
    
count[0]++;
    

                                    }
                                

        while(idx < tokens.length && !isCommand(tokens[idx]!))
        {

                        if(cmd == 'M'.charCodeAt(0) || cmd == 'm'.charCodeAt(0) || cmd == 'L'.charCodeAt(0) || cmd == 'l'.charCodeAt(0))
                        
                                    {
                                    
    var x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'm'.charCodeAt(0) || cmd == 'l'.charCodeAt(0))
                        
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
                        if(cmd == 'V'.charCodeAt(0) || cmd == 'v'.charCodeAt(0))
                        
                                    {
                                    
    var y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

                        if(cmd == 'v'.charCodeAt(0))
                        
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



