import {screen, render} from '@testing-library/react';
import {createWrapper} from '@shared/mock/jest'
import {
    mockAxios,
    resetAxiosMock,
} from '@shared/mock/axios';
import {
    mockI18Next,
    restoreI18NextMock,
} from '@shared/mock/i18n';

import {Rate} from './Rate';

describe('/Rate', () => {
    const wrapper = createWrapper({});

    beforeAll(() => {
        mockI18Next();
        window.scrollTo = jest.fn();
    });

    afterAll(() => {
        restoreAxiosMock();
        restoreI18NextMock();
    });

    beforeEach(() => {
        mockAxios();
    });

    afterEach(() => {
        resetAxiosMock();
    });

    it('Компонент появился в DOM дереве', async () => {
        render(<Rate/>, {wrapper});

        const component = await screen.findByTestId('Rate');
        expect(component).toBeInTheDocument();
    });
});
