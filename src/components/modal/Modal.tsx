import {Modal as Modall} from 'react-native';
import React, {useImperativeHandle} from 'react';
import {View} from '@components';
import {HEIGHT, WIDTH} from '@constants';

export interface ModalRef {
  show: () => void;
  hide: () => void;
  visible: boolean;
}

interface ModalProps extends React.PropsWithChildren<{}> {
  height?: number;
}

const Modal = React.forwardRef(
  (props: ModalProps, ref: React.Ref<ModalRef>) => {
    const [visible, setVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({
      show: () => setVisible(true),
      hide: () => setVisible(false),
      visible,
    }));

    return (
      <Modall animationType="fade" transparent={true} visible={visible}>
        <View
          flex={1}
          justifyContent="center"
          alignItems="center"
          backgroundColor={'rgba(0,0,0,0.5)'}>
          <View
            padding={25}
            zIndex={1000}
            opacity={1}
            overflow="visible"
            elevation={10}
            width={WIDTH - 40}
            borderRadius={30}
            position="absolute"
            top={HEIGHT / 2 - (props.height ?? HEIGHT / 2) / 2}
            left={WIDTH / 40 + 10}
            height={props.height ?? HEIGHT / 2}>
            {props.children}
          </View>
        </View>
      </Modall>
    );
  },
);

export default Modal;
