import { AntDesign } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconBarsProps extends IIconProps { }

export const IconBars = (props: IconBarsProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={AntDesign}
            name="bars"
        />
    );
};