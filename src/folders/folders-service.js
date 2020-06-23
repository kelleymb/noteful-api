const FoldersService = {
    getAllFolders(knex) {
        return knex('folders').select('*')
    },
    insertFolder(knex, folder) {
        return knex 
            .insert(folder)
            .into('folders')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, id) {
        return knex
            .from('folders')
            .select('*')
            .where('id', id)
            .first()
    },
}

module.exports = FoldersService