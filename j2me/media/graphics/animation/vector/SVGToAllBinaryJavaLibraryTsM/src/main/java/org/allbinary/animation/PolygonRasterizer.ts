
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathParser } from './PathParser.js';
//sameFolderImports - not GWT import - same folder const PathParser
import { FixedPoint } from './FixedPoint.js';
//sameFolderImports - not GWT import - same folder const FixedPoint

export class PolygonRasterizer
            extends Object
         {
        

    private static readonly instance: PolygonRasterizer = new PolygonRasterizer();

    public static getInstance(): PolygonRasterizer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PolygonRasterizer.instance;
    
}


    public getPixelBuffer(svgPath: string, pathX: number[], pathY: number[], pixelBuffer: number[], width: number, height: number): number[]{

    let pointCount: number = PathParser.parsePath(svgPath, pathX, pathY, pathX!.length)!;;
    




                        for (
    let i: number = 0;i < pixelBuffer!.length; i++)
        {
pixelBuffer[i]= 0xFFFFFFFF;
    
}

PolygonRasterizer.getInstance()!.fillPolygon(pathX, pathY, pointCount, pixelBuffer, width, height, 0xFFFF00FF);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pixelBuffer;
    
}


    public fillPolygon(polyX: number[], polyY: number[], numPoints: number, buffer: number[], width: number, height: number, colorRGB: number){

                        if(numPoints < 3)
                        


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

    let fixedPoint: FixedPoint = FixedPoint.getInstance()!;;
    

    let x: number[] = new Array(numPoints);;
    

    let y: number[] = new Array(numPoints);;
    

    let minY: number = height;let maxY: number = 0;;
    




                        for (
    let i: number = 0;i < numPoints; i++)
        {
x[i]= fixedPoint!.toInt(polyX[i]!);
    
y[i]= fixedPoint!.toInt(polyY[i]!);
    

                        if(y[i] < minY)
                        minY= y[i]!

                        if(y[i] > maxY)
                        maxY= y[i]!
}


                        if(minY < 0)
                        minY= 0

                        if(maxY >= height)
                        maxY= height -1

    let scanlineX: number[] = new Array(numPoints);;
    




                        for (
    let scanY: number = minY;scanY <= maxY; scanY++)
        {

    let intersectCount: number = 0;;
    




                        for (
    let i: number = 0;i < numPoints; i++)
        {

    let next: number = (i +1) % numPoints;;
    

    let x1: number = x[i]!;let y1: number = y[i]!;;
    

    let x2: number = x[next]!;let y2: number = y[next]!;;
    

                        if((y1 < scanY && y2 >= scanY) || (y2 < scanY && y1 >= scanY))
                        
                                    {
                                    
                        if(y2 != y1)
                        
                                    {
                                    
    let interX: number = x1 +globalThis.Math.trunc((scanY -y1) *(x2 -x1) /(y2 -y1));;
    
scanlineX[intersectCount++]= interX;
    

                                    }
                                

                                    }
                                
}





                        for (
    let i: number = 0;i < intersectCount -1; i++)
        {




                        for (
    let j: number = i +1;j < intersectCount; j++)
        {

                        if(scanlineX[i] > scanlineX[j])
                        
                                    {
                                    
    let temp: number = scanlineX[i]!;;
    
scanlineX[i]= scanlineX[j]!;
    
scanlineX[j]= temp;
    

                                    }
                                
}

}





                        for (
    let i: number = 0;i < intersectCount; )
        {

                        if(i +1 >= intersectCount)
                        
                                    //Otherwise - thenStmt - BreakStmt


    let startX: number = scanlineX[i]!;;
    

    let endX: number = scanlineX[i +1]!;;
    

                        if(startX < 0)
                        startX= 0

                        if(endX >= width)
                        endX= width -1

    let rowOffset: number = scanY *width;;
    




                        for (
    let pixelX: number = startX;pixelX <= endX; pixelX++)
        {
buffer[rowOffset +pixelX]= colorRGB;
    
}

}

}

}


    public main(args: string[]){

    let width: number = 100;;
    

    let height: number = 100;;
    

    let pathX: number[] = new Array(200);;
    

    let pathY: number[] = new Array(200);;
    

    let pixelBuffer: number[] = new Array(width *height);;
    

    let svgPath: string = "M 32.139812,81.554575 14.450128,74.294372 V 50.000034 25.705697 l 17.73231,-7.268329 C 41.935209,14.439788 49.953112,11.168898 50,11.168723 c 0.04689,-1.74e-4 8.064791,3.270238 17.817562,7.267583 l 17.73231,7.267899 V 50 74.295795 l -17.73231,7.2679 c -9.752771,3.997344 -17.789855,7.264116 -17.860188,7.259492 -0.07033,-0.0046 -8.088235,-3.275499 -17.817562,-7.268612 z";;
    
PolygonRasterizer.getInstance()!.getPixelBuffer(svgPath, pathX, pathY, pixelBuffer, width, height);
    
}


}

