let requestCount = 0;

export default function handler(req, res) {
    if (req.method === 'GET') {
        requestCount++;
        res.status(200).json({ count: requestCount });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
