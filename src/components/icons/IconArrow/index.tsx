import { AntDesign } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconArrowProps extends IIconProps {
    type?: string;
}

export const IconArrow = ({
    type = "arrowright",
    ...props
}: IconArrowProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={AntDesign}
            name={type}
        />
    );
};