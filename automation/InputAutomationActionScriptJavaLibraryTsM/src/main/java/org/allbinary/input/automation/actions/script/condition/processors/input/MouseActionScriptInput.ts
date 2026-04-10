
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
        



import { awt } from "../../../../../../../../../java/awt.js";

    
import { InputEvent } from "../../../../../../../../../java/awt/event/InputEvent.js";

    
import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../org/w3c/dom/NodeList.js";

    

export class MouseActionScriptInput extends BasicProfileActionScriptInput
                , MouseActionScriptInputInterface {
        

    private static readonly NAME: string = "Mouse";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private point: Point

    private buttons: number= 0

    private mouseActionScriptInputJPanel: MouseActionScriptInputJPanel
public constructor (node: Node)                        

                            : super(NAME, node){

            super();
            var node = node


                            //For kotlin this is before the body of the constructor.
                    
put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)
this.point= Point()

    var actionNode: Node = DomSearchHelper.getNode(MouseActionScriptInputData.NAME, node.getChildNodes())!;
        
        


    
                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;
        
        


    
                        if(childNode!.getNodeName()!.compareTo(MouseActionScriptInputData.BUTTONS) == 0)
                        
                                    {
                                    
    var buttons: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

this.setButtonClicks(Integer.valueOf(buttons)!.toInt())

                                    }
                                
                             else 
    
                        if(childNode!.getNodeName()!.compareTo(MouseActionScriptInputData.MOVE) == 0)
                        
                                    {
                                    
    var mouseXNode: Node = DomSearchHelper.getNode(MouseActionScriptInputData.MOVE_X, childNode!.getChildNodes())!;
        
        


    var mouseXString: string = DomNodeHelper.getTextNodeValue(mouseXNode)!;
        
        


    var mouseXInteger: Integer = Integer(Integer.valueOf(mouseXString))!;
        
        


    var mouseYNode: Node = DomSearchHelper.getNode(MouseActionScriptInputData.MOVE_Y, childNode!.getChildNodes())!;
        
        


    var mouseYString: string = DomNodeHelper.getTextNodeValue(mouseYNode)!;
        
        


    var mouseYInteger: Integer = Integer(Integer.valueOf(mouseYString))!;
        
        


    var newPoint: Point = new Point(mouseXInteger!.toInt(), mouseYInteger!.toInt());
        
        

this.setPoint(newPoint)

                                    }
                                
                        else {
                            


                            throw Exception("Action Script Input Unknown Node")

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw Exception("Action Script Input Node Null")

                        }
                            
this.setAllowsChildren(false)
this.mouseActionScriptInputJPanel= MouseActionScriptInputJPanel(this)
}

public constructor ()                        

                            : super(NAME){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.point= Point()
this.setAllowsChildren(false)
this.mouseActionScriptInputJPanel= MouseActionScriptInputJPanel(this)
}


    public setPoint(point: Point){
var point = point
this.point= point
}


    public getPoint(): Point{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.point;
    
}


    public getButtonClicks(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.buttons;
    
}


    public setButtonClicks(buttons: number){
var buttons = buttons
this.buttons= buttons
}


    public showDialog(){
setVisible(true)
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(MouseActionScriptInputData.BUTTONS, Integer.toString(this.getButtonClicks()))
put("HashMap: " +hashMap!.toString(), this, "toHashMap()")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = super.toXmlNode(document)!;
        
        


    var mouseNode: Node = ModDomHelper.createNodeWithValueNodes(document, MouseActionScriptInputData.NAME, this.toHashMap())!;
        
        

appendChild(mouseNode)

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

put(MouseActionScriptInputData.MOVE_X, Integer.toString(this.getPoint()!.x))
put(MouseActionScriptInputData.MOVE_Y, Integer.toString(this.getPoint()!.y))
appendChild(ModDomHelper.createNodeWithValueNodes(document, MouseActionScriptInputData.MOVE, hashMap))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                @Throws(Exception::class)
            
    public process(frame: Long){
var frame = frame
process(this)
}


    public log(){

    var buttonStringBuffer: StringMaker = new StringMaker();
        
        

append("1: ")

    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        


    
                        if((this.getButtonClicks() and InputEvent.BUTTON1_MASK) != 0)
                        
                                    {
                                    append(booleanFactory!.TRUE_STRING)

                                    }
                                
                        else {
                            append(booleanFactory!.FALSE_STRING)

                        }
                            
append(" 2: ")

    
                        if((this.getButtonClicks() and InputEvent.BUTTON2_MASK) != 0)
                        
                                    {
                                    append(booleanFactory!.TRUE_STRING)

                                    }
                                
                        else {
                            append(booleanFactory!.FALSE_STRING)

                        }
                            
append(" 3: ")

    
                        if((this.getButtonClicks() and InputEvent.BUTTON3_MASK) != 0)
                        
                                    {
                                    append(booleanFactory!.TRUE_STRING)

                                    }
                                
                        else {
                            append(booleanFactory!.FALSE_STRING)

                        }
                            
put("Input Type: " +this.getInputRobotInterface()!.getName() +" Point: " +this.getPoint() +" Buttons Clicked: " +buttonStringBuffer!.toString(), this, "log")
}


}
                
            

