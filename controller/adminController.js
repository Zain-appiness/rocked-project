const {Content}= require('../model');


//TO FETCH ALL THE LIST OF CONTENT FOR ADMIN
async function getAllContetnt(req,res) {
    const {page=1,size=10,filter,sort} = req.query;

    const options={
        where: filter? JSON.parse(filter): {},
        order: sort? [[sort,'ASC']]:[["createdAt","DESC"]],
        limit: parseInt(size),
        offset: (page-1)*size,
    };

    try {
        const contents= await Content.findAll(options);
        res.status(200).json(contents);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

//TO GET CONTENT BY ID
async function getContentById(req,res) {
    const {id}= req.params;
    try {
        const content= await Content.findByPk(id);
        if(!content){
            return res.status(404).json({
                error:"Content not found"
            });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

//TO SAVE CONTENT WITH PROPER STATUS
async function saveContent(req,res) {
    const contentData= req.body;
    console.log(contentData);
    if(!["DRAFT","PUBLISH"].includes(contentData.status)){
        return res.status(404).json({
            error:"NO STATUS OR INVALID STATUS",
        });
    }
    try {
        const content = await Content.create(contentData);
        res.status(201).json({
            message:"Content saved successfully",
            content,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

//UPDATE FUNCTION OF CONTENT BY ID
async function updateContentById(req, res) {
    const { id } = req.params;
    const updateData = req.body;

   
    if (!["PUBLISH"].includes(updateData.status)) {
        return res.status(400).json({
            error: "Invalid status. Status must be 'PUBLISH'."
        });
    }

    try {

        let content = await Content.findByPk(id);
        if (!content) {
            return res.status(404).json({
                error: "Content not found"
            });
        }

     
        content.videoCode = updateData.videoCode || content.videoCode;
        content.videoTitle = updateData.videoTitle || content.videoTitle;
        content.Description = updateData.Description || content.Description;
        content.videoTag = updateData.videoTag || content.videoTag;
        content.thumbNail = updateData.thumbNail || content.thumbNail;
        content.publishDate = updateData.publishDate || content.publishDate;
        content.status = updateData.status || content.status;

        
        await content.save();

        res.status(200).json({
            message: "Content updated successfully",
            content,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

//LIST ALL PUBLISHED DATA TO USER
async function getPublishedContent(req, res) {
    
    const { page = 1, size = 10 } = req.query;

    const limit = parseInt(size);
    const offset = (page - 1) * size;

    try {

        const contents = await Content.findAll({
            where: { status: "PUBLISH" }, 
            attributes: ["videoTitle", "Description", "videoTag"],
            limit,
            offset,
        });

        console.log(contents)
      
        if (contents.count === 0) {
            return res.status(404).json({
                message: "No published content found",
            });
        }

        res.status(200).json({
            message: "PUBLISHED DATA",
            data: contents,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
}

module.exports={getAllContetnt,saveContent,getContentById,updateContentById,getPublishedContent};