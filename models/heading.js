module.exports = function (sequelize, Datatypes) {
    var Heading = sequelize.define("Heading", {
        mmsid: Datatypes.INTEGER,
        heading: Datatypes.STRING
    })
    return Heading
}