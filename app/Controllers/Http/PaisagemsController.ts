import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Paisagem from "App/Models/Paisagem";
import PaisagemValidator from 'App/Validators/PaisagemValidator'

export default class PaisagemsController {
public async index({ }: HttpContextContract) {
    const topic = await Paisagem.all()
    return topic
  }

  public async store({ request}: HttpContextContract) {
    const data = await request.validate(PaisagemValidator)
    const topic = await Paisagem.create({ ...data })
    return topic
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const topic = await Paisagem.findOrFail(params.id)
      return topic
    } catch (error) {
      response.status(400).send("Mensagem não encontrada!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { foto,nome,local } = await request.validate(PaisagemValidator)
    try {
      const topic = await Paisagem.findOrFail(params.id)
      topic.foto= foto
      topic.nome = nome
      topic.local = local
      await topic.save()
      return topic

    } catch (error) {
      response.status(400).send("Mensagem não encontrada!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const paisagem = await Paisagem.findOrFail(params.id)
      await paisagem.delete()
      return paisagem
    } catch (error) {
      response.status(400).send("Mensagem não encontrada!!!")
    }
  }
}
