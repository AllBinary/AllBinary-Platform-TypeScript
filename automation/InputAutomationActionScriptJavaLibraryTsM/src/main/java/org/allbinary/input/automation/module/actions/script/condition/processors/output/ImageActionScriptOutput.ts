
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
        



import { HashMap } from "../../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { Document } from "../../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../../org/w3c/dom/NodeList.js";

    

export class ImageActionScriptOutput extends BasicProfileActionScriptOutput
                , ImageActionScriptOutputInterface {
        

    private static readonly NAME: string = "Captures";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private saved: boolean = false;
        
        

    private display: boolean = false;
        
        

    private imageTypes: ImageTypes

    private actionScriptOutputJPanel: ImageActionScriptOutputJPanel
public constructor (node: Node)                        

                            : super(NAME, node){

            super();
            var node = node


                            //For kotlin this is before the body of the constructor.
                    
logUtil!.put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)

    var actionNode: Node = DomSearchHelper.getNode(ImageActionScriptOutputData.NAME, node.getChildNodes())!;
        
        


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
        
        


                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.SAVE) == 0)
                        
                                    {
                                    
    var booleanString: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

this.setSaved(.
                            )

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.DISPLAY) == 0)
                        
                                    {
                                    
    var booleanString: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

this.setSaved(.
                            )

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(ImageActionScriptOutputData.TYPES) == 0)
                        
                                    {
                                    this.setImageTypes(ImageTypes(childNode))

                                    }
                                
                        else {
                            


                            throw Error("Action Script Output Unknown Node")

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw Error("Action Script Output Node Null")

                        }
                            
this.setAllowsChildren(false)
this.actionScriptOutputJPanel= ImageActionScriptOutputJPanel(this)
}

public constructor ()                        

                            : super(NAME){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.setImageTypes(ImageTypes())
this.setAllowsChildren(false)
this.actionScriptOutputJPanel= ImageActionScriptOutputJPanel(this)
}


    public getActionScriptOutputJPanel(): ImageActionScriptOutputJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return actionScriptOutputJPanel;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

hashMap!.put(ImageActionScriptOutputData.DISPLAY, Boolean.toString(this.isDisplay()))
hashMap!.put(ImageActionScriptOutputData.SAVE, Boolean.toString(this.isSaved()))
logUtil!.put("HashMap: " +hashMap!.toString(), this, "toHashMap()")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = super.toXmlNode(document)!;
        
        


    var newNode: Node = ModDomHelper.createNodeWithValueNodes(document, ImageActionScriptOutputData.NAME, this.toHashMap())!;
        
        

newNode!.appendChild(this.getImageTypes()!.toXmlNode(document))
node.appendChild(newNode)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public process(frame: Long){
var frame = frame
ImageActionScriptOutputProcessor.process(this, frame)
}


    public showDialog(){
this.actionScriptOutputJPanel!.getCapturedImageActionJDialog()!.setVisible(true)
}


    public isSaved(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return saved;
    
}


    public setSaved(saved: boolean){
var saved = saved
this.saved= saved
}


    public isDisplay(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return display;
    
}


    public setDisplay(display: boolean){
var display = display
this.display= display
}


    public future_toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(" Is Save: ")
stringBuffer!.appendboolean(this.isSaved())
stringBuffer!.append(" Is Display: ")
stringBuffer!.appendboolean(this.isDisplay())
stringBuffer!.append(" ")
stringBuffer!.append(this.getImageTypes()!.toString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public log(){
logUtil!.put(this.future_toString(), this, "log")
}


    public getImageTypes(): ImageTypes{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return imageTypes;
    
}


    public setImageTypes(imageTypes: ImageTypes){
var imageTypes = imageTypes
this.imageTypes= imageTypes
}


}
                
            

