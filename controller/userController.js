const {WatchedContent} = require('../model');

async function markWatched(req,res){
   const userContent= req.body;
console.log(userContent);
    try {
        const content =await WatchedContent.create(userContent);
        res.status(200).json({
            message:"CONTENT MARKED",
            content
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
} 

// Function to update the 'marked' status of the content by ID
async function updateMarkedStatus(req, res) {
    const { id } = req.params; 
    const { marked } = req.body; 

    if (!['MARKED', 'UNMARKED'].includes(marked)) {
        return res.status(400).json({
            error: "Invalid 'marked' status. Allowed values are 'MARKED' or 'UNMARKED'."
        });
    }

    try {
        let content = await WatchedContent.findByPk(id);
        
        if (!content) {
            return res.status(404).json({
                error: "Content not found"
            });
        }

   
        content.marked = marked;

   
        await content.save();

        res.status(200).json({
            message: "Content marked status updated successfully",
            content
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


module.exports= {markWatched,updateMarkedStatus}
