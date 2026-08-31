
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../../../../java/lang/Long.js';
        
import { awt } from '../../../../../../../../../java/awt.js';
      //not GWT import const awt = globalThis.java.awt;

      
import { InputEvent } from '../../../../../../../../../java/awt/event/InputEvent.js';
      //not GWT import const InputEvent = globalThis.java.awt.event.InputEvent;

      
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { BooleanFactory } from '../../../../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      //not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicProfileActionScriptInput } from './BasicProfileActionScriptInput.js';
//not GWT import const BasicProfileActionScriptInput = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.BasicProfileActionScriptInput;

                import { MouseActionScriptInputInterface } from './MouseActionScriptInputInterface.js';
//not GWT import const MouseActionScriptInputInterface = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInputInterface;

                import { Point } from './Point.js';
//not GWT import const Point = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.Point;

                import { MouseActionScriptInputJPanel } from './MouseActionScriptInputJPanel.js';
//not GWT import const MouseActionScriptInputJPanel = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInputJPanel;

                import { MouseActionScriptInputData } from './MouseActionScriptInputData.js';
//not GWT import const MouseActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseActionScriptInputData;

                import { MouseInputAutomationProcessor } from './MouseInputAutomationProcessor.js';
//not GWT import const MouseInputAutomationProcessor = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.MouseInputAutomationProcessor;

                
export class MouseActionScriptInput extends BasicProfileActionScriptInput implements MouseActionScriptInputInterface {
        

    private static readonly NAME: string = "Mouse";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private point: Point;

    private buttons: number= 0;

    private mouseActionScriptInputJPanel: MouseActionScriptInputJPanel;

public constructor (node: Node){
            super(NAME, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.point= new Point();
    

    var actionNode: Node = DomSearchHelper.getNode(MouseActionScriptInputData.NAME, node.getChildNodes())!;;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;;
    

                        if(childNode!.getNodeName()!.compareTo(MouseActionScriptInputData.BUTTONS) == 0)
                        
                                    {
                                    
    var buttons: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setButtonClicks(Integer.valueOf(buttons)!.intValue());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(MouseActionScriptInputData.MOVE) == 0)
                        
                                    {
                                    
    var mouseXNode: Node = DomSearchHelper.getNode(MouseActionScriptInputData.MOVE_X, childNode!.getChildNodes())!;;
    

    var mouseXString: string = DomNodeHelper.getTextNodeValue(mouseXNode)!;;
    

    var mouseXInteger: Integer = Integer.valueOf(mouseXString)!;;
    

    var mouseYNode: Node = DomSearchHelper.getNode(MouseActionScriptInputData.MOVE_Y, childNode!.getChildNodes())!;;
    

    var mouseYString: string = DomNodeHelper.getTextNodeValue(mouseYNode)!;;
    

    var mouseYInteger: Integer = Integer.valueOf(mouseYString)!;;
    

    var newPoint: Point = new Point(mouseXInteger!.intValue(), mouseYInteger!.intValue());;
    
this.setPoint(newPoint);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Input Unknown Node");
                    

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Input Node Null");
                    

                        }
                            
this.setAllowsChildren(false);
    
this.mouseActionScriptInputJPanel= new MouseActionScriptInputJPanel(this);
    
}


public constructor (){
            super(NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.point= new Point();
    
this.setAllowsChildren(false);
    
this.mouseActionScriptInputJPanel= new MouseActionScriptInputJPanel(this);
    
}


    public setPoint(point: Point){
this.point= point;
    
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
this.buttons= buttons;
    
}


    public showDialog(){
this.mouseActionScriptInputJPanel!.getMouseActionJDialog()!.setVisible(true);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(MouseActionScriptInputData.BUTTONS, Integer.toString(this.getButtonClicks()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = super.toXmlNode(document)!;;
    

    var mouseNode: Node = ModDomHelper.createNodeWithValueNodes(document, MouseActionScriptInputData.NAME, this.toHashMap())!;;
    
node.appendChild(mouseNode);
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(MouseActionScriptInputData.MOVE_X, Integer.toString(this.getPoint()!.x));
    
hashMap!.put(MouseActionScriptInputData.MOVE_Y, Integer.toString(this.getPoint()!.y));
    
mouseNode!.appendChild(ModDomHelper.createNodeWithValueNodes(document, MouseActionScriptInputData.MOVE, hashMap));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public process(frame: Long){
MouseInputAutomationProcessor.process(this);
    
}


    public log(){

    var buttonStringBuffer: StringMaker = new StringMaker();;
    
buttonStringBuffer!.append("1: ");
    

    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;;
    

                        if((this.getButtonClicks()&InputEvent.BUTTON1_MASK) != 0)
                        
                                    {
                                    buttonStringBuffer!.append(booleanFactory!.TRUE_STRING);
    

                                    }
                                
                        else {
                            buttonStringBuffer!.append(booleanFactory!.FALSE_STRING);
    

                        }
                            
buttonStringBuffer!.append(" 2: ");
    

                        if((this.getButtonClicks()&InputEvent.BUTTON2_MASK) != 0)
                        
                                    {
                                    buttonStringBuffer!.append(booleanFactory!.TRUE_STRING);
    

                                    }
                                
                        else {
                            buttonStringBuffer!.append(booleanFactory!.FALSE_STRING);
    

                        }
                            
buttonStringBuffer!.append(" 3: ");
    

                        if((this.getButtonClicks()&InputEvent.BUTTON3_MASK) != 0)
                        
                                    {
                                    buttonStringBuffer!.append(booleanFactory!.TRUE_STRING);
    

                                    }
                                
                        else {
                            buttonStringBuffer!.append(booleanFactory!.FALSE_STRING);
    

                        }
                            
this.logUtil!.putF("Input Type: " +this.getInputRobotInterface()!.getName() +" Point: " +this.getPoint() +" Buttons Clicked: " +buttonStringBuffer!.toString(), this, "log");
    
}


}



