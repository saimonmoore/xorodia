import { db } from 'src/lib/db'

export const songs = () => {
  return db.song.findMany()
}

export const song = ({ id }) => {
  return db.song.findOne({
    where: { id },
  })
}

export const createSong = ({ input }) => {
  return db.song.create({
    data: input,
  })
}

export const updateSong = ({ id, input }) => {
  return db.song.update({
    data: input,
    where: { id },
  })
}

export const deleteSong = ({ id }) => {
  return db.song.delete({
    where: { id },
  })
}
