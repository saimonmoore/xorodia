import { db } from 'src/lib/db'

export const directors = () => {
  return db.director.findMany()
}

export const director = ({ id }) => {
  return db.director.findOne({
    where: { id },
  })
}

export const createDirector = ({ input }) => {
  return db.director.create({
    data: input,
  })
}

export const updateDirector = ({ id, input }) => {
  return db.director.update({
    data: input,
    where: { id },
  })
}

export const deleteDirector = ({ id }) => {
  return db.director.delete({
    where: { id },
  })
}
