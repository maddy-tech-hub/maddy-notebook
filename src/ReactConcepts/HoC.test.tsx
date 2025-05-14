import { render } from "@testing-library/react";
import HoC from "./HoC";

describe('HoC', () => {
    it('should render with isLogin true', () => {
        const { getByText } = render(<HoC isLogin={true} />);
        expect(getByText(/Welcome to Wrapper Component/i)).toBeInTheDocument();
    });

    it('should render with isLogin false', () => {
        const { getByText } = render(<HoC isLogin={false} />);
        expect(getByText(/Please Re Login/i)).toBeInTheDocument();
    });
});