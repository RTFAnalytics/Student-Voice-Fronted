import {Button, Input, Typography, Form, Rate, Checkbox} from 'antd';
import {FC, useState} from 'react';
import Star from '@shared/assets/icons/Star.svg'

import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';

import styles from './SendRatingForm.module.css';
import { SendRatingData } from '../../model/SendRatingData';
import {FlexContainer} from "@shared/ui";

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
    const [isCheck, setIsCheck] = useState(true)

    return (
        <Form
            initialValues={initialValue}
            onFinish={console.log}
            colon={false}
            variant="outlined"
            requiredMark={(labelNode, {required}) => (
                <FlexContainer direction="row" gap="xs" alignItems="start" className={getBemClasses(styles, 'labelWrapper')}>
                    {labelNode}
                    {required ?
                    <Typography className={getBemClasses(styles, 'requiredStar')}>*</Typography>:
                    null}
                </FlexContainer>
            )}
            layout="vertical"
            className={getBemClasses(styles, null, null, className)}
        >
            <FlexContainer direction="column" className={getBemClasses(styles, 'formItem')} alignItems="stretch">
                <Typography className={getBemClasses(styles, 'label')}>
                    Наименование дисциплины
                </Typography>
                <FlexContainer direction="column" gap="s">
                    <Typography className={getBemClasses(styles, 'textValue')}>
                        Математика
                    </Typography>
                    <Form.Item<string>
                        name="lessonName"
                        layout="horizontal"
                        style={{marginBottom: 0}}
                        className={getBemClasses(styles, 'formItemCheck')}
                        label={
                            <Typography className={getBemClasses(styles, 'label', {sublabel: true})}>
                                Верно ли определена пара?
                            </Typography>
                        }
                    >
                        <Checkbox onChange={event => setIsCheck(event.target.checked)}/>
                    </Form.Item>
                </FlexContainer>

                <Form.Item
                    name="lessonName"
                    hidden={isCheck}
                    className={getBemClasses(styles, 'formItem')}
                >
                    <Input placeholder="введите название дисциплины"/>
                </Form.Item>
            </FlexContainer>

            <FlexContainer direction="column"  className={getBemClasses(styles, 'formItem')}>
                <Typography className={getBemClasses(styles, 'label')}>
                    Дата проведения
                </Typography>
                <Typography className={getBemClasses(styles, 'textValue')}>
                    20.25.1265
                </Typography>
            </FlexContainer>

            <FlexContainer direction="column" className={getBemClasses(styles, 'formItem')}>
                <Typography className={getBemClasses(styles, 'label')}>
                    Место проведения
                </Typography>
                <Typography className={getBemClasses(styles, 'textValue')}>
                    Улица Пушкина
                </Typography>
            </FlexContainer>

            <Form.Item<string>
                name="username"
                className={getBemClasses(styles, 'formItem')}
                label={
                    <Typography className={getBemClasses(styles, 'label')}>
                        Ваше ФИО
                    </Typography>
                }
                rules={[{ required: true, message: 'Введите ваше ФИО' }]}
            >
                <Input
                    className={getBemClasses(styles, 'input')}
                    placeholder="введите ФИО"
                />
            </Form.Item
            >
            <Form.Item<number>
                name="rating"
                className={getBemClasses(styles, 'formItem')}
                label={
                    <Typography className={getBemClasses(styles, 'label')}>
                        Оценить прошедшую пару
                    </Typography>
                }
                rules={[{ required: true, message: 'Поставьте оценку' }]}
            >
                <Rate character={<Star />} className={getBemClasses(styles, 'rate')} />
            </Form.Item>
            <Form.Item<string>
                className={getBemClasses(styles, 'formItem')}
                name="comment"
                label={
                    <Typography className={getBemClasses(styles, 'label')}>
                       Комментарий
                    </Typography>
                }
            >
                <Input.TextArea
                    rows={8}
                    placeholder="очень нужный отзыв"
                />
            </Form.Item>
            <Button htmlType="submit" type="primary" className={getBemClasses(styles, 'submitButton')}>
                Отправить
            </Button>
        </Form>
    );
});
