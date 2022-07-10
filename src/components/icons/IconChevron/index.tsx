import { Feather } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconChevronProps extends IIconProps {
    type?: string;
}

export const IconChevron = ({
    type = "chevron-down",
    ...props
}: IconChevronProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={Feather}
            name={type}
        />
    );
};