import { db } from 'src/lib/db'

export const concerts = () => {
  return db.concert.findMany()
}

export const concert = ({ id }) => {
  return db.concert.findOne({
    where: { id },
  })
}

export const createConcert = ({ input }) => {
  return db.concert.create({
    data: input,
  })
}

export const updateConcert = ({ id, input }) => {
  return db.concert.update({
    data: input,
    where: { id },
  })
}

export const deleteConcert = ({ id }) => {
  return db.concert.delete({
    where: { id },
  })
}
