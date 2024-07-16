import { Button, Tooltip, Typography } from 'antd';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Cross from '@shared/assets/icons/Cross.svg';
import { Namespace } from '@shared/config/i18n';
import { getBemClasses, typedMemo } from '@shared/lib';
import { ClassNameProps, TestProps } from '@shared/types';
import { Image } from '@shared/ui';

import styles from './FileInputName.module.css';
import { useFileInputContext } from '../FileInputContext';

export type Props = ClassNameProps & TestProps & Readonly<{
    /**
     * Тип содержимого подсказки
     */
    tooltipType: 'name' | 'image';

    /**
     * Класс обертки
     */
    wrapperClassName?: string;
}>;

/**
 * Отображение выбранного файла в виде имени файла
 */
export const FileInputName: FC<Props> = typedMemo(function FileInputName({
    tooltipType,
    className,
    wrapperClassName,
    'data-testid': dataTestId = 'FileInputName',
}) {
    const { t } = useTranslation([Namespace.Common.ns]);
    const { fileName, onClear, fileUrl, disabled } = useFileInputContext();

    const tooltipImage = useCallback(() => {
        return (
            <div className={getBemClasses(styles, 'imageTooltip')}>
                <Image
                    src={fileUrl!}
                    alt={t('fileinput_image', Namespace.Common)}
                    className={getBemClasses(styles, 'image')}
                />
            </div>
        );
    }, [fileUrl, t]);

    return (
        <div className={getBemClasses(styles, 'wrapper', null, wrapperClassName)}>
            <Tooltip
                title={tooltipType === 'image' || disabled ? '' : fileName!}
            >
                <div
                    className={getBemClasses(styles, null, { disabled }, className)}
                    data-testid={dataTestId}
                >
                    <Typography.Text className={getBemClasses(styles, 'name')}>
                        {fileName}
                    </Typography.Text>
                </div>
            </Tooltip>
            {!disabled && <Button
                onClick={onClear}
                icon={ <Cross className={getBemClasses(styles, 'clearButtonIcon')} />}
                className={getBemClasses(styles, 'clearButton')}
                data-testid={`${dataTestId}.clearButton`}
                size="small"
                type="text"
            >
            </Button>}
        </div>
    );
});
