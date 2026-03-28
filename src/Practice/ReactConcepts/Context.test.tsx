import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Context, Provider } from './Context';

describe('Context', () => {
    it('should render context value and handle event', () => {
        const { getByTestId } = render(<Provider><Context /></Provider>);

        const contextValue = getByTestId('context-value');
        const handleEventButton = getByTestId('handleEvent');

        expect(contextValue).toHaveTextContent('Count : 0');

        fireEvent.click(handleEventButton);

        expect(contextValue).toHaveTextContent('Count : 1');
    });

    it('should handle multiple clicks', () => {
        const { getByTestId } = render(<Provider><Context /></Provider>);

        const contextValue = getByTestId('context-value');
        const handleEventButton = getByTestId('handleEvent');

        expect(contextValue).toHaveTextContent('Count : 0');

        fireEvent.click(handleEventButton);
        fireEvent.click(handleEventButton);

        expect(contextValue).toHaveTextContent('Count : 2');
    });
});
