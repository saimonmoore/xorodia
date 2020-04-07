import { db } from 'src/lib/db'

export const singers = () => {
  return db.singer.findMany()
}

export const singer = ({ id }) => {
  return db.singer.findOne({
    where: { id },
  })
}

export const createSinger = ({ input }) => {
  return db.singer.create({
    data: input,
  })
}

export const updateSinger = ({ id, input }) => {
  return db.singer.update({
    data: input,
    where: { id },
  })
}

export const deleteSinger = ({ id }) => {
  return db.singer.delete({
    where: { id },
  })
}
