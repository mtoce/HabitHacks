const handler = async(err, req, res, next) => {
    res.status(200).json({ name: 'John Doe' })
}

export { handler as GET }