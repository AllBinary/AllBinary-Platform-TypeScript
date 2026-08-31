
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { DataOutputStream } from '../../../../../../../../../java/io/DataOutputStream.js';
      //not GWT import const DataOutputStream = globalThis.java.io.DataOutputStream;

      
import { File } from '../../../../../../../../../java/io/File.js';
      //not GWT import const File = globalThis.java.io.File;

      
import { FileInputStream } from '../../../../../../../../../java/io/FileInputStream.js';
      //not GWT import const FileInputStream = globalThis.java.io.FileInputStream;

      
import { FileOutputStream } from '../../../../../../../../../java/io/FileOutputStream.js';
      //not GWT import const FileOutputStream = globalThis.java.io.FileOutputStream;

      
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomDocumentHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { DomDocumentMappingInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
      //not GWT import const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
import { DefaultListModelHelper } from '../../../../../../../../../org/allbinary/input/automation/module/DefaultListModelHelper.js';
      //not GWT import const DefaultListModelHelper = globalThis.org.allbinary.input.automation.module.DefaultListModelHelper;

      
import { GenericProfiles } from '../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/GenericProfiles.js';
      //not GWT import const GenericProfiles = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.GenericProfiles;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { CommonDataFileStrings } from '../../../../../../../../../org/allbinary/logic/io/file/CommonDataFileStrings.js';
      //not GWT import const CommonDataFileStrings = globalThis.org.allbinary.logic.io.file.CommonDataFileStrings;

      
import { AbPath } from '../../../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileActionsJPanel } from './GenericProfileActionsJPanel.js';
//not GWT import const GenericProfileActionsJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionsJPanel;

                import { GenericProfileActionsData } from './GenericProfileActionsData.js';
//not GWT import const GenericProfileActionsData = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionsData;

                import { GenericProfileActionData } from './GenericProfileActionData.js';
//not GWT import const GenericProfileActionData = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionData;

                import { GenericProfileAction } from './GenericProfileAction.js';
//not GWT import const GenericProfileAction = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileAction;

                
export class GenericProfileActions
            extends Object
         implements DomNodeInterface, DomDocumentMappingInterface {
        

    public static readonly DEFAULT_PROFILE_ACTIONS_PATH: string = GenericProfiles.DEFAULT_PROFILES_PATH +"actions/";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonFileStrings: CommonDataFileStrings = CommonDataFileStrings.getInstance()!;

    private name: string;

    private genericProfileActionsJPanel: GenericProfileActionsJPanel;

    private actionsDefaultListModelHelper: DefaultListModelHelper;

    private hashMap: HashMap<any, any>;

public constructor (genericProfileActionsJPanel: GenericProfileActionsJPanel, name: string){

            super();
        this.setName(name);
    
this.init(genericProfileActionsJPanel);
    
this.load();
    
}


public constructor (genericProfileActionsJPanel: GenericProfileActionsJPanel, abPath: AbPath, name: string){

            super();
        this.setName(name);
    
this.init(genericProfileActionsJPanel);
    
this.load();
    
}


public constructor (genericProfileActionsJPanel: GenericProfileActionsJPanel, fileInputStream: FileInputStream, name: string){

            super();
        this.setName(name);
    
this.init(genericProfileActionsJPanel);
    
this.fileInit(fileInputStream);
    
}


                //@Throws(Exception.constructor)
            
    init(genericProfileActionsJPanel: GenericProfileActionsJPanel){
this.setGenericProfileActionsJPanel(genericProfileActionsJPanel);
    
this.actionsDefaultListModelHelper= new DefaultListModelHelper();
    
this.setHashMap(new HashMap<any, any>());
    
}


                //@Throws(Exception.constructor)
            
    public save(){

    var idFile: FileOutputStream = new FileOutputStream(GenericProfileActions.DEFAULT_PROFILE_ACTIONS_PATH +getName() +this.commonFileStrings!._XML);;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);;
    
idOutData!.writeBytes(DomDocumentHelper.toString(this.toXmlDoc()));
    
}


    public getFile(name: string): File{

    var fileName: string = DEFAULT_PROFILE_ACTIONS_PATH +name +this.commonFileStrings!._XML;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new File(fileName);
    
}


                //@Throws(Exception.constructor)
            
    load(){

    var file: File = this.getFile(getName())!;;
    

                        if(file.isFile())
                        
                                    {
                                    
    var idFile: FileInputStream = new FileInputStream(file);;
    
this.fileInit(idFile);
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Profile: " +file.getAbsolutePath(), this, "Contructor");
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    fileInit(fileInputStream: FileInputStream){

    var bytes: number[] = new Array(100000);;
    

    var length: number = fileInputStream!.read(bytes)!;;
    

    var data: string = String.fromCharCode(...bytes);;
    

    var endIndex: number = data.lastIndexOf('>')!;;
    

    var document: Document = DomDocumentHelper.create(data.substring(0, endIndex +1))!;;
    

    var nameNodeList: NodeList = document.getElementsByTagName(GenericProfileActionsData.NAME)!;;
    
this.logUtil!.putF("Number Of Profiles Specified: " +nameNodeList!.getLength(), this, "Contructor");
    




                        for (
    var index: number = 0;index < nameNodeList!.getLength(); index++)
        {

    var node: Node = nameNodeList!.item(index)!;;
    

    var nodeList: NodeList = node.getChildNodes()!;;
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    this.initActions(nodeList);
    

                                    }
                                
                        else {
                            


                            throw new Exception(GenericProfileActionData.NAME +" Name Node Node Children");
                    

                        }
                            
}

this.logUtil!.putF("Loaded: " +this.getHashMap()!.size() +" Configuration Profile Action(s)", this, "Contructor");
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
}


                //@Throws(Exception.constructor)
            
    initActions(nodeList: NodeList){




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var actionNode: Node = nodeList!.item(index)!;;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var genericConfigurationProfileAction: GenericProfileAction = new GenericProfileAction(this.getGenericProfileActionsJPanel()!.getGenericProfileActionJPanel(), actionNode);;
    
this.getHashMap()!.put(genericConfigurationProfileAction!.getName(), genericConfigurationProfileAction);
    
this.getDefaultListModelHelper()!.add(genericConfigurationProfileAction!.getName());
    

                                    }
                                
                        else {
                            


                            throw new Exception(GenericProfileActionData.NAME +" Node Null");
                    

                        }
                            
}

}


    public getDefaultListModelHelper(): DefaultListModelHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.actionsDefaultListModelHelper;
    
}


    public getAction(string: string): GenericProfileAction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getHashMap()!.get(string) as GenericProfileAction;
    
}


                //@Throws(Exception.constructor)
            
    public add(name: string){

    var genericProfileAction: GenericProfileAction = new GenericProfileAction(name);;
    
this.getHashMap()!.put(genericProfileAction!.getName(), genericProfileAction);
    
this.getDefaultListModelHelper()!.add(genericProfileAction!.getName());
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


                //@Throws(Exception.constructor)
            
    public remove(name: string){
this.getHashMap()!.remove(name);
    
this.getDefaultListModelHelper()!.remove(name);
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfileActionsData.NAME)!;;
    

    var set: Set = this.getHashMap()!.keys()!;;
    

    var actionNameArray: any[] = set.toArray()!;;
    

    var size: number = actionNameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var nextActionName: string = actionNameArray[index]! as string;;
    

    var nextGenericProfileAction: GenericProfileAction = this.getAction(nextActionName) as GenericProfileAction;;
    
node.appendChild(nextGenericProfileAction!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{

    var document: Document = DomDocumentHelper.create()!;;
    

    var node: Node = this.toXmlNode(document)!;;
    
document.appendChild(node);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return document;
    
}


    public getGenericProfileActionsJPanel(): GenericProfileActionsJPanel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActionsJPanel;
    
}


    public setGenericProfileActionsJPanel(genericProfileActionsJPanel: GenericProfileActionsJPanel){
this.genericProfileActionsJPanel= genericProfileActionsJPanel;
    
}


    public getHashMap(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashMap;
    
}


    public setHashMap(hashMap: HashMap<any, any>){
this.hashMap= hashMap;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


}



