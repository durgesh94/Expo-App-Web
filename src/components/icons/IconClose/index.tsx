import { AntDesign } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconCloseProps extends IIconProps { }

export const IconClose = (props: IconCloseProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={AntDesign}
            name="closecircle"
        />
    );
};