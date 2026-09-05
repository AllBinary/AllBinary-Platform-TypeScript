
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

        


            import { Exception } from '../../../../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../../../../java/lang/Long.js';
        
import { HashMap } from '../../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { Document } from '../../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicProfileActionScriptOutput } from './BasicProfileActionScriptOutput.js';
//not GWT import - same folder const BasicProfileActionScriptOutput = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.BasicProfileActionScriptOutput;

                import { ImageActionScriptOutputInterface } from './ImageActionScriptOutputInterface.js';
//not GWT import - same folder const ImageActionScriptOutputInterface = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutputInterface;

                import { ImageTypes } from './ImageTypes.js';
//not GWT import - same folder const ImageTypes = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageTypes;

                import { ImageActionScriptOutputJPanel } from './ImageActionScriptOutputJPanel.js';
//not GWT import - same folder const ImageActionScriptOutputJPanel = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutputJPanel;

                import { ImageActionScriptOutputData } from './ImageActionScriptOutputData.js';
//not GWT import - same folder const ImageActionScriptOutputData = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutputData;

                import { ImageActionScriptOutputProcessor } from './ImageActionScriptOutputProcessor.js';
//not GWT import - same folder const ImageActionScriptOutputProcessor = globalThis.org.allbinary.input.automation.module.actions.script.condition.processors.output.ImageActionScriptOutputProcessor;

                
export class ImageActionScriptOutput extends BasicProfileActionScriptOutput implements ImageActionScriptOutputInterface {
        

    private static readonly NAME: string = "Captures";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private saved: boolean = false;

    private display: boolean = false;

    private imageTypes: ImageTypes;

    private actionScriptOutputJPanel: ImageActionScriptOutputJPanel;

public constructor (node: Node){
            super(NAME, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

    var actionNode: Node = DomSearchHelper.getNode(ImageActionScriptOutputData.NAME, node.getChildNodes())!;;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;;
    

                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.SAVE) == 0)
                        
                                    {
                                    
    var booleanString: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setSaved(.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.DISPLAY) == 0)
                        
                                    {
                                    
    var booleanString: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setSaved(.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.TYPES) == 0)
                        
                                    {
                                    this.setImageTypes(new ImageTypes(childNode));
    

                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Output Unknown Node");
                    

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Output Node Null");
                    

                        }
                            
this.setAllowsChildren(false);
    
this.actionScriptOutputJPanel= new ImageActionScriptOutputJPanel(this);
    
}


public constructor (){
            super(NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setImageTypes(new ImageTypes());
    
this.setAllowsChildren(false);
    
this.actionScriptOutputJPanel= new ImageActionScriptOutputJPanel(this);
    
}


    public getActionScriptOutputJPanel(): ImageActionScriptOutputJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.actionScriptOutputJPanel;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(ImageActionScriptOutputData.DISPLAY, Boolean.toString(this.isDisplay()));
    
hashMap!.put(ImageActionScriptOutputData.SAVE, Boolean.toString(this.isSaved()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = super.toXmlNode(document)!;;
    

    var newNode: Node = ModDomHelper.createNodeWithValueNodes(document, ImageActionScriptOutputData.NAME, this.toHashMap())!;;
    
newNode!.appendChild(this.getImageTypes()!.toXmlNode(document));
    
node.appendChild(newNode);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public process(frame: Long){
ImageActionScriptOutputProcessor.process(this, frame);
    
}


    public showDialog(){
this.actionScriptOutputJPanel!.getCapturedImageActionJDialog()!.setVisible(true);
    
}


    public isSaved(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.saved;
    
}


    public setSaved(saved: boolean){
this.saved= saved;
    
}


    public isDisplay(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.display;
    
}


    public setDisplay(display: boolean){
this.display= display;
    
}


    public future_toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(" Is Save: ");
    
stringBuffer!.appendboolean(this.isSaved());
    
stringBuffer!.append(" Is Display: ");
    
stringBuffer!.appendboolean(this.isDisplay());
    
stringBuffer!.append(" ");
    
stringBuffer!.append(this.getImageTypes()!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public log(){
this.logUtil!.putF(this.future_toString(), this, "log");
    
}


    public getImageTypes(): ImageTypes{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.imageTypes;
    
}


    public setImageTypes(imageTypes: ImageTypes){
this.imageTypes= imageTypes;
    
}


}



