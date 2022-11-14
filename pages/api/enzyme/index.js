import Enzyme from "../../../serverUtils/models/Enzyme";
import dbConnect from "../../../serverUtils/dbConnect";

export default async function handler(req, res) {
    const {method} = req
    await dbConnect()
    // const session = await getSession({req});
    // const {user} = session

    switch (method) {
        case 'GET':
            try {
                const enzyme = await Enzyme.find()
                console.log(enzyme)
                res.status(200).json({enzyme})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            let data = req.body
            console.log('POST')
            console.log(data)
            try {
                const newEnzyme = await Enzyme.create(
                    data
                )
                res.status(201).json({newEnzyme})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}