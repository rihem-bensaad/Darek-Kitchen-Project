const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name: 'rbktn11',
    api_key: '136127315678459',
    api_secret: '1Sgh5ck3lM8cpKsvAZURFwBCuXY'
});

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}