import Leaven from "../../../serverUtils/models/Leaven";
import dbConnect from "../../../serverUtils/dbConnect";

export default async function handler(req, res) {
    const {method} = req
    await dbConnect()
    // const session = await getSession({req});
    // const {user} = session

    switch (method) {
        case 'GET':
            try {
                const leavens = await Leaven.find()
                console.log(leavens)
                res.status(200).json({leavens})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            let data = req.body
            console.log('POST')
            console.log(data)
            try {
                const newLeaven = await Leaven.create(
                    data
                )
                res.status(201).json({newLeaven})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}