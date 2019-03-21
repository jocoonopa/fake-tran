export default [
    {
        dialog: {
            is_contact: true,
            text: 'mmmm',
            delay: 1500,
        },
    },
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
    {
        dialog: {
            is_contact: true,
            text: 'rrr',
        },
        flow: `<h5>Kb</h5>`,
        emotion: 'Fuck',
        deplay: 2000,
    },
    {
        dialog: {
            is_contact: true,
            text: 'vvvvvvvvvv',
        },
        deplay: 1000,
        emotion: 'Happy',
    }
]