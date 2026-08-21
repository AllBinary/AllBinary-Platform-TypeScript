
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
        
            import { Exception } from '../../../java/lang/Exception.js';
        
            import { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.js';
        
            import { System } from '../../../java/lang/System.js';
        
            import { Math } from '../../../java/lang/Math.js';
        
            import { Double } from '../../../java/lang/Double.js';
        
import { Enumeration } from '../../../java/util/Enumeration.js';
      
import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
      
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
      
import { PositionStrings } from '../../../org/allbinary/math/PositionStrings.js';
      
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
      
import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
      
import { JSONArray } from '../../../org/json/me/JSONArray.js';
      
import { JSONException } from '../../../org/json/me/JSONException.js';
      
import { JSONObject } from '../../../org/json/me/JSONObject.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShapeTypeFactory } from './ShapeTypeFactory.js';
import { ShapeType } from './ShapeType.js';
import { Number } from './Number.js';

export class SVGAsJSONSimpleLoader
            extends Object
         {
        

    private static readonly instance: SVGAsJSONSimpleLoader = new SVGAsJSONSimpleLoader();

    public static getInstance(): SVGAsJSONSimpleLoader{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Exception.constructor)
            
    public static main(args: string[]){

    var svgAsJson: string = "{\"svg\": {\n" +"    \"rect\": {\n" +"        \"width\": 20,\n" +"        \"fill\": \"#008c00\",\n" +"        \"height\": 20\n" +"    },\n" +"    \"xmlns\": \"http://www.w3.org/2000/svg\",\n" +"    \"width\": 20,\n" +"    \"height\": 20\n" +"}}\n";;
    

    var points: number[][] = SVGAsJSONSimpleLoader.getInstance()!.load(svgAsJson)!;;
    

    var stringBuilder: StringMaker = new StringMaker();;
    

    var size: number = points.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var size2: number = points[index]!.length
                ;;
    




                        for (
    var index2: number = 0;index2 < size2; index2++)
        {
stringBuilder!.appendint(points[index]![index2]!);
    
stringBuilder!.append(CommonSeps.getInstance()!.COMMA);
    
}

}

console.log(stringBuilder!.toString());
    
}


    private readonly shapeTypeFactory: ShapeTypeFactory = ShapeTypeFactory.getInstance()!;

    private readonly KEY_SVG: string = "svg";

    private readonly KEY_X1: string = "x1";

    private readonly KEY_Y1: string = "y1";

    private readonly KEY_X2: string = "x2";

    private readonly KEY_Y2: string = "y2";

    private readonly KEY_CX: string = "cx";

    private readonly KEY_CY: string = "cy";

    private readonly KEY_R: string = "r";

    private readonly KEY_X: string = PositionStrings.getInstance()!.X;

    private readonly KEY_Y: string = PositionStrings.getInstance()!.Y;

    private readonly KEY_WIDTH: string = "width";

    private readonly KEY_HEIGHT: string = "height";

    private readonly ERROR_PARSE_SVG_JSON: string = "Unable to parse SVG JSON";

    private readonly ERROR_MISSING_KEY_PREFIX: string = "Missing key: ";

    private readonly ERROR_INVALID_NUMBER_PREFIX: string = "Invalid number for key: ";

    private readonly ERROR_EXPECTED_OBJECT_PREFIX: string = "Expected object for: ";

    private readonly EMPTY_POINTS: number[][] = PrimitiveIntUtil.getTwoDimensionalArrayInstance()!;

    private readonly SHAPE_SEPARATOR: number[] = [1000,1000];

    private readonly CIRCLE_SEGMENTS: number = 16;

                //@Throws(Exception.constructor)
            
    public load(svgAsJson: string): number[][]{

                        if(svgAsJson == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EMPTY_POINTS;
    

                                    }
                                

        try {
            
    var root: JSONObject = new JSONObject(svgAsJson);;
    

    var svgValue: any = root.opt(KEY_SVG)!;;
    

    var svg: JSONObject = svgValue == 
                                    null
                                
                        ?       
                                root
                                :

                            this.asObject(svgValue, KEY_SVG);

    ;;
    

    var pointVector: BasicArrayList = new BasicArrayListD();;
    

    var keys: Enumeration<any> = svg.keys()!;;
    

        while(keys.hasMoreElements())
        {

    var key: string = keys.nextElement()! as string;;
    

    var value: any = svg.opt(key)!;;
    

                        if(this.shapeTypeFactory!.KEY_LINE. === key)
                        
                                    {
                                    this.addShapes(pointVector, value, this.shapeTypeFactory!.LINE);
    

                                    }
                                
                             else 
                        if(this.shapeTypeFactory!. === key)
                        
                                    {
                                    this.addShapes(pointVector, value, this.shapeTypeFactory!.CIRCLE);
    

                                    }
                                
                             else 
                        if(this.shapeTypeFactory!.KEY_RECT. === key || this.shapeTypeFactory!.KEY_RECTANGLE. === key)
                        
                                    {
                                    this.addShapes(pointVector, value, this.shapeTypeFactory!.RECTANGLE);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toPoints(pointVector);;
    

                //: 
} catch(e) 
            {



                            throw new IllegalArgumentException(ERROR_PARSE_SVG_JSON, e);
                    
}

}


                //@Throws(Exception.constructor)
            
    addShapes(pointVector: BasicArrayList, value: any = {}, shapeType: ShapeType){

                        if(value instanceof JSONArray)
                        
                                    {
                                    
    var array: JSONArray = value as JSONArray;;
    

    var size: number = array.length()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.addShape(pointVector, array.opt(index), shapeType);
    
}


                                    }
                                
                        else {
                            this.addShape(pointVector, value, shapeType);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    addShape(pointVector: BasicArrayList, value: any = {}, shapeType: ShapeType){

    var shape: JSONObject = this.asObject(value, shapeType!.getName())!;;
    

                        if(shapeType == this.shapeTypeFactory!.LINE)
                        
                                    {
                                    this.addLine(pointVector, shape);
    

                                    }
                                
                             else 
                        if(shapeType == this.shapeTypeFactory!.CIRCLE)
                        
                                    {
                                    this.addCircle(pointVector, shape);
    

                                    }
                                
                        else {
                            this.addRectangle(pointVector, shape);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    addLine(pointVector: BasicArrayList, line: JSONObject){
this.addPoint(pointVector, this.readInt(line, KEY_X1), this.readInt(line, KEY_Y1));
    
this.addPoint(pointVector, this.readInt(line, KEY_X2), this.readInt(line, KEY_Y2));
    
this.addSeparator(pointVector);
    
}


                //@Throws(Exception.constructor)
            
    addCircle(pointVector: BasicArrayList, circle: JSONObject){

    var cx: number = this.readInt(circle, KEY_CX)!;;
    

    var cy: number = this.readInt(circle, KEY_CY)!;;
    

    var radius: number = this.readInt(circle, KEY_R)!;;
    




                        for (
    var index: number = 0;index <= CIRCLE_SEGMENTS; index++)
        {

    var angle: number = (Math.PI *2.0d *index) /CIRCLE_SEGMENTS;;
    

    var x: number = Math.round(Math.round(cx +(Math.cos(angle) *radius)));;
    

    var y: number = Math.round(Math.round(cy +(Math.sin(angle) *radius)));;
    
this.addPoint(pointVector, x, y);
    
}

this.addSeparator(pointVector);
    
}


                //@Throws(Exception.constructor)
            
    addRectangle(pointVector: BasicArrayList, rectangle: JSONObject){

    var x: number = this.readInt(rectangle, KEY_X, 0)!;;
    

    var y: number = this.readInt(rectangle, KEY_Y, 0)!;;
    

    var width: number = this.readInt(rectangle, KEY_WIDTH)!;;
    

    var height: number = this.readInt(rectangle, KEY_HEIGHT)!;;
    
this.addPoint(pointVector, x, y);
    
this.addPoint(pointVector, x +width, y);
    
this.addPoint(pointVector, x +width, y +height);
    
this.addPoint(pointVector, x, y +height);
    
this.addPoint(pointVector, x, y);
    
this.addSeparator(pointVector);
    
}


    addPoint(pointVector: BasicArrayList, x: number, y: number){
pointVector!.add([x,y]);
    
}


    addSeparator(pointVector: BasicArrayList){
pointVector!.add([SHAPE_SEPARATOR[0],SHAPE_SEPARATOR[1]]);
    
}


                //@Throws(Exception.constructor)
            
    readInt(anyType: JSONObject, key: string): number{

    var value: any = anyType!.get(key)!;;
    

                        if(value == 
                                    null
                                )
                        
                                    {
                                    


                            throw new IllegalArgumentException(ERROR_MISSING_KEY_PREFIX +key);
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toInt(value, key);;
    
}


    readInt(anyType: JSONObject, key: string, defaultValue: number): number{

        try {
            
                        if(anyType!.has(key))
                        
                                    {
                                    
    var value: any = anyType!.get(key)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toInt(value, key);;
    

                                    }
                                

                //: 
} catch(e) 
            {
e.printStackTrace();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultValue;
    
}


    toInt(value: any = {}, key: string): number{

                        if(value instanceof Number)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(Math.round((value as Number).doubleValue()));
    

                                    }
                                

                        if(value instanceof String)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Math.round(Math.round(Double.parseDouble(value as string)));
    

                                    }
                                



                            throw new IllegalArgumentException(ERROR_INVALID_NUMBER_PREFIX +key);
                    
}


    asObject(value: Object, name: string): JSONObject{

                        if(value instanceof JSONObject)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value as JSONObject;
    

                                    }
                                



                            throw new IllegalArgumentException(ERROR_EXPECTED_OBJECT_PREFIX +name);
                    
}


    toPoints(pointVector: BasicArrayList): number[][]{

                        if(pointVector!.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EMPTY_POINTS;
    

                                    }
                                

    var points: number[][] = new Array(pointVector!.size()).fill(null).map(() => new Array(2).fill(0));;
    




                        for (
    var index: number = 0;index < pointVector!.size(); index++)
        {

    var point: number[] = 
                        //Otherwise - castExpression - ArrayType - INT
pointVector!.get(index)
                        //Otherwise - castExpression - ArrayType - INT
;;
    
points[index]= point;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return points;
    
}


}
                
            

