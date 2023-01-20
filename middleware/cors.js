export default function({ res, req }) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
}