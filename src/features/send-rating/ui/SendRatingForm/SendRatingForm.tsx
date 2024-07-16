import { Button, Input, Typography, Form, Rate } from 'antd';
import { FC } from 'react';
import * as Yup from 'yup';

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';

import styles from './SendRatingForm.module.css';
import { SendRatingData } from '../../model/SendRatingData';

export type Props = ClassNameProps & TestProps & Readonly<{}>;

const initialValue: SendRatingData = {
    lessonName: '',
    username: '',
    rating: null,
    comment: '',
};

export const SendRatingForm: FC<Props> = typedMemo(function SendRatingForm({
    className,
}) {
    return (
        <Form
            initialValues={initialValue}
            onFinish={console.log}
            variant="filled"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className={getBemClasses(styles, null, null, className)}
        >
            <Typography.Title level={3}>
                Обратная связь
            </Typography.Title>
            <Form.Item<string>
                name="lessonName"
                label="Название дисциплины"
                rules={[{ required: true, message: 'Укажите дисциплину' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<string>
                name="username"
                label="Ваше ФИО"
                rules={[{ required: true, message: 'Введите ваше ФИО' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<number>
                name="rating"
                label="Оценка"
                rules={[{ required: true, message: 'Поставьте оценку' }]}
            >
                <Rate />
            </Form.Item>
            <Form.Item<string>
                name="comment"
                label="Комментарий"
            >
                <Input.TextArea />
            </Form.Item>
            <Button htmlType="submit" type="primary">
                Отправить оценку
            </Button>
        </Form>
    );
});
