import { AntDesign } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconMinusProps extends IIconProps { }

export const IconMinus = (props: IconMinusProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={AntDesign}
            name="minuscircle"
        />
    );
};