import { TodosAccess } from '../helpers/todosAcess'
import { AttachmentUtils } from '../helpers/attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
//  Implement businessLogic

const logger = createLogger('TodosBusinessLogic')
const todoAccess = new TodosAccess()
const attachmentUtils = new AttachmentUtils()

export async function getTodosForUser(userId: string): Promise<TodoItem[]> {
    return todoAccess.getTodosForUser(userId)
}

export async function createTodo(userId: string, newTodo: CreateTodoRequest) {
    const todoId = uuid.v4()
    return todoAccess.createTodo(userId, todoId, newTodo)
}

export async function updateTodo(userId: string, todoId: string, updatedTodo: UpdateTodoRequest) {
    await todoAccess.updateTodo(userId, todoId, updatedTodo)
    return true
}

export async function deleteTodo(userId: string, todoId: string) {
    await todoAccess.deleteTodo(userId, todoId)
    return true
}

export async function createAttachmentPresignedUrl(todoId: string) {
    const presignedUrl = attachmentUtils.createAttachmentPresignedUrl(todoId)
    logger.info('Generated presignedurl', presignedUrl)
    return presignedUrl
}
