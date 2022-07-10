import { EvilIcons } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconLocationProps extends IIconProps { }

export const IconLocation = (props: IconLocationProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={EvilIcons}
            name="location"
        />
    );
};