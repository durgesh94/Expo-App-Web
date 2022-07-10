import { AntDesign } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconPlusProps extends IIconProps { }

export const IconPlus = (props: IconPlusProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={AntDesign}
            name="pluscircle"
        />
    );
};