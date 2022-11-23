import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Paisagem extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public foto: string

  @column()
  public nome: string

  @column()
  public local: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
} 

