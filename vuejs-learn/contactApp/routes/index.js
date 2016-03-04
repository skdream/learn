var express = require('express');
var router = express.Router();
var contact = require('../controllers').Contact;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '联系人管理系统' });
});


router.get('/api/contacts',contact.contacts);
router.get('/api/contact/:id',contact.contact);

router.put('/api/contact/:id',contact.edit);
router.post('/api/contact',contact.add);
router.delete('/api/contact/:id',contact.delete);

module.exports = router;
