import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one first param', () => {
        expect(classNames('some')).toBe('some');
    });

    test('with additional classes', () => {
        expect(classNames('some', {}, ['one', 'two']))
            .toBe('some one two');
    });

    test('with mods', () => {
        const mods = { hovered: true, outlined: false };
        expect(classNames('some', mods, ['one', 'two']))
            .toBe('some one two hovered');
    });
});
