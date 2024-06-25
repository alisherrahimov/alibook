import {Text, View} from 'react-native';
import React, {useCallback, useImperativeHandle, useMemo, useRef} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

interface SettingsSheetProps extends React.PropsWithChildren<{}> {
  ref: any;
}

const SettingsSheet: React.FC<SettingsSheetProps> = React.forwardRef(
  (props, ref) => {
    const {styles} = useStyles(styless);
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback(() => {
      // bottomSheetRef.current?.collapse();
    }, []);
    const snapPoints = useMemo(() => ['50%'], []);

    useImperativeHandle(ref, () => ({
      onShow: () => {
        bottomSheetRef.current?.expand();
      },
      onClose: () => {
        bottomSheetRef.current?.close();
      },
    }));

    return (
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        enablePanDownToClose
        enableOverDrag
        backgroundStyle={styles.backgroundSheet}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          {props?.children}
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

export default SettingsSheet;

const styless = createStyleSheet(theme => {
  return {
    contentContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    backgroundSheet: {
      backgroundColor: theme.colors.background,
      shadowColor: theme.colors.typography,

      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
  };
});
