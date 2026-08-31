
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { DataOutputStream } from '../../../../../../../../java/io/DataOutputStream.js';
      //not GWT import const DataOutputStream = globalThis.java.io.DataOutputStream;

      
import { File } from '../../../../../../../../java/io/File.js';
      //not GWT import const File = globalThis.java.io.File;

      
import { FileInputStream } from '../../../../../../../../java/io/FileInputStream.js';
      //not GWT import const FileInputStream = globalThis.java.io.FileInputStream;

      
import { FileOutputStream } from '../../../../../../../../java/io/FileOutputStream.js';
      //not GWT import const FileOutputStream = globalThis.java.io.FileOutputStream;

      
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Set } from '../../../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomDocumentHelper } from '../../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      //not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { DomDocumentMappingInterface } from '../../../../../../../../org/allbinary/data/tree/dom/document/mapping/DomDocumentMappingInterface.js';
      //not GWT import const DomDocumentMappingInterface = globalThis.org.allbinary.data.tree.dom.document.mapping.DomDocumentMappingInterface;

      
import { DefaultListModelHelper } from '../../../../../../../../org/allbinary/input/automation/module/DefaultListModelHelper.js';
      //not GWT import const DefaultListModelHelper = globalThis.org.allbinary.input.automation.module.DefaultListModelHelper;

      
import { GenericProfileActionData } from '../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActionData.js';
      //not GWT import const GenericProfileActionData = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionData;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfilesData } from './GenericProfilesData.js';
import { GenericProfileData } from './GenericProfileData.js';
import { GenericProfile } from './GenericProfile.js';

export class GenericProfiles
            extends Object
         implements DomNodeInterface, DomDocumentMappingInterface {
        

    public static readonly DEFAULT_PROFILES_PATH: string = "./modules/configs/profiles/";

    public static readonly DEFAULT_PROFILE_ACTIONS_PATH: string = GenericProfiles.DEFAULT_PROFILES_PATH +"actions/";

    public static readonly DEFAULT_FILE: string = GenericProfiles.DEFAULT_PROFILES_PATH +"profiles.xml";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private hashMap: HashMap<any, any>;

    private profilesDefaultListModelHelper: DefaultListModelHelper;

    private readonly fileName: string;

public constructor (fileName: string){

            super();
        this.fileName= fileName;
    
this.profilesDefaultListModelHelper= new DefaultListModelHelper();
    
this.hashMap= new HashMap<any, any>();
    

                        if(new File(fileName).isFile())
                        
                                    {
                                    
    var bytes: number[] = new Array(100000);;
    

    var idFile: FileInputStream = new FileInputStream(fileName);;
    

    var length: number = idFile!.read(bytes)!;;
    

    var data: string = String.fromCharCode(...bytes);;
    

    var endIndex: number = data.lastIndexOf('>')!;;
    

    var document: Document = DomDocumentHelper.create(data.substring(0, endIndex +1))!;;
    

    var nodeList: NodeList = document.getElementsByTagName(GenericProfilesData.NAME)!;;
    
this.logUtil!.putF("Number Of Profiles Specified: " +nodeList!.getLength(), this, "Contructor");
    

                        if(nodeList != 
                                    null
                                )
                        
                                    {
                                    this.initProfiles(nodeList!.item(0));
    

                                    }
                                
                        else {
                            


                            throw new Exception(GenericProfileActionData.NAME +" Name Node Node Children");
                    

                        }
                            
this.logUtil!.putF("Loaded: " +this.hashMap!.size() +" Configuration Profile Actions", this, "Contructor");
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Generic Profile: " +fileName, this, "Contructor");
    

                        }
                            
this.getDefaultListModelHelper()!.initDefaultModelList();
    
}


                //@Throws(Exception.constructor)
            
    initProfiles(node: Node){

    var nodeList: NodeList = node.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var profileNameNode: Node = nodeList!.item(index)!;;
    

                        if(profileNameNode!.getNodeName()!.compareTo(GenericProfileData.NAME) == 0)
                        
                                    {
                                    
    var genericProfile: GenericProfile = new GenericProfile(profileNameNode);;
    
this.hashMap!.put(genericProfile!.getName(), genericProfile);
    
this.getDefaultListModelHelper()!.add(genericProfile!.getName());
    

                                    }
                                
}

}


    public getDefaultListModelHelper(): DefaultListModelHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.profilesDefaultListModelHelper;
    
}


                //@Throws(Exception.constructor)
            
    public get(name: string): GenericProfile{

    var genericProfile: GenericProfile = this.hashMap!.get(name) as GenericProfile;;
    

                        if(genericProfile == 
                                    null
                                )
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF("No Generic Profile Named: " +name +" availability was: " +this.hashMap, this, commonStrings!.GET);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfile;
    
}


                //@Throws(Exception.constructor)
            
    public add(name: string){
this.hashMap!.put(name, new GenericProfile(name));
    
this.getDefaultListModelHelper()!.add(name);
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


                //@Throws(Exception.constructor)
            
    public remove(name: string){
this.hashMap!.remove(name);
    
this.getDefaultListModelHelper()!.remove(name);
    
this.getDefaultListModelHelper()!.initDefaultModelList();
    
this.save();
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = document.createElement(GenericProfilesData.NAME)!;;
    

    var set: Set = this.hashMap!.keys()!;;
    

    var nameArray: any[] = set.toArray()!;;
    

    var size: number = nameArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var genericProfile: GenericProfile = this.hashMap!.get(nameArray[index]! as string) as GenericProfile;;
    
node.appendChild(genericProfile!.toXmlNode(document));
    
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


                //@Throws(Exception.constructor)
            
    public save(){

    var idFile: FileOutputStream = new FileOutputStream(this.fileName);;
    

    var idOutData: DataOutputStream = new DataOutputStream(idFile);;
    

    var documentString: string = DomDocumentHelper.toString(this.toXmlDoc())!;;
    
idOutData!.writeBytes(documentString);
    
}


}



