from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


# noinspection PyAbstractClass
class StaticStorage(S3Boto3Storage):
	location = settings.STATIC_LOCATION
	default_acl = 'public-read'

	def __init__(self, *args, **kwargs):
		kwargs['custom_domain'] = settings.AWS_CLOUDFRONT_DOMAIN
		super(StaticStorage, self).__init__(*args, **kwargs)


# noinspection PyAbstractClass
class PublicMediaStorage(S3Boto3Storage):
	location = settings.PUBLIC_MEDIA_LOCATION
	default_acl = 'public-read'
	file_overwrite = False

	def __init__(self, *args, **kwargs):
		kwargs['custom_domain'] = settings.AWS_CLOUDFRONT_DOMAIN
		super(PublicMediaStorage, self).__init__(*args, **kwargs)
