import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { createAttachmentPresignedUrl } from '../../businessLogic/todos'
import { createLogger } from '../../utils/logger'

const logger = createLogger('GenerateUploadUrl')

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const todoId = event.pathParameters.todoId
  const url = await createAttachmentPresignedUrl(todoId)

  logger.info('Successfully generated upload url for todoId', { todoId, url })
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    statusCode: 200,
    body: JSON.stringify({
      uploadUrl: url,
    }),
  }
}
