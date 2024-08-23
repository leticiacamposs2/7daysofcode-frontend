global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ words: ['house', 'candy', 'test', 'mouse', 'text', 'document', 'array'] }),
    })
)