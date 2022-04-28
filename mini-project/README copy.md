# one-to-many
## Sequelize-Script


npx sequelize-cli model:generate --name student --attributes name:string,nim:integer,kelompokId:integer
npx sequelize-cli model:generate --name kelompok --attributes kelompok:integer
npx sequelize-cli model:generate --name practicalTool --attributes name:string,ukuran:string,jumlah:integer
npx sequelize-cli model:generate --name additionalTool --attributes name:string,ukuran:string,jumlah:integer,harga:integer

npx sequelize-cli model:generate --name kelompokTool --attributes additionalToolId:string,kelompokId:string,practicalToolId:integer

