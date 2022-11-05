import Test from "../../serverUtils/models/Test";
import dbConnect from "../../serverUtils/dbConnect";
import {getSession} from "next-auth/react";

export default async function handler(req, res) {
    const {method} = req
    await dbConnect()
    // const session = await getSession({req});
    // const {user} = session

    switch (method) {
        case 'GET':
            try {
                const testNotes = await Test.find()
                console.log(testNotes)
                res.status(200).json({testNotes})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            let data = req.body
            console.log(data)
            if(!data) {
                // title = {first: 'Add your title', second: 555}
                // data = {mainInformation: {
                //         id: 1,
                //         title: 'XXX',
                //         cookingTime: 1,
                //         ripeningTime: 1,
                //         initialData: {
                //             milkType: ['XXX'],
                //             milkPH: {min: 1, max: 1},
                //             protein: {min: 1, max: 1},
                //             fat: {min: 1, max: 1},
                //         },
                //     },}
            }
            try {
                const newTestNote = await Test.create(
                    data
                )
                res.status(201).json({newTestNote})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
        // case 'PUT':
        //     const {notes} = req.body
        //     console.log('notes', notes)
        //     try {
        //
        //         console.log('Try')
        //
        //         // const updatedNotes = await Note.find({user: user.id})
        //
        //         await Note.deleteMany({user: user.id})
        //         const insertedNotes = await Note.insertMany(notes)
        //
        //         console.log('Server updatedNotes ', insertedNotes)
        //
        //         // for (let i = 0; i < updatedNotes.length; i++) {
        //         //     updatedNotes[i] = notes[i]
        //         // }
        //         // const uNotes = updatedNotes.map((n, index) => {
        //         //     n = notes[index]
        //         // })
        //         res.status(201).json({insertedNotes})
        //     } catch (error) {
        //         console.log('Catch', error)
        //
        //         res.status(400).json({success: false})
        //     }
        //     break
    }
}