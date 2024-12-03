const WatchedContent = require('../model/watched.content');

async function markWatched(req,res){
    const userEmail= req.headers["user-email"];
    const {contentId}= req.body;
    const marked='MARKED'

    try {
        await WatchedContent.create({
            contentID, userEmail,marked
        });
        res.status(200).json({
            message:"CONTENT MARKED"
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
} 

module.exports= {markWatched}
