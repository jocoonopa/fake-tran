export default [
    // 1
    {
        dialog: {
            is_contact: true,
            text: 'mmmm',
            delay: 1500,
        },
    },
    // 2
    {
        dialog: {
            is_contact: false,
            text: 'qqq',
        },
        kb: `
            <h5>Kb</h5>
        `,
        deplay: 2000,
    },
    // 3
    {
        dialog: {
            is_contact: true,
            text: 'rrr',
        },
        flow: `<h5>My Flow</h5>`,
        emotion: 'Fuck',
        deplay: 2000,
    },
    // 4
    {
        dialog: {
            is_contact: true,
            text: 'vvvvvvvvvv',
        },
        deplay: 2500,
        emotion: 'Happy',
    },
    // 5
    {
        dialog: {
            is_contact: false,
            text: `
                Very Longggggggggggggggggggggggggggggggggggggggg Text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~m
                <br/>
                Very Longggggggggggggggggggggggggggggggggggggggg Text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~m
                <br/>
                Very Longggggggggggggggggggggggggggggggggggggggg Text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~m
            `,
        },
        deplay: 1000,
        emotion: 'Sad',
        kb: `
            <h5>
                This is a message!
            </h5>
        `,
    }
]