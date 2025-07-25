import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { scale } from "../../theme/scale";
import { FontSize } from "../../theme/font-size";
import { typography } from "../../theme/typography";
import { FlatList } from "react-native-gesture-handler";


export const createStyles = (isHighlightedL?: boolean) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            
        },
        headerAction: {
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: scale(10),
        },
        person: {
            height: scale(40),
            width: scale(40),
            borderRadius: 100,
        },
        input:{
            marginHorizontal: scale(18),

        },
        title: {
            fontSize: FontSize.FONT_20Px,
            fontFamily: typography.bold,
            color: colors.black,
        },
        main: {
            flex: 1,
            //paddingHorizontal: scale(18),
        },
        singleItem: {
            backgroundColor: isHighlightedL ? colors.white : 'transparent',
            paddingVertical: scale(10),
            marginVertical: scale(10),
            flexDirection: 'row',
            alignItems: 'flex-end',
            columnGap: scale(10),
            paddingHorizontal: scale(18),
            
        },
        messageContainer: {
            flex: 1,
            rowGap: scale(4),

        },
        name: {
            fontSize: FontSize.FONT_15Px,
            fontFamily: typography.bold,
            color: colors.black,
        },
        message: {
            fontSize: FontSize.FONT_12Px,
            fontFamily: typography.regular,
            color: colors.gray,
        },
        time: {
            fontSize: FontSize.FONT_12Px,
            fontFamily: typography.regular,
            color: colors.placeholder,
        },
        timeContainer: {
            columnGap: scale(10),
            alignItems: 'center',
            rowGap: scale(4),

        },
        badgeText: {
            fontFamily: typography.medium,
            fontSize: FontSize.FONT_12Px,
            color: colors.white,
        },
        badge: {backgroundColor: colors.badgeBg,
            height: scale(20),
            width: scale(20),
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',

 },

 

    });