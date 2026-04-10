
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { CategoryData } from "../../../../../org/allbinary/business/category/CategoryData.js";

    
import { CategoryFactoryInterface } from "../../../../../org/allbinary/business/category/CategoryFactoryInterface.js";

    
import { StoreThemeCategoryFactory } from "../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryFactory.js";

    
import { StoreThemeCategoryInterface } from "../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryInterface.js";

    
import { CategoryLoaderFactory } from "../../../../../org/allbinary/data/tree/category/CategoryLoaderFactory.js";

    
import { CategoryLoaderInterface } from "../../../../../org/allbinary/data/tree/category/CategoryLoaderInterface.js";

    
import { DomData } from "../../../../../org/allbinary/data/tree/dom/DomData.js";

    
import { DomNodeHelper } from "../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbSqlData } from "../../../../../org/allbinary/logic/communication/sql/AbSqlData.js";

    
import { CryptFileReader } from "../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { ValidationInterface } from "../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { PathUtil } from "../../../../../org/allbinary/logic/io/path/PathUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CompositeTransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CssStyleValidation } from "../../../../../org/allbinary/logic/visual/transform/template/customizer/includes/style/css/template/retail/CssStyleValidation.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

export class ThemeValidation
            extends Object
        
                , ThemeInterface
                , ValidationInterface
                , DomNodeInterface
                , CompositeTransformInfoInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoInterface

    private styleValidationInterface: ValidationInterface

    private themeName: string

    private themePreviewImageName: string

    private webAppAbPath: AbPath

    private categoryAbPath: AbPath

    private fileAbPath: AbPath
public constructor (transformInfoInterface: TransformInfoInterface, cssStyleValidation: CssStyleValidation, categoryThemePath: string){

            super();
            var transformInfoInterface = transformInfoInterface
var cssStyleValidation = cssStyleValidation
var categoryThemePath = categoryThemePath
this.transformInfoInterface= transformInfoInterface

    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        

this.categoryAbPath= pathUtil!.removeNameFromPath(categoryThemePath)
this.themeName= pathUtil!.getNameFromPath(categoryThemePath)
this.styleValidationInterface= cssStyleValidation
this.this.init()
}

public constructor (transformInfoInterface: TransformInfoInterface, hashMap: HashMap<Any, Any>){

            super();
            var transformInfoInterface = transformInfoInterface
var hashMap = hashMap
this.transformInfoInterface= transformInfoInterface

    var categoryThemeAbPath: AbPath = new AbPath(hashMap!.get(ThemeData.getInstance()!.PATH) as String);
        
        


    var pathUtil: PathUtil = PathUtil.getInstance()!;
        
        

this.categoryAbPath= pathUtil!.removeNameFromPath(categoryThemeAbPath!.toString())
this.themeName= pathUtil!.getNameFromPath(categoryThemeAbPath!.toString())

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("CategoryThemePath: ")
stringBuffer!.append(categoryThemeAbPath!.toString())
stringBuffer!.append(" & CategoryPath: ")
stringBuffer!.append(this.categoryAbPath!.toString())
stringBuffer!.append(" & ThemeName: ")
stringBuffer!.append(this.themeName)
logUtil!.put("Http Request Constructor", this, stringBuffer!.toString())

                                    }
                                
this.this.init()
}

public constructor (storeThemeCategoryInterface: StoreThemeCategoryInterface, node: Node){

            super();
            var storeThemeCategoryInterface = storeThemeCategoryInterface
var node = node
this.transformInfoInterface= storeThemeCategoryInterface!.getTransformInfoInterface()
this.categoryAbPath= storeThemeCategoryInterface!.getPath()

    var themeNameNode: Node = DomSearchHelper.getNode(ThemeData.getInstance()!.NAME, node.getChildNodes())!;
        
        


    var valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, themeNameNode!.getChildNodes())!;
        
        

