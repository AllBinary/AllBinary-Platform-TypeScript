
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
        



import { awt } from "../../../../../../../java/awt.js";

    
import { BufferedImage } from "../../../../../../../java/awt/image/BufferedImage.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { ColorCacheFactory } from "../../../../../../../org/allbinary/graphics/color/ColorCacheFactory.js";

    
import { ColorCacheable } from "../../../../../../../org/allbinary/graphics/color/ColorCacheable.js";

    
import { CapturedBufferedImagesCacheSingleton } from "../../../../../../../org/allbinary/input/media/image/capture/CapturedBufferedImagesCacheSingleton.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AutomaticCacheInterface } from "../../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { ColorRange } from "../../../../../../../org/allbinary/media/image/analysis/ColorRange.js";

    
import { ColorRangeInterface } from "../../../../../../../org/allbinary/media/image/analysis/ColorRangeInterface.js";

    
import { BufferedImageFrameCacheable } from "../../../../../../../org/allbinary/media/image/cache/BufferedImageFrameCacheable.js";

    
import { CommonSeps } from "../../../../../../../org/allbinary/string/CommonSeps.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class ColorAtActionScriptCondition extends BasicProfileActionScriptCondition
                , ColorAtActionScriptConditionInterface {
        

    private static readonly NAME: string = "If Color At";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private colorAtActionScriptConditionJPanel: ColorAtActionScriptConditionJPanel

    private point: Point

    private colorRangeInterface: ColorRangeInterface = new ColorRange() as ColorRangeInterface;
        
        
public constructor (node: Node)                        

                            : super(ColorAtActionScriptCondition.NAME, node){

            super();
            var node = node


                            //For kotlin this is before the body of the constructor.
                    
this.point= new Point(0, 0);
    

    var actionNode: Node = DomSearchHelper.getNode(ColorAtActionScriptConditionData.NAME, node.getChildNodes())!;
        
        
;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;
        
        
;
    

                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.LOCATION_X) == 0)
                        
                                    {
                                    
    var locationX: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.point.x= Integer(Integer.valueOf(locationX));
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.LOCATION_Y) == 0)
                        
                                    {
                                    
    var locationY: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.point.y= Integer(Integer.valueOf(locationY));
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.MIN_RED) == 0)
                        
                                    {
                                    
    var string: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getColorRangeInterface()!.setMinRed(string.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.MAX_RED) == 0)
                        
                                    {
                                    
    var string: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getColorRangeInterface()!.setMaxRed(string.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.MIN_GREEN) == 0)
                        
                                    {
                                    
    var string: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getColorRangeInterface()!.setMinGreen(string.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.MAX_GREEN) == 0)
                        
                                    {
                                    
    var string: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getColorRangeInterface()!.setMaxGreen(string.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.MIN_BLUE) == 0)
                        
                                    {
                                    
    var string: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getColorRangeInterface()!.setMinBlue(string.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ColorAtActionScriptConditionData.MAX_BLUE) == 0)
                        
                                    {
                                    
    var string: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.getColorRangeInterface()!.setMaxBlue(string.valueOf());
    

                                    }
                                
}


                                    }
                                
                        else {
                            


                            throw new Error("Color At Action Script Condition Node Null")

                        }
                            
this.init();
    
}

public constructor ()                        

                            : super(ColorAtActionScriptCondition.NAME){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.point= new Point(0, 0);
    
this.init();
    
}


    init(){
this.colorAtActionScriptConditionJPanel= new ColorAtActionScriptConditionJPanel(this);
    
}


    public getPoint(): Point{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


    public setPoint(point: Point){
var point = point
this.point= point;
    
}


    public showDialog(){
this.colorAtActionScriptConditionJPanel!.getColorAtActionJDialog()!.setVisible(true);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(ColorAtActionScriptConditionData.LOCATION_X, Integer.toString(this.getPoint()!.x));
    
hashMap!.put(ColorAtActionScriptConditionData.LOCATION_Y, Integer.toString(this.getPoint()!.y));
    
hashMap!.put(ColorAtActionScriptConditionData.MIN_RED, Integer.toString(this.getColorRangeInterface()!.getMinRed()));
    
hashMap!.put(ColorAtActionScriptConditionData.MAX_RED, Integer.toString(this.getColorRangeInterface()!.getMaxRed()));
    
hashMap!.put(ColorAtActionScriptConditionData.MIN_GREEN, Integer.toString(this.getColorRangeInterface()!.getMinGreen()));
    
hashMap!.put(ColorAtActionScriptConditionData.MAX_GREEN, Integer.toString(this.getColorRangeInterface()!.getMaxGreen()));
    
hashMap!.put(ColorAtActionScriptConditionData.MIN_BLUE, Integer.toString(this.getColorRangeInterface()!.getMinBlue()));
    
hashMap!.put(ColorAtActionScriptConditionData.MAX_BLUE, Integer.toString(this.getColorRangeInterface()!.getMaxBlue()));
    
logUtil!.put("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = super.toXmlNode(document)!;
        
        
;
    
node.appendChild(ModDomHelper.createNodeWithValueNodes(document, ColorAtActionScriptConditionData.NAME, this.toHashMap()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public shouldProcess(frame: number): boolean{
var frame = frame

    var capturedBufferedImageCacheable: BufferedImageFrameCacheable = 
                                    (getInstance as AutomaticCacheInterface).get((frame).toLong());

                         as BufferedImageFrameCacheable;
        
        
;
    

    var bufferedImage: BufferedImage = capturedBufferedImageCacheable!.getBufferedImage()!;
        
        
;
    

    var automaticCacheInterface: AutomaticCacheInterface = ColorCacheFactory.getInstance()!;
        
        
;
    

    var colorInteger: Integer = Integer(Integer.valueOf(bufferedImage!.getRGB(this.getPoint()!.x, this.getPoint()!.y)))!;
        
        
;
    

    var colorCacheable: ColorCacheable = automaticCacheInterface!.get(colorInteger);

                         as ColorCacheable;
        
        
;
    

    var color: Color = colorCacheable!.getColor()!;
        
        
;
    

                        if(this.colorRangeInterface!.isInRange(color))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.shouldProcess(frame);

                        ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public log(){

    var message: string = new StringMaker().
                            append("getPoint(): ")!.append(this.getPoint()!.toString())!.append(CommonSeps.getInstance()!.NEW_LINE)!.append(this.getColorRangeInterface()!.toString())!.toString()!;
        
        
;
    
logUtil!.put(message, this, "log");
    
}


    public getColorRangeInterface(): ColorRangeInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorRangeInterface;
    
}


    public setColorRangeInterface(colorRangeInterface: ColorRangeInterface){
var colorRangeInterface = colorRangeInterface
this.colorRangeInterface= colorRangeInterface;
    
}


}
                
            

