const db = (anime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (anime === "demon-slayer") {
                return resolve(require("./demonSlayerModel.json"));
            }
            return reject(
                new Error(`Anime does not exist ${anime})in our database.`)
            );
        }, 1500);
    });
};

module.exports = db;