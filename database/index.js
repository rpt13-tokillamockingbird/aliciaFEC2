const aws = require('aws-sdk');
const config = require('../config.json');

(async function () {
	try {
		aws.config.setPromisesDependency();
		aws.config.update({
			accessKeyId: config.accessKeyId,
			secretAccessKey: config.secretAccessKey,
			region: 'us-east-2'
		});

		const s3 = new aws.S3();
		const response = await s3
			.listObjectsV2({
				Bucket: 'rpt13.fec.images'
			})
			.promise();

		//console.log(response);
	} catch (e) {
		console.log('error', e);
	}
	//debugger;
})();
