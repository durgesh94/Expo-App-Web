import { Entypo } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconStarProps extends IIconProps { }

export const IconStar = (props: IconStarProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={Entypo}
            name="star"
        />
    );
};