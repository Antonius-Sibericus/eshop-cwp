import { classNames } from './classNames';

describe('classNames', () => {
    test('Only first parameter', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('First and additional parameters', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('First, additional and mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: true,
        }, ['class1', 'class2'])).toBe(expected);
    });

    test('First, additional and mods (some are false)', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: false,
        }, ['class1', 'class2'])).toBe(expected);
    });

    test('First, additional and mods (some are undefined)', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: undefined,
        }, ['class1', 'class2'])).toBe(expected);
    });
});
