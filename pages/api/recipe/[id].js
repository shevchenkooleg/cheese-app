import dbConnect from "../../../serverUtils/dbConnect";
import Recipe from "../../../serverUtils/models/Recipe";


export default async function handler(req, res) {
    const {
        query: {targetId},
        method,
    } = req
    // const session = await getSession({req});
    // const {user} = session

    await dbConnect()

    switch (method) {

        case 'DELETE':
            try {
                const targetId = req.query.id
                const verifyRecipe = await Recipe.findById(targetId)
                if (!verifyRecipe) return res.status(400).json({message: "There is no requested Recipe with this id"})
                await Recipe.findByIdAndDelete(targetId)
                res.status(200).json({message: "Recipe has been successfully deleted"})
            } catch (err) {
                res.status(400).json({success: false})
            }
            break
    }
}