this.themeName= DomNodeHelper.getTextNodeValue(valueNode)

    var previewImageNameNode: Node = DomSearchHelper.getNode(ThemeData.getInstance()!.PREVIEW_IMAGE_NAME, node.getChildNodes())!;
        
        


    var previewImageNameValueNode: Node = DomSearchHelper.getNode(DomData.VALUE, previewImageNameNode!.getChildNodes())!;
        
        

this.themePreviewImageName= DomNodeHelper.getTextNodeValue(previewImageNameValueNode)
this.webAppAbPath= storeThemeCategoryInterface!.getWebAppPath()
this.this.init(storeThemeCategoryInterface)
}


                //@Throws(Error::class)
            
    init(){

    var categoryFactoryInterface: CategoryFactoryInterface = new StoreThemeCategoryFactory(this.getTransformInfoInterface());
        
        


    var categoryLoaderInterface: CategoryLoaderInterface = CategoryLoaderFactory.getInstance(categoryFactoryInterface)!;
        
        


    var rootStoreThemeCategoryInterface: StoreThemeCategoryInterface = categoryFactoryInterface!.getRootInstance() as StoreThemeCategoryInterface;
        
        

this.this.init(rootStoreThemeCategoryInterface)
}


                //@Throws(Error::class)
            
    init(storeThemeCategoryInterface: StoreThemeCategoryInterface){
var storeThemeCategoryInterface = storeThemeCategoryInterface
this.fileAbPath= AbPath(storeThemeCategoryInterface!.getRootFilePath()!.toString() +this.categoryAbPath!.toString())
this.webAppAbPath= storeThemeCategoryInterface!.getWebAppPath()
}


                //@Throws(Error::class)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoInterface;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themeName;
    
}


    public getPreviewImageName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themePreviewImageName;
    
}


    public getPreviewImagePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.webAppAbPath!.toString() +this.categoryAbPath!.toString();
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryAbPath!.toString();
    
}


                //@Throws(Error::class)
            
    public getCssStyleValidation(): CssStyleValidation{

                        if(this.styleValidationInterface == 
                                    null
                                )
                        
                                    {
                                    
    var cssStyleFileAbPath: AbPath = new AbPath(this.fileAbPath!.toString(), this.themeName +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION);
        
        


    var cryptFileReader: CryptFileReader = new CryptFileReader(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);
        
        


    var document: Document = DomDocumentHelper.create(cryptFileReader!.get(cssStyleFileAbPath))!;
        
        

this.styleValidationInterface= CssStyleValidation(document)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.styleValidationInterface as CssStyleValidation;
    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, commonStrings!.IS_VALID)

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.categoryAbPath!.toString(), AbSqlData.MINSTRING, AbSqlData.MAXSTRING))
                        
                                    {
                                    isValid= Boolean.FALSE

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.themeName, AbSqlData.MINSTRING, AbSqlData.MAXSTRING))
                        
                                    {
                                    isValid= Boolean.FALSE

                                    }
                                

                        if(!this.getCssStyleValidation()!.isValid())
                        
                                    {
                                    isValid= Boolean.FALSE

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("End: " +isValid, this, commonStrings!.IS_VALID)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put("Failed to validate form", this, commonStrings!.IS_VALID, e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("Theme Validation Error")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
} catch(e: Exception)
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName() as Object;
    
}


    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        

vector.add(this.getName())
vector.add(this.getPath())
vector.add(this.getPreviewImageName())
vector.add(this.getPreviewImagePath())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var themeData: ThemeData = ThemeData.getInstance()!;
        
        


    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

hashMap!.put(themeData!.NAME, this.getName())
hashMap!.put(themeData!.PATH, this.getPath())
hashMap!.put(themeData!.PREVIEW_IMAGE_NAME, this.getPreviewImageName())
hashMap!.put(themeData!.PREVIEW_IMAGE_PATH, this.getPreviewImagePath())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createNameValueNodes(document, ThemeData.getInstance()!.NAME, this.toHashMap())!;
        
        


    var domNodeInterface: DomNodeInterface = this.getCssStyleValidation() as DomNodeInterface;
        
        

node.appendChild(domNodeInterface!.toXmlNode(document))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

