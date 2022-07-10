import { Ionicons } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconSearchProps extends IIconProps { }

export const IconSearch = (props: IconSearchProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={Ionicons}
            name="search"
        />
    );
};