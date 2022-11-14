import Recipe from "../../../serverUtils/models/Recipe";
import dbConnect from "../../../serverUtils/dbConnect";

export default async function handler(req, res) {
    const {method} = req
    await dbConnect()
    // const session = await getSession({req});
    // const {user} = session

    switch (method) {
        case 'GET':
            try {
                const recipes = await Recipe.find()
                console.log(recipes)
                res.status(200).json({recipes})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        case 'POST':
            let data = req.body
            console.log(data)
            try {
                const newRecipe = await Recipe.create(
                    data
                )
                res.status(201).json({newRecipe})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
    //     case 'PUT':
    //         const {notes} = req.body
    //         console.log('notes', notes)
    //         try {
    //
    //             console.log('Try')
    //
    //             // const updatedNotes = await Note.find({user: user.id})
    //
    //             await Note.deleteMany({user: user.id})
    //             const insertedNotes = await Note.insertMany(notes)
    //
    //             console.log('Server updatedNotes ', insertedNotes)
    //
    //             // for (let i = 0; i < updatedNotes.length; i++) {
    //             //     updatedNotes[i] = notes[i]
    //             // }
    //             // const uNotes = updatedNotes.map((n, index) => {
    //             //     n = notes[index]
    //             // })
    //             res.status(201).json({insertedNotes})
    //         } catch (error) {
    //             console.log('Catch', error)
    //
    //             res.status(400).json({success: false})
    //         }
    //         break
    // }
}

//.map((n, index) => {return notes[index]}).save()
