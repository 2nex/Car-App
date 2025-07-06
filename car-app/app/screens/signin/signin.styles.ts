import { StyleSheet } from "react-native"
import { colors } from "../../theme/colors";
import { scale } from "../../theme/scale";
import { FontSize } from "../../theme/font-size";



export const createStyles = () => 
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            paddingHorizontal: scale(18),
            paddingTop: scale(28),
        },

        carlogo : {
            height: scale(38),
            width: scale(38),

        },
         flexRow: {
        
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: scale(12),
                paddingVertical: scale(12),

                },
                titleStyle: {
                    fontSize:FontSize.FONT_24Px,
                    color: colors.black,
                },
                textContainer : {
                    paddingTop: scale(38),
                    marginBottom: scale(12),

                },

                textStyle : {
                    color: colors.black,
                    fontSize: FontSize.FONT_26Px,
                },
                textRemember :{
                    fontSize: FontSize.FONT_12Px,
                    color: colors.placeholder,
                    fontWeight: '500',



                },

                inputContainer:{
                    rowGap: scale(6),
                },

                colG2: {
                    columnGap: scale(2),
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: scale(16),
                },
                forgotContainer:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    
                },
                
                outlineButton: {
                    backgroundColor: colors.outlineButtonBg,
                    borderWidth: 1,
                    color: colors.button,
                },
                outlineButtonText: {
                    color: colors.black,
                    fontWeight: '400',
                },
                buttonText: {
                    fontWeight: '400',

                },
                buttonContainer: {
                    rowGap: scale(14),
                    marginTop: scale(12),
                },
                borderContainer: {
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'space-between',
                 columnGap: scale(12),
                 marginTop: scale(18),

            
                },
                orText:{
                    fontSize: FontSize.FONT_12Px,
                    width: scale(15),
                    color:colors.placeholder,
                    
                    
                },
                orBorder: {
                    height: 1,
                    flex: 1,
                    backgroundColor: colors.border,
                },
                buttonStyle: {
                    flexDirection: 'row',
                    columnGap: scale(12),
                },
                iconButtonStyle:{
                    backgroundColor: colors.outlineButtonBg,
                    borderWidth: 1,
                    color: colors.button,
                    flexDirection: 'row',
                    columnGap: scale(18),

                    

                },
                mt14: {
                    marginTop: scale(14),
                },
                haveAccountContainer:{
                    marginVertical : scale(4),
                    alignItems: 'center',


                },
                donthaveText:{
                    color: colors.placeholder,
                    fontWeight: '400',
                }
            
            
         
              

    });
