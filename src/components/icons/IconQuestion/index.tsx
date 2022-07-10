import { AntDesign } from '@expo/vector-icons';
import { Icon, IIconProps } from 'native-base';
import React from 'react';

export interface IconQuestionProps extends IIconProps { }

export const IconQuestion = (props: IconQuestionProps) => {
    return (
        <Icon
            size="sm"
            {...props}
            as={AntDesign}
            name="questioncircleo"
        />
    );
};