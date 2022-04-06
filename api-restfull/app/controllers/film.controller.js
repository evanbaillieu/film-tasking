const db = require("../models");
const Op = db.Sequelize.Op;
const User = db.user;
const Film = db.film;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };
  
  const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: content } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, content, totalPages, currentPage };
  };

exports.findAll = async (req, res) => {
try{
    const { title, page, size, userId } = req.query;
    const conditionTitle = title ? { titre: { [Op.like]: `%${title}%` } } : null;
    const conditionUserId =  { userId };
    const nb = page - 1;
    const { limit, offset } = getPagination(nb, size);
    const data = await Film.findAndCountAll({ where: {...conditionTitle, ...conditionUserId}, limit, offset });
    const response = getPagingData(data, page, limit);
    return res.status(200).send(response)
    }catch{
        return res.status(500).send({
            message: "Error findall film"
        })
    }

}
exports.findAllV2 = async (req, res) =>{
    const {title, userId} = req.query;
    const conditionTitle = title ? { titre: { [Op.like]: `%${title}%` } } : null;
    const conditionUserId =  { userId };
    const data = await Film.findAll({where: {...conditionTitle, ...conditionUserId}})
    return res.status(200).send(data);

}

exports.findByTitle = async (req, res) => {
    console.log(req)
    res.status(200).send({message: "succes"})
}

exports.findById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Film.findByPk(id, { include: ["user"] })
        if(data)
            return res.send(data)
        else
            return res.status(404).send({
                message: `Cannot find film with id=${id}.`
              });
    } catch (err) {
            return res.status(500).send({
              message: "Error find film with id=" + id
            });
    }
}

exports.create = (req, res) => {
    Film.create({
        titre: req.body.titre,
        url: req.body.url,
        description: req.body.description,
        note: req.body.note,
        userId: req.body.userId
    }).then(data => {
        res.status(202).send(data);
    }).catch(err =>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the film."
          });
    })
}

exports.findByUser = async (req, res) => {
    const id = req.params.id;
   try{
    const data = await User.findByPk(id, {include: ["films"]})
    return res.status(200).send(data);
   }catch(err){
    return res.status(500).send({
        message:
          err.message || "Error find user with id=" + id
      });
   }

}