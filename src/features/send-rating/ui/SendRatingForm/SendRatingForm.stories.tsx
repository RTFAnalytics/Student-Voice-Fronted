import { Meta, StoryObj } from '@storybook/react';

import { createDecorators } from '@shared/mock/storybook';

import { SendRatingForm, Props } from './SendRatingForm';

const meta: Meta<Props> = {
    title: 'features/send-rating/SendRatingForm',
    component: SendRatingForm,
    decorators: createDecorators({}),
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
