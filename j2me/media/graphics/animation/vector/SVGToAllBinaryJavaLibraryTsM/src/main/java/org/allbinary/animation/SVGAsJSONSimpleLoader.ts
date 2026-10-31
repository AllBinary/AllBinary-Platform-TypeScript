
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
        
            //import { Double } from '../../../java/lang/Double.js';
            const Double = (globalThis.java?.lang?.Double ?? class {}) as typeof globalThis.java.lang.Double;
        
import { Enumeration } from '../../../java/util/Enumeration.js';
//not GWT import const Enumeration

import { GraphicsStrings } from '../../../org/allbinary/graphics/GraphicsStrings.js';
//not GWT import const GraphicsStrings

import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
type PositionStrings<T = any, U = any> = typeof PositionStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PositionStrings;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { JSONArray } from '../../../org/json/me/JSONArray.js';
//not GWT import const JSONArray

import { JSONException } from '../../../org/json/me/JSONException.js';
//not GWT import const JSONException

import { JSONObject } from '../../../org/json/me/JSONObject.js';
//not GWT import const JSONObject

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ShapeTypeFactory } from './ShapeTypeFactory.js';
//sameFolderImports - not GWT import - same folder const ShapeTypeFactory
import { ShapeType } from './ShapeType.js';
//sameFolderImports - not GWT import - same folder const ShapeType
import { Number } from './Number.js';
//sameFolderImports - not GWT import - same folder const Number

export class SVGAsJSONSimpleLoader
            extends Object
         {
        

    private static readonly instance: SVGAsJSONSimpleLoader = new SVGAsJSONSimpleLoader();

    public static getInstance(): SVGAsJSONSimpleLoader{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SVGAsJSONSimpleLoader.instance;
    
}


                //@Throws(Exception.constructor)
            
    public static main(args: string[]){

    let svgAsJson: string = "{\"svg\": {\n" +"    \"rect\": {\n" +"        \"width\": 20,\n" +"        \"fill\": \"#008c00\",\n" +"        \"height\": 20\n" +"    },\n" +"    \"xmlns\": \"http://www.w3.org/2000/svg\",\n" +"    \"width\": 20,\n" +"    \"height\": 20\n" +"}}\n";;
    

    let points: number[][] = SVGAsJSONSimpleLoader.getInstance()!.load(svgAsJson)!;;
    

    let stringBuilder: StringMaker = new StringMaker();;
    

    let size: number = points.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let size2: number = points[index]!.length
                ;;
    




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {
stringBuilder!.appendint(points[index]![index2]!);
    
stringBuilder!.append(CommonSeps.getInstance()!.COMMA);
    
}

}

console.log(stringBuilder!.toString());
    
}


    private readonly graphicsStrings: GraphicsStrings = GraphicsStrings.getInstance()!;

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
    let root: JSONObject = new JSONObject(svgAsJson);;
    

    let svgValue: any = root.opt(KEY_SVG)!;;
    

    let svg: JSONObject = (svgValue == 
                                    null
                                 ? root : this.asObject(svgValue, KEY_SVG));;
    

    let pointVector: BasicArrayList = new BasicArrayListD();;
    

    let keys: Enumeration<any> = svg.keys()!;;
    

        while(keys.hasMoreElements())
        {

    let key: string = keys.nextElement()! as string;;
    

    let value: any = svg.opt(key)!;;
    

                        if((this.shapeTypeFactory!.KEY_LINE === key))
                        
                                    {
                                    this.addShapes(pointVector, value, this.shapeTypeFactory!.LINE);
    

                                    }
                                
                             else 
                        if((this.shapeTypeFactory === key))
                        
                                    {
                                    this.addShapes(pointVector, value, this.shapeTypeFactory!.CIRCLE);
    

                                    }
                                
                             else 
                        if((this.shapeTypeFactory!.KEY_RECT === key) || (this.shapeTypeFactory!.KEY_RECTANGLE === key))
                        
                                    {
                                    this.addShapes(pointVector, value, this.shapeTypeFactory!.RECTANGLE);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toPoints(pointVector);;
    
 }
 catch (caught: any) {
 if (caught instanceof JSONException) {
  const e = caught;
  



                            throw new IllegalArgumentException(ERROR_PARSE_SVG_JSON, e);
                    

 }
  else { throw caught; } }
 
}


                //@Throws(Exception.constructor)
            
    addShapes(pointVector: BasicArrayList, value: any, shapeType: ShapeType){

                        if(value instanceof JSONArray)
                        
                                    {
                                    
    let array: JSONArray = value as JSONArray;;
    

    let size: number = array.length()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.addShape(pointVector, array.opt(index), shapeType);
    
}


                                    }
                                
                        else {
                            this.addShape(pointVector, value, shapeType);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    addShape(pointVector: BasicArrayList, value: any, shapeType: ShapeType){

    let shape: JSONObject = this.asObject(value, shapeType!.getName())!;;
    

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

    let cx: number = this.readInt(circle, KEY_CX)!;;
    

    let cy: number = this.readInt(circle, KEY_CY)!;;
    

    let radius: number = this.readInt(circle, KEY_R)!;;
    




                        for (
    let index: number = 0;index <= CIRCLE_SEGMENTS; index++)
        {

    let angle: number = (Math.PI *2.0d *index) /CIRCLE_SEGMENTS;;
    

    let x: number = globalThis.Math.trunc(Math.round(cx +(Math.cos(angle) *radius)));;
    

    let y: number = globalThis.Math.trunc(Math.round(cy +(Math.sin(angle) *radius)));;
    
this.addPoint(pointVector, x, y);
    
}

this.addSeparator(pointVector);
    
}


                //@Throws(Exception.constructor)
            
    addRectangle(pointVector: BasicArrayList, rectangle: JSONObject){

    let x: number = this.readInt(rectangle, KEY_X, 0)!;;
    

    let y: number = this.readInt(rectangle, KEY_Y, 0)!;;
    

    let width: number = this.readInt(rectangle, this.graphicsStrings!.WIDTH)!;;
    

    let height: number = this.readInt(rectangle, this.graphicsStrings!.HEIGHT)!;;
    
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

readInt(...args: any[]): any {
   
    if (args.length === 2 && typeof args[1] === 'string') return this.readInt$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[1] === 'string' && typeof args[2] === 'number') return this.readInt$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: readInt'); }
  
                //@Throws(Exception.constructor)
            
    readInt$overload1(anyType: JSONObject, key: string): number{

    let value: any = anyType!.get(key)!;;
    

                        if(value == 
                                    null
                                )
                        
                                    {
                                    


                            throw new IllegalArgumentException(ERROR_MISSING_KEY_PREFIX +key);
                    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toInt(value, key);;
    
}


    readInt$overload2(anyType: JSONObject, key: string, defaultValue: number): number{

 try { 
                        if(anyType!.has(key))
                        
                                    {
                                    
    let value: any = anyType!.get(key)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.toInt(value, key);;
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultValue;
    
}


    toInt(value: any, key: string): number{

                        if(value instanceof Number)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc(Math.round((value as Number).doubleValue()));
    

                                    }
                                

                        if(((value: any) => typeof value === 'string' || value instanceof String)(value))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return globalThis.Math.trunc(Math.round(Double.parseDouble(value as string)));
    

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
                                

    let points: number[][] = new Array(pointVector!.size()).fill(null).map(() => new Array(2).fill(null));;
    




                        for (
    let index: number = 0;index < pointVector!.size(); index++)
        {

    let point: number[] = 
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

