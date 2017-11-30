const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

var url = 'https://gateway.ipfs.io/ipfs/QmdbLLos3kLMgDWrojSezYAgps41ehyFreMRsXwGqcbVpH';

var hostemail = 'csangh0417@gmail.com';

var guestemail = 'csangh0417@naver.com';

let transporter = nodemailer.createTransport(smtpTransport({
	service: 'gmail',
	auth: {
		user: 'mitionplatform@gmail.com',
		pass: 'altus123!@#'
	}
}))

let mailOptions = {
	from: 'mitionplatform@gmail.com',
	to: hostemail + ',' + guestemail, 
	subject: 'MITION platform file url !',
	text: 'file url : ' + url
}

transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.log(error)
	}
	
	console.log('Message %s sent: %s', info.messageId, info.response)
})

