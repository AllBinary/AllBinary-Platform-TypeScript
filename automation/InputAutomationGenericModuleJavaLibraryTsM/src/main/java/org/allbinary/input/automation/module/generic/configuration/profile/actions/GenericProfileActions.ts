
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
        



import { DataOutputStream } from "../../../../../../../../../java/io/DataOutputStream.js";

    
import { File } from "../../../../../../../../../java/io/File.js";

    
import { FileInputStream } from "../../../../../../../../../java/io/FileInputStream.js";

    
import { FileOutputStream } from "../../../../../../../../../java/io/FileOutputStream.js";

    
import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../../../java/util/Set.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomDocumentHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { DomDocumentMappingInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js";

    
import { DefaultListModelHelper } from "../../../../../../../../../org/allbinary/input/automation/module/DefaultListModelHelper.js";

    
import { GenericProfiles } from "../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfiles.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../org/w3c/dom/NodeList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GenericProfileActionsJPanel } from "./GenericProfileActionsJPanel.js";

import { GenericProfileActionsData } from "./GenericProfileActionsData.js";

import { GenericProfileActionData } from "./GenericProfileActionData.js";

import { GenericProfileAction } from "./GenericProfileAction.js";

export class GenericProfileActions
            extends Object
         implements DomNodeInterface, DomDocumentMappingInterface {
        

    public static readonly DEFAULT_PROFILE_ACTIONS_PATH: string = GenericProfiles.DEFAULT_PROFILES_PATH +"actions/";
        
        

    public static getFile(name: string): File{
var name = name

    var fileName: string = DEFAULT_PROFILE_ACTIONS_PATH +name +".xml";
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new File(fileName);
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string

    private genericProfileActionsJPanel: GenericProfileActionsJPanel

    private actionsDefaultListModelHelper: DefaultListModelHelper

    private hashMap: HashMap<any, any>
public constructor (genericProfileActionsJPanel: GenericProfileActionsJPanel, name: string){

            super();
            var genericProfileActionsJPanel = genericProfileActionsJPanel
var name = name
this.setName(name);
    
this.init(genericProfileActionsJPanel);
    
this.load();
    
}

public constructor (genericProfileActionsJPanel: GenericProfileActionsJPanel, abPath: AbPath, name: string){

            super();
            var genericProfileActionsJPanel = genericProfileActionsJPanel
var abPath = abPath
var name = name
this.setName(name);
    
this.init(genericProfileActionsJPanel);
    
this.load();
    
}

public constructor (genericProfileActionsJPanel: GenericProfileActionsJPanel, fileInputStream: FileInputStream, name: string){

            super();
            var genericProfileActionsJPanel = genericProfileActionsJPanel
var fileInputStream = fileInputStream
var name = name
this.setName(name);
    
this.init(genericProfileActionsJPanel);
    
this.fileInit(fileInputStream);
    
}


                //@Throws(Error::class)
            
    init(genericProfileActionsJPanel: GenericProfileActionsJPanel){
var genericProfileActionsJPanel = genericProfileActionsJPanel
this.setGenericProfileActionsJPanel(genericProfileActionsJPanel);
    
this.actionsDefaultListModelHelper= new DefaultListModelHelper();
    
this.setHashMap(new HashMap<any, any>());
    
}


                //@Throws(Error::class)
            
    public save(){

    var idFile: FileOutputStream = new FileOutputStream(DEFAULT_PROFILE_ACTIONS_PATH +getName() +".xml");
        
        
;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);
        
        
;
    
idOutData!.writeBytes(DomDocumentHelper.toString(this.toXmlDoc()));
    
}


                //@Throws(Error::class)
            
    load(){

    var file: File = getFile(getName())!;
        
        
;
    

                        if(file.isFile())
                        
                                    {
                                    
    var idFile: FileInputStream = new FileInputStream(file);
        
        
;
    
this.fileInit(idFile);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Profile: " +file.getAbsolutePath(), this, "Contructor");
    

                        }
                            
}


                //@Throws(Error::class)
            
    fileInit(fileInputStream: FileInputStream){
var fileInputStream = fileInputStream

    var bytes: number[] = new Array(100000);
        
        
;
    

    var length: number = fileInputStream!.read(bytes)!;
        
        
;
    

    var data: string = bytes.decodeToString();
        
        
;
    

    var endIndex: number = data.lastIndexOf('>')!;
        
        
;
    

    var document: Document = DomDocumentHelper.create(data.substring(0, endIndex +1))!;
        
        
;
    

    var nameNodeList: NodeList = document.getElementsByTagName(GenericProfileActionsData.NAME)!;
        
        
;
    
this.logUtil!.putF("Number Of Profiles Specified: " +nameNodeList!.getLength(), this, "Contructor");
    




                        for (
    var index: number = 0;
        
        
index < nameNodeList!.getLength(); index++)
        {

    var node: Node = nameNodeList!.item(index)!;
        
        
;
    

    var nodeList: NodeList = node.getChildNodes()!;
        
        
;
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    this.initActions(nodeList);
    

                                    }
                                
                        else {
                            


                            throw new Error(GenericProfileActionData.NAME +" Name Node Node Children")

                        }
                            
}

this.logUtil!.putF("Loaded: " +this.getHashMap()!.size +" Configuration Profile Action(s)", this, "Contructor");
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
}


                //@Throws(Error::class)
            
    initActions(nodeList: NodeList){
var nodeList = nodeList




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var actionNode: Node = nodeList!.item(index)!;
        
        
;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var genericConfigurationProfileAction: GenericProfileAction = new GenericProfileAction(this.getGenericProfileActionsJPanel()!.getGenericProfileActionJPanel(), actionNode);
        
        
;
    
this.getHashMap()!.put(genericConfigurationProfileAction!.getName(), genericConfigurationProfileAction);
    
this.getDefaultListModelHelper()!.add(genericConfigurationProfileAction!.getName());
    

                                    }
                                
                        else {
                            


                            throw new Error(GenericProfileActionData.NAME +" Node Null")

                        }
                            
}

}


    public getDefaultListModelHelper(): DefaultListModelHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.actionsDefaultListModelHelper;
    
}


    public getAction(string: string): GenericProfileAction{
var string = string



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getHashMap()!.get(string as Object);

                         as GenericProfileAction;
    
}


                //@Throws(Error::class)
            
    public add(name: string){
var name = name

    var genericProfileAction: GenericProfileAction = new GenericProfileAction(name);
        
        
;
    
this.getHashMap()!.put(genericProfileAction!.getName(), genericProfileAction);
    
this.getDefaultListModelHelper()!.add(genericProfileAction!.getName());
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


                //@Throws(Error::class)
            
    public remove(name: string){
var name = name
this.getHashMap()!.remove(name);
    
this.getDefaultListModelHelper()!.remove(name);
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(GenericProfileActionsData.NAME)!;
        
        
;
    

    var set: Set = this.getHashMap()!.keys!;
        
        
;
    

    var actionNameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = actionNameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextActionName: string = actionNameArray[index]! as String;
        
        
;
    

    var nextGenericProfileAction: GenericProfileAction = this.getAction(nextActionName);

                         as GenericProfileAction;
        
        
;
    
node.appendChild(nextGenericProfileAction!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;
        
        
;
    

    var node: Node = this.toXmlNode(document)!;
        
        
;
    
document.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


    public getGenericProfileActionsJPanel(): GenericProfileActionsJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActionsJPanel;
    
}


    public setGenericProfileActionsJPanel(genericProfileActionsJPanel: GenericProfileActionsJPanel){
var genericProfileActionsJPanel = genericProfileActionsJPanel
this.genericProfileActionsJPanel= genericProfileActionsJPanel;
    
}


    public getHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public setHashMap(hashMap: HashMap<any, any>){
var hashMap = hashMap
this.hashMap= hashMap;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


}
                
            

