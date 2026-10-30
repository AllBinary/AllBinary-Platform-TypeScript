
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
            import { Double } from '../../../java/lang/Double.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

















                                        
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

    let tokens: BasicArrayList = new BasicArrayListD();;
    

    let sb: StringBuffer = new StringBuffer();;
    




                        for (
    let i: number = 0;i < d.length; i++)
        {

    let c: string = d[i]!;;
    

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

    let res: string[] = new Array(tokens.size());;
    
tokens.toArrayType(res);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return res;
    
}


    public static parsePath(d: string, outX: number[], outY: number[], maxPoints: number): number{

    let tokens: string[] = tokenize(d)!;;
    

    let count: number[] = [0];;
    

    let fixedPoint: FixedPoint = FixedPoint.getInstance()!;;
    

    let curX: number = 0;let curY: number = 0;;
    

    let startX: number = 0;let startY: number = 0;;
    

    let idx: number = 0;;
    

        while(idx < tokens.length)
        {

    let tok: string = tokens[idx++]!;;
    

    let cmd: string = tok[0]!;;
    

                        if(cmd == 'M'.charCodeAt(0) || cmd == 'm'.charCodeAt(0))
                        
                                    {
                                    
    let x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

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
                                    
    let x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

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
                                    
    let y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

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
                                    
    let x1: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let y1: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let x2: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let y2: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let x3: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let y3: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

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
                                    
    let x: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

    let y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

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
                                    
    let y: number = fixedPoint!.toFixed(Double.parseDouble(tokens[idx++]!))!;;
    

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

    let c: string = tok[0]!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "MmLlVvCcZz".indexOf(c) >= 0;
    
}


}

