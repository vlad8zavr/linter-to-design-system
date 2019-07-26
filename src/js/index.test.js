import { lint } from '../index';

test('first mistake', () => {
    let bem = `{
    "block": "grid",
    "content": [
        {
            "block": "form",
            "content": [
                {
                    "block": "form",
                    "elem": "label",
                    "content": {
                        "block": "text",
                        "mods": { "size": "l" }
                    }
                },
                { "block": "input", "mods": { "size": "l" } },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        }
    ]
}`;
    // let result = lint(bem);
    expect(lint(bem)).toEqual([{code: "FORM.INPUT_AND_LABEL_SIZES_SHOULD_BE_EQUAL", error: "Подписи и поля в форме должны быть одного размера", location: { end: {line: 18, column: 10}, start: {line: 4, column: 9}}}]);
});

