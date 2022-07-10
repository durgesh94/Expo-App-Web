import { Ionicons } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconPersonProps extends IIconProps { }

export const IconPerson = (props: IconPersonProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={Ionicons}
            name="person-outline"
        />
    );
};