
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
        



import { ImageAnalysisResults } from "../../../../org/allbinary/media/image/analysis/ImageAnalysisResults.js";

    
import { ImageColorRangeResults } from "../../../../org/allbinary/media/image/analysis/ImageColorRangeResults.js";

    
import { ImageColorResults } from "../../../../org/allbinary/media/image/analysis/ImageColorResults.js";

    
import { CommonPhoneStrings } from "../../../../org/allbinary/string/CommonPhoneStrings.js";

    

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { Short } from "./Short.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { ComponentPlacement } from "./ComponentPlacement.js";

import { LayoutStyle } from "./LayoutStyle.js";

import { Alignment } from "./Alignment.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

import { GroupLayout } from "./GroupLayout.js";

export class ImageAnalysisResultsJPanel extends javax.swing.JPanel {
        
public constructor (imageAnalysisResultsArray: ImageAnalysisResults[]){

            super();
                //var imageAnalysisResultsArray = imageAnalysisResultsArray
initComponents();
    

    var imageAnalysisResults: ImageAnalysisResults = imageAnalysisResultsArray[0]!;
        
        
;
    
this.updateImageColorRangeResults(imageAnalysisResults);
    
}


    initComponents(){
jLabel1= new javax.swing.JLabel();
    
jLabel2= new javax.swing.JLabel();
    
jLabel3= new javax.swing.JLabel();
    
percentMatchingJTextField= new javax.swing.JTextField();
    
totalPixelsJTextField= new javax.swing.JTextField();
    
matchingPixelsJTextField= new javax.swing.JTextField();
    
jComboBox1= new javax.swing.JComboBox();
    
jLabel4= new javax.swing.JLabel();
    
jLabel5= new javax.swing.JLabel();
    
jLabel6= new javax.swing.JLabel();
    
jLabel7= new javax.swing.JLabel();
    
avgRedJTextField= new javax.swing.JTextField();
    
avgGreenJTextField= new javax.swing.JTextField();
    
avgBlueJTextField= new javax.swing.JTextField();
    
minGreenJTextField= new javax.swing.JTextField();
    
jLabel8= new javax.swing.JLabel();
    
jLabel9= new javax.swing.JLabel();
    
jLabel10= new javax.swing.JLabel();
    
minRedJTextField= new javax.swing.JTextField();
    
minBlueJTextField= new javax.swing.JTextField();
    
jLabel11= new javax.swing.JLabel();
    
jLabel12= new javax.swing.JLabel();
    
jLabel13= new javax.swing.JLabel();
    
maxRedJTextField= new javax.swing.JTextField();
    
maxGreenJTextField= new javax.swing.JTextField();
    
maxBlueJTextField= new javax.swing.JTextField();
    
jLabel1!.setText("Matching Pixels:");
    
jLabel2!.setText("Total Pixels:");
    
jLabel3!.setText("Percent Matching:");
    
percentMatchingJTextField!.setEditable(false);
    
totalPixelsJTextField!.setEditable(false);
    
matchingPixelsJTextField!.setEditable(false);
    
jComboBox1!.setModel(new javax.swing.DefaultComboBoxModel(
                                                [
                                                    CommonPhoneStrings.getInstance()!.ONE;
        
        
                                                ]));
    
jComboBox1!.setEnabled(false);
    
jLabel4!.setText("Image:");
    
jLabel5!.setText("Average Red:");
    
jLabel6!.setText("Average Green:");
    
jLabel7!.setText("Average Blue:");
    
avgRedJTextField!.setEditable(false);
    
avgGreenJTextField!.setEditable(false);
    
avgBlueJTextField!.setEditable(false);
    
minGreenJTextField!.setEditable(false);
    
jLabel8!.setText("Min Red:");
    
jLabel9!.setText("Min Green:");
    
jLabel10!.setText("Min Blue:");
    
minRedJTextField!.setEditable(false);
    
minBlueJTextField!.setEditable(false);
    
jLabel11!.setText("Max Red:");
    
jLabel12!.setText("Max Green:");
    
jLabel13!.setText("Max Blue:");
    
maxRedJTextField!.setEditable(false);
    
maxGreenJTextField!.setEditable(false);
    
maxBlueJTextField!.setEditable(false);
    

    var layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);
        
        
;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel3)!.addComponent(jLabel2)!.addComponent(jLabel1)!.addComponent(jLabel5)!.addComponent(jLabel6)!.addComponent(jLabel7)!.addComponent(jLabel4))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(avgBlueJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(avgGreenJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(avgRedJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(totalPixelsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(percentMatchingJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(matchingPixelsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(jLabel12)!.addComponent(jLabel13)!.addComponent(jLabel8)!.addComponent(jLabel9)!.addComponent(jLabel10)!.addComponent(jLabel11))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE))!.addContainerGap(18, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel4)!.addComponent(jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel1)!.addComponent(matchingPixelsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel8)!.addComponent(minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel2)!.addComponent(totalPixelsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel9)!.addComponent(minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel3)!.addComponent(percentMatchingJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel10)!.addComponent(minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel5)!.addComponent(avgRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel11)!.addComponent(maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel6)!.addComponent(avgGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel12))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(jLabel7)!.addComponent(avgBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(jLabel13)!.addComponent(maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))));
    
}


    updateImageColorRangeResults(imageAnalysisResults: ImageAnalysisResults){
    //var imageAnalysisResults = imageAnalysisResults

    var imageColorRangeResults: ImageColorRangeResults = imageAnalysisResults!.getImageColorRangeResults()!;
        
        
;
    
this.matchingPixelsJTextField!.setText(imageColorRangeResults!.getMatchingPixelsChecked() as Long.
                            toString());
    
this.totalPixelsJTextField!.setText(imageColorRangeResults!.getTotalPixelsChecked() as Long.
                            toString());
    
this.percentMatchingJTextField!.setText(new Float(imageColorRangeResults!.getPercent()).
                            toString());
    

    var imageColorResults: ImageColorResults = imageAnalysisResults!.getImageColorResults()!;
        
        
;
    
this.avgRedJTextField!.setText(new Float(imageColorResults!.getColorAverage()!.getAvgRed()).
                            toString());
    
this.avgGreenJTextField!.setText(new Float(imageColorResults!.getColorAverage()!.getAvgGreen()).
                            toString());
    
this.avgBlueJTextField!.setText(new Float(imageColorResults!.getColorAverage()!.getAvgBlue()).
                            toString());
    
this.minRedJTextField!.setText(imageColorResults!.getColorRange()!.getMinRed() as Long.
                            toString());
    
this.minGreenJTextField!.setText(imageColorResults!.getColorRange()!.getMinGreen() as Long.
                            toString());
    
this.minBlueJTextField!.setText(imageColorResults!.getColorRange()!.getMinBlue() as Long.
                            toString());
    
this.maxRedJTextField!.setText(imageColorResults!.getColorRange()!.getMaxRed() as Long.
                            toString());
    
this.maxGreenJTextField!.setText(imageColorResults!.getColorRange()!.getMaxGreen() as Long.
                            toString());
    
this.maxBlueJTextField!.setText(imageColorResults!.getColorRange()!.getMaxBlue() as Long.
                            toString());
    
}


    private avgBlueJTextField: javax.swing.JTextField

    private avgGreenJTextField: javax.swing.JTextField

    private avgRedJTextField: javax.swing.JTextField

    private jComboBox1: javax.swing.JComboBox

    private jLabel1: javax.swing.JLabel

    private jLabel10: javax.swing.JLabel

    private jLabel11: javax.swing.JLabel

    private jLabel12: javax.swing.JLabel

    private jLabel13: javax.swing.JLabel

    private jLabel2: javax.swing.JLabel

    private jLabel3: javax.swing.JLabel

    private jLabel4: javax.swing.JLabel

    private jLabel5: javax.swing.JLabel

    private jLabel6: javax.swing.JLabel

    private jLabel7: javax.swing.JLabel

    private jLabel8: javax.swing.JLabel

    private jLabel9: javax.swing.JLabel

    private matchingPixelsJTextField: javax.swing.JTextField

    private maxBlueJTextField: javax.swing.JTextField

    private maxGreenJTextField: javax.swing.JTextField

    private maxRedJTextField: javax.swing.JTextField

    private minBlueJTextField: javax.swing.JTextField

    private minGreenJTextField: javax.swing.JTextField

    private minRedJTextField: javax.swing.JTextField

    private percentMatchingJTextField: javax.swing.JTextField

    private totalPixelsJTextField: javax.swing.JTextField

}
                
            

