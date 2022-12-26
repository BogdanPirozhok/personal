import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactInputs } from '@/const/interfaces';
import axios from 'axios';

type Data = {
    message: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        res.status(405).send({
            message: 'Only POST requests allowed'
        });
        return;
    }

    // TODO: Сделать валидацию
    const data: ContactInputs = req.body.data;

    axios.get(`https://api.telegram.org/bot${process.env.NEXT_PRIVETE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        params: {
            chat_id: process.env.NEXT_PRIVETE_TELEGRAM_CHAT_ID,
            text: `Имя: ${data.name} \n`
                + `Email: ${data.email} \n`
                + `Почта: ${data.phone} \n`
                + `Тема: ${data.subject} \n`
                + `Сообщение: ${data.message}`
        }
    })
        .then(() => {
            res.status(200).json({
                message: 'done'
            });
        })
        .catch(() => {
            res.status(500).json({
                message: 'Send to telegram is fail'
            });
        });
}
