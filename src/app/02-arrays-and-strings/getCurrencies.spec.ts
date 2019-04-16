import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should return the supported currencies', () => {
        const currencies = getCurrencies();
        expect(currencies).toContain('USD');
        expect(currencies).toContain('EUR');
        expect(currencies).toContain('BGN');
    });
});