
        /* Generated Code Do Not Modify */
        



















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathParser } from './PathParser.js';
import { FixedPoint } from './FixedPoint.js';

export class PolygonRasterizer
            extends Object
         {
        

    private static readonly instance: PolygonRasterizer = new PolygonRasterizer();

    public static getInstance(): PolygonRasterizer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getPixelBuffer(svgPath: string, pathX: number[], pathY: number[], pixelBuffer: number[], width: number, height: number): number[]{

    var pointCount: number = PathParser.parsePath(svgPath, pathX, pathY, pathX!.length)!;;
    




                        for (
    var i: number = 0;i < pixelBuffer!.length; i++)
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
    

    var fixedPoint: FixedPoint = FixedPoint.getInstance()!;;
    

    var x: number[] = new Array(numPoints);;
    

    var y: number[] = new Array(numPoints);;
    

    var minY: number = height;var maxY: number = 0;;
    




                        for (
    var i: number = 0;i < numPoints; i++)
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

    var scanlineX: number[] = new Array(numPoints);;
    




                        for (
    var scanY: number = minY;scanY <= maxY; scanY++)
        {

    var intersectCount: number = 0;;
    




                        for (
    var i: number = 0;i < numPoints; i++)
        {

    var next: number = (i +1) % numPoints;;
    

    var x1: number = x[i]!;var y1: number = y[i]!;;
    

    var x2: number = x[next]!;var y2: number = y[next]!;;
    

                        if((y1 < scanY && y2 >= scanY) || (y2 < scanY && y1 >= scanY))
                        
                                    {
                                    
                        if(y2 != y1)
                        
                                    {
                                    
    var interX: number = x1 +(scanY -y1) *(x2 -x1) /(y2 -y1);;
    
scanlineX[intersectCount++]= interX;
    

                                    }
                                

                                    }
                                
}





                        for (
    var i: number = 0;i < intersectCount -1; i++)
        {




                        for (
    var j: number = i +1;j < intersectCount; j++)
        {

                        if(scanlineX[i] > scanlineX[j])
                        
                                    {
                                    
    var temp: number = scanlineX[i]!;;
    
scanlineX[i]= scanlineX[j]!;
    
scanlineX[j]= temp;
    

                                    }
                                
}

}





                        for (
    var i: number = 0;i < intersectCount; )
        {

                        if(i +1 >= intersectCount)
                        
                                    //Otherwise - thenStmt - BreakStmt


    var startX: number = scanlineX[i]!;;
    

    var endX: number = scanlineX[i +1]!;;
    

                        if(startX < 0)
                        startX= 0

                        if(endX >= width)
                        endX= width -1

    var rowOffset: number = scanY *width;;
    




                        for (
    var pixelX: number = startX;pixelX <= endX; pixelX++)
        {
buffer[rowOffset +pixelX]= colorRGB;
    
}

}

}

}


    public main(args: string[]){

    var width: number = 100;;
    

    var height: number = 100;;
    

    var pathX: number[] = new Array(200);;
    

    var pathY: number[] = new Array(200);;
    

    var pixelBuffer: number[] = new Array(width *height);;
    

    var svgPath: string = "M 32.139812,81.554575 14.450128,74.294372 V 50.000034 25.705697 l 17.73231,-7.268329 C 41.935209,14.439788 49.953112,11.168898 50,11.168723 c 0.04689,-1.74e-4 8.064791,3.270238 17.817562,7.267583 l 17.73231,7.267899 V 50 74.295795 l -17.73231,7.2679 c -9.752771,3.997344 -17.789855,7.264116 -17.860188,7.259492 -0.07033,-0.0046 -8.088235,-3.275499 -17.817562,-7.268612 z";;
    
PolygonRasterizer.getInstance()!.getPixelBuffer(svgPath, pathX, pathY, pixelBuffer, width, height);
    
}


}
                
            